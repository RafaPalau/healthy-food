import Head from "next/head";
import BestecipesCards from "../components/BestRecipesCards";
import BlockFinally from "../components/BlockFinally";
import BlockServices from "../components/BlockServices";
import Carousel from "../components/Carousel";
import MainIllustration from "../components/mainIllustration";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Healthy Food</title>
        <link rel='shortcut icon' href='/favicon.ico/' />
      </Head>
      <MainIllustration />
      <BestecipesCards />
      <BlockServices />
      <Carousel />
      <BlockFinally />
    </>
  );
}
