import type { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";
import { getSession } from "next-auth/react";
import { dbAdmin } from "../../services/firebaseAdmin";

type User = {
  id: string;
  stripe_customer_id?: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    const session = await getSession({ req });
    const user = await getUser(session);
    if(!user){
      return res.status(400).end("User not found.")
    }
    
    if (!user.stripe_customer_id) {
      const stripeCustomer = await stripe.customers.create({
        email: session.user.email,
      });

      await dbAdmin.collection("users").doc(user.id).set(
        {
          stripe_customer_id: stripeCustomer.id,
        },
        { merge: true }
      );
      user.stripe_customer_id = stripeCustomer.id;
    }

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: user.stripe_customer_id,
      payment_method_types: ["card"],
      billing_address_collection: "required",
      mode: "subscription",
      allow_promotion_codes: true,
      line_items: [
        {
          price: "price_1RxJKVGhhLCU5gBaOk9yRcmH",
          quantity: 1,
        },
      ],
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });

    return res.status(200).json({ sessionId: stripeCheckoutSession.id });
  } else {
    res.setHeader("Allow", "POST");
    res.status(401).end("Method not allowed");
  }
};

async function getUser(session): Promise<User|null> {
  const snapshot = await dbAdmin
    .collection("users")
    .where("email", "==", session.user.email)
    .get();

  if (snapshot.empty) {
    return null;
  }

  const userDoc = snapshot.docs[0];
  return {
    id: userDoc.id,
    ...(userDoc.data() as Omit<User, "id">),
  };;
}
