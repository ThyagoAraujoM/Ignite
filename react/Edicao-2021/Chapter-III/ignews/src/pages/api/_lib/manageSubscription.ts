import { getUserByCustomerId } from "../../../Models/User";
import { dbAdmin } from "../../../services/firebaseAdmin";
import { stripe } from "../../../services/stripe";

export async function saveSubscription(
  subscriptionId: string,
  customerId: string
) {
  const user = await getUserByCustomerId(customerId);
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  const subscriptionData = {
    id: subscription.id,
    userId: user.id,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
    updatedAt: new Date(),
  };

  const subscriptionRef = dbAdmin
    .collection("subscription")
    .doc(subscription.id);
  
  await subscriptionRef.set(subscriptionData);
}
