import { signIn, useSession } from "next-auth/react";
import styles from "./styles.module.scss";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
type SubscribeButtonProps = {
  priceId: string;
};

export default function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const {data: session} = useSession();

  async function handleSubscribe(){
    if(!session){
      signIn("github");
      return;
    }

    try {
      const response = await api.post("/subscribe");
      const { sessionId } = response.data;

      const stripe = await getStripeJs();
      await stripe.redirectToCheckout({sessionId});


    } catch (error) {
      alert(error.message);
    }

    // criação do da checkout session
  }

  return (
    <button type='button' onClick={handleSubscribe} className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
