import Head from 'next/head';

import HomeMain from '../components/HomeMain';
import useIsMobile from "../hooks/useIsMobile";
import { useEffect } from "react";
import MobHomeMain from "../components/HomeMain/mobIndex";

function Home() {

  let mob = useIsMobile();
  useEffect(()=>{
    console.log(mob);
  },[mob]);


  return (
    <>
      <Head>
        <title>D.Percent</title>
      </Head>


      {mob ?
        <MobHomeMain />
        :
        <HomeMain />
      }
    </>
  );
}

export default Home;
