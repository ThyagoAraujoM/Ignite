import { signIn, useSession } from "next-auth/react";
import styles from "./styles.module.scss";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import type { Session } from "next-auth";
import { useRouter } from "next/router";

type SubscribeButtonProps = {
  priceId: string;
};

type SessionWithSubscription = Session & {
  activeSubscription: {
    status: "active" | "canceled";
  };
};

export default function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const dataSession = useSession();
  const session = dataSession.data as SessionWithSubscription;
  const router = useRouter();

  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }

    if(session.activeSubscription){
      router.push("/posts");
      return;
    }

    try {
      const response = await api.post("/subscribe");
      const { sessionId } = response.data;

      const stripe = await getStripeJs();
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      alert(error.message);
    }

    // criação do checkout session
  }

  return (
    <button
      type="button"
      onClick={handleSubscribe}
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
}
