import type { AppProps } from "next/app";
import "@self/styles/index.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
