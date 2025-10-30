import Head from "next/head";
import styles from "./styles.module.scss";
import { type GetStaticProps } from "next";
import { createClient } from "../../services/prismicio";
import { asText } from "@prismicio/client";

type Post = {
  slug: string;
  title: string;
  exerpt: string;
  updatedAt: string;
};

type PostsProps = {
  posts: Post[];
};

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        {posts.map((post) => (
          <div className={styles.posts}>
            <a key={post.slug} href="">
              <time> {post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.exerpt}</p>
            </a>
          </div>
        ))}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = createClient();

  const response = await prismic.getByType("posts", {
    page: 1,
    pageSize: 10,
    fetch: ["posts.title", "posts.content"],
  });

  const posts = response.results.map((post) => {
    const content = post.data.content;
    const firstParagraph = content.find((block: any) => {
      return block.type === "paragraph";
    }) as any;

    return {
      slug: post.uid,
      title: asText(post.data.title),
      excerpt: firstParagraph?.text ?? "",
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: { posts: posts },
  };
};
