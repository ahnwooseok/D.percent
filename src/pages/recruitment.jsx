import Head from 'next/head';
import RecruitMain from "../components/RecruitMain";
import MobRecruitMain from "../components/RecruitMain/mobIndex";
import useIsMobile from "../hooks/useIsMobile";
import { useEffect } from "react";

function Recruitment() {

  let mob = useIsMobile();
  useEffect(()=>{
    console.log(mob);
  },[mob]);

  return (
    <>
      <Head>
        <title>Recruitment | D.Percent</title>
      </Head>

      {mob ?
      <MobRecruitMain/>
      :
      <RecruitMain />
      }
    </>
  );
}

export default Recruitment;
