import Head from 'next/head';
import SelectMain from "../components/SelectMain";
import useIsMobile from "../hooks/useIsMobile";
import { useEffect } from "react";

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
      <SelectMain/>

    </>
  );
}

export default Select;
