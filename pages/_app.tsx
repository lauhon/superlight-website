import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

import "../styles/globals.css";

import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
