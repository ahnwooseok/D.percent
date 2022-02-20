import Head from 'next/head';
import SelectMain from "../components/SelectMain";
import useIsMobile from "../hooks/useIsMobile";
import { useEffect } from "react";
import MobSelectMain from "../components/SelectMain/mobIndex";

function Select() {

  let mob = useIsMobile();
  useEffect(()=>{
    console.log(mob);
  },[mob]);

  return (
    <>
      <Head>
        <title>Select | D.Percent</title>
      </Head>

      {mob ?
        <MobSelectMain/>
        :
        <SelectMain/>

      }

    </>
  );
}

export default Select;
