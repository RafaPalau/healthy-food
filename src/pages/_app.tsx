import { AppProps } from "next/app";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import { Header } from "../components/Header";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Aside />
      <Component {...pageProps} />
    
    </>
  );
}

export default MyApp;
