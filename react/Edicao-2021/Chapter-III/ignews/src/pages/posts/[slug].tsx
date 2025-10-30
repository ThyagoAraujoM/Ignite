import { getSession } from "next-auth/react";
import { createClient } from "../../services/prismicio";
import type { GetServerSideProps } from "next";
import { asText } from "@prismicio/client/richtext";
import { asHTML } from "@prismicio/client";
import Head from "next/head";
import styles from "./post.module.scss";
import type { Session } from "next-auth";

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

type SessionWithSubscription = Session & {
  activeSubscription: {
    status: "active" | "canceled"
  }
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>
      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req }) as SessionWithSubscription;
  const { slug } = params;
  
  if(!session.activeSubscription){
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  const prismic = createClient();

  const response = await prismic.getByUID("posts", String(slug), {});

  const post = {
    slug,
    title: asText(response.data.title),
    content: asHTML(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return { props: { post } };
};
