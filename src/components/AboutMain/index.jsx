import Image from 'next/image';
import Link from 'next/link';

import { Wrapper, MainTop, MainLeft, MainRight, MainContents, MainBottom } from "./styles";

import { SubTitle } from "../HomeMain/styles";

function AboutMain() {
  return (
    <Wrapper>
      {/*<Left>*/}
      {/*  <Title>*/}
      {/*    IT United crew <br /> for Juniors*/}
      {/*  </Title>*/}
      {/*  <SubTitle>디자이너 X 개발자의 꿈을 위한 첫 발걸음</SubTitle>*/}
      {/*  <Link href='/about' passHref>*/}
      {/*    /!* eslint-disable-next-line jsx-a11y/anchor-is-valid *!/*/}
      {/*    <Anchor>디퍼센트 알아보기</Anchor>*/}
      {/*  </Link>*/}
      {/*</Left>*/}

      {/*<Right>*/}
      {/*  <Image src='/assets/images/logo-big.png' width={648} height={324} />*/}
      {/*</Right>*/}
      <MainTop>
        <MainLeft>
          <Image src='/assets/images/logo-about.svg' width={428} height={283} />
        </MainLeft>
        <MainRight>
          <MainContents>
            D.PERCENT는 IT 생태계의 주인공인<br/>
            디자이너와 개발자를 위한 모임입니다.<br/><br/>
            D.PERCENT에서<br/>
            재능 있는 디자이너와 개발자가 함께 모여<br/>
            자유로운 분위기에서 어울려 의견을 나누고<br/>
            도움을 주고받으며 협업하는 과정을 통해<br/>
            원하는 서비스를 제작의 경험을 할 수 있습니다.<br/>
          </MainContents>
        </MainRight>
      </MainTop>

      <MainBottom>'
        <MainContents>
          D.PERCENT의 D는 IT직종의 주인공인 디자이너(Designer)와 개발자(Developer)의 공통인 이니셜에서 착안했습니다.<br/>
          Percent(%)는 보통 0과 1사이를 의미합니다. 이는 이진법의 언어가 0과 1로 이루어져있는 것에서 컴퓨터 언어와 닮아있고,<br/>
          두개의 0이 모여 하나의 기호를 이루는 것 처럼 디자이너와 개발자가 모여 하나의 단체를 이룬다는 것을 상징합니다.<br/>
        </MainContents>
      </MainBottom>



    </Wrapper>
  );
}

export default AboutMain;
