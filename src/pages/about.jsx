import Head from 'next/head';
import AboutMain from "../components/AboutMain";
import MobAboutMain from "../components/AboutMain/mobIndex";
import useIsMobile from "../hooks/useIsMobile";
import { useEffect } from "react";

function About() {


  let mob = useIsMobile();
  useEffect(()=>{
    console.log(mob);
  },[mob]);

  return (
    <>
      <Head>
        <title>About | D.Percent</title>
      </Head>


      {mob ?
        <MobAboutMain/>
        :
          <AboutMain/>
        }
    </>
  );
}

export default About;
