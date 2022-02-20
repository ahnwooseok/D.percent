import Head from 'next/head';
import ContactMain from "../components/ContactMain";
import useIsMobile from "../hooks/useIsMobile";
import { useEffect } from "react";
import MobContactMain from "../components/ContactMain/mobIndex";

function Contact() {

  let mob = useIsMobile();
  useEffect(()=>{
    console.log(mob);
  },[mob]);


  return (
    <>
      <Head>
        <title>Contact | D.Percent</title>
      </Head>
      {mob ?
      <MobContactMain/>
        :
      <ContactMain/>

      }

    </>
  );
}

export default Contact;
