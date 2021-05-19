import Head from 'next/head';
import BestecipesCards from '../components/BestRecipesCards';
import BlockFinally from '../components/BlockFinally';
import BlockServices from '../components/BlockServices';
import Carousel from '../components/Carousel';
import Illustration from '../components/Illustration';

import styles from './home.module.scss';

export default function Home() {
  return (

   <>
    <Head ><title>Home | Healthy Food</title></Head>

<Illustration />

<BestecipesCards />
<BlockServices />
<Carousel />
<BlockFinally />
</>
  )
}
