import Image from 'next/image';
import Link from 'next/link';

import {
  Wrapper,
  MainTop,
  MainLeft,
  MainRight,
  MainContents,
  MainBottom,
  Line,
  Challenge,
  Title,
  ChallengeCircle,
  ChallengeBox,
  ChallengeCircleTitle,
  ChallengeCircleSubTitle,
  ChallengeCircleContent,
  Activity,
  ActivityTop,
  Box73,
  ActivityBottom,
  ActivityContent
} from "./styles";


function AboutMain() {
  return (
    <Wrapper>

      <MainTop>
        <MainLeft>
          <Image src='/assets/images/logo-about.svg' width={428} height={283} />
        </MainLeft>
        <MainRight>
          <MainContents>
            <span style={{color: "#0DFF8B"}}>D.PERCENT</span>는 IT 생태계의 주인공인<br/>
            디자이너와 개발자를 위한 모임입니다.<br/><br/>
            D.PERCENT에서<br/>
            재능 있는 디자이너와 개발자가 함께 모여<br/>
            자유로운 분위기에서 어울려 의견을 나누고<br/>
            도움을 주고받으며 협업하는 과정을 통해<br/>
            원하는 서비스를 제작의 경험을 할 수 있습니다.<br/>
          </MainContents>
        </MainRight>
      </MainTop>

      <MainBottom>
        <MainContents>
          <span style={{color: "#0DFF8B"}}>D.PERCENT</span>의 D는 IT직종의 주인공인 디자이너(Designer)와 개발자(Developer)의 공통인 이니셜에서 착안했습니다.<br/>
          Percent(%)는 보통 0과 1사이를 의미합니다. 이는 이진법의 언어가 0과 1로 이루어져있는 것에서 컴퓨터 언어와 닮아있고,<br/>
          두개의 0이 모여 하나의 기호를 이루는 것 처럼 디자이너와 개발자가 모여 하나의 단체를 이룬다는 것을 상징합니다.<br/>
        </MainContents>
      </MainBottom>

      <Challenge>
        <Line></Line>
        <Title>새롭게 도전하는 우리</Title>


        <ChallengeBox>

          <ChallengeCircle style={{color: "#FFFA8B", fontWeight: "bold"}}>
            <ChallengeCircleTitle>VISION</ChallengeCircleTitle>
            <ChallengeCircleSubTitle>미래형 인재의 첫 걸음</ChallengeCircleSubTitle>
            <ChallengeCircleContent>
              재능 공유로 서로의 실력을 향상 시키고,<br/>
              프로젝트 진행을 통해 협업 능력을 배양하며,<br/>
              새로운 서비스를 만들어 내는 경험으로<br/>
              IT 생태계의 인재가 되는 것을 목표로 합니다.
            </ChallengeCircleContent>
          </ChallengeCircle>



          <ChallengeCircle>
            <ChallengeCircleTitle>ACTIVITY</ChallengeCircleTitle>
            <ChallengeCircleSubTitle>팀별 프로젝트</ChallengeCircleSubTitle>
            <ChallengeCircleContent>
              활동은 '1학기 + 방학 한달' 동안 진행되며<br/>
              팀에 소속되어 한 프로젝트를 완성합니다.<br/>
              또한, 정기적인 전체 모임을 통해<br/>
              성장 과정을 함께 공유합니다.<br/>
            </ChallengeCircleContent>
          </ChallengeCircle>




          <ChallengeCircle style={{color: "#0DFF8B"}}>
            <ChallengeCircleTitle>MERIT</ChallengeCircleTitle>
            <ChallengeCircleSubTitle>경험을 넓히다</ChallengeCircleSubTitle>
            <ChallengeCircleContent>
              같은 관심 분야를 공유하는 다양한 멤버들과<br/>
              소통하는 기회를 얻을 수 있습니다.<br/>
              또한, 타 직군을 이해하고 시야를 넓히는<br/>
              소중한 경험이자, IT 생태계를 이끌<br/>
              통섭형 인재의 밑바탕일 것입니다.<br/>
            </ChallengeCircleContent>
          </ChallengeCircle>

        </ChallengeBox>
      </Challenge>

      <Activity>
        <Title>함께하는 다양한 활동</Title>

        <ActivityTop>
          <Image src='/assets/images/activity1.png' width={410} height={180} />
          <ActivityContent>다양한 전공의 경험을 공유합니다</ActivityContent>
          <Box73/>
          <Image src='/assets/images/activity2.png' width={410} height={180} />
        </ActivityTop>

        <ActivityBottom>
          <Image src='/assets/images/activity3.png' width={410} height={180} />
          <Box73/>
          <Image src='/assets/images/activity4.png' width={410} height={180} />
        </ActivityBottom>

      </Activity>

    </Wrapper>
  );
}

export default AboutMain;
