import type { GetStaticPaths, GetStaticProps } from "next";
import { asText } from "@prismicio/client/richtext";
import { asHTML, type RichTextField } from "@prismicio/client";
import Head from "next/head";
import styles from "../post.module.scss";
import { createClient } from "../../../services/prismicio";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function PostPreviewProps({ post }: PostPreviewProps) {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.data) {
      router.push(`/posts/${post.slug}`);
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>{`${post.title} | Ignews`}</title>
      </Head>
      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={`${styles.postContent} ${styles.previewContent}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>

          <div className={styles.continueReading}>
            Wanna continue reading?
            <Link href={`/`}>Subscribe now 🤗</Link>
          </div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          slug: "aprenda-qualquer-coisa-com-o-assistente-de-ia-do-google",
        },
      },
    ],
    fallback: "blocking",
    // true, false, blocking
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = createClient();

  const response = await prismic.getByUID("posts", String(slug), {});

  const post = {
    slug,
    title: asText(response.data.title),
    content: asHTML(response.data.content.splice(0, 3) as RichTextField),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: { post },
    revalidate: 60 * 30, // 30 minutes
  };
};
