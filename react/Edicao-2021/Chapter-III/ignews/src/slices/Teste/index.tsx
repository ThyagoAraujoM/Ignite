import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from './style.module.scss'

/**
 * Props for `Teste`.
 */
export type TesteProps = SliceComponentProps<Content.TesteSlice>;

/**
 * Component for "Teste" Slices.
 */
const Teste: FC<TesteProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for teste (variation: {slice.variation}) slices.
      <br />
      <h1 className={styles.content}>{slice.primary.title}</h1>
      <strong>You can edit this slice directly in your code editor.</strong>
      {/**
       * 💡 Use the Prismic MCP server with your code editor
       * 📚 Docs: https://prismic.io/docs/ai#code-with-prismics-mcp-server
       */}
    </section>
  );
};

export default Teste;
