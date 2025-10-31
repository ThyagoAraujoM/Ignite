import { AppProps } from "next/app";
// import { Header } from "../components/Header";
import "../styles/globals.module.scss";
// import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <SessionProvider session={pageProps.session}>
      // <Header />
      <Component {...pageProps} />
    // </SessionProvider>
  );
}

export default MyApp;
