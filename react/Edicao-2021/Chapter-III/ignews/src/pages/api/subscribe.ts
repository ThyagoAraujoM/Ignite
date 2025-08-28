import type { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";
import { getSession } from "next-auth/react";
import { getUserByEmail, updateUser } from "../../Models/User";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    const session = await getSession({ req });
    const user = await getUserByEmail(session.user.email);

    if (!user) {
      return res.status(400).end("User not found.");
    }

    if (!user.stripe_customer_id) {
      const stripeCustomer = await stripe.customers.create({
        email: session.user.email,
      });
      await updateUser(user.id, {
        stripe_customer_id: stripeCustomer.id,
      });
      
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
