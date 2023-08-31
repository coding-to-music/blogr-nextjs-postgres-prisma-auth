// /pages/_app.tsx

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
        <ToastContainer />
      </SessionProvider>
      <Analytics />
    </>
  );
}

export default App;
