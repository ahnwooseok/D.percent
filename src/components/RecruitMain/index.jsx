import Image from 'next/image';
import Link from 'next/link';

import {
  Wrapper,
  Title,
  Anchor,
  RecruitBox,
  Recruit,
  Box209,
  Support,
  Notice,
  Question,
  QuestionBox, Anchor2
} from "./styles";
import {
  Balloon, BalloonAfter,
  BalloonBox,
  BalloonCircle,
  BalloonContent,
  ProcessBox,
  RowLine
} from "../RecruitMain/styles";

function HomeMain() {
  return (
    <Wrapper>

      <Recruit>
        <RecruitBox>
          <Title>
            D.PERCENT<br/>
            recruitment
          </Title>

          <Link href='/select' passHref>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Anchor>참여하기</Anchor>
          </Link>
        </RecruitBox>

        <Box209/>
        <Title style={{fontSize:"30px", fontWeight:"700", marginRight:"900px",paddingBottom:"41px"}}>모집 일정</Title>


        <ProcessBox>
          <BalloonContent style={{color: "#ffffff", fontWeight:"normal", fontSize: "12px",marginLeft:"30px", marginRight:"80px"} }><h3>2022.02.21 ~ 02.25</h3></BalloonContent>
          <BalloonContent style={{color: "#ffffff", fontWeight:"normal", fontSize: "12px", marginRight:"110px"} }><h3>2022.02.26 ~ 03.01</h3></BalloonContent>
          <BalloonContent style={{color: "#ffffff", fontWeight:"normal", fontSize: "12px", marginRight:"100px"} }><h3>2022.03.02</h3></BalloonContent>
          <BalloonContent style={{color: "#ffffff", fontWeight:"normal", fontSize: "12px"} }><h3>2022.03.07 ~ 여름방학 한달</h3></BalloonContent>
        </ProcessBox>

        <RowLine></RowLine>
        <ProcessBox>
          <BalloonBox>
            <BalloonCircle/>
            <Balloon><BalloonContent><h3>신청서 접수</h3></BalloonContent><BalloonAfter/></Balloon>
          </BalloonBox>

          <BalloonBox>
            <BalloonCircle/>
            <Balloon><BalloonContent><h3>팀 선정</h3></BalloonContent><BalloonAfter/></Balloon>
          </BalloonBox>

          <BalloonBox>

            <BalloonCircle/>
            <Balloon><BalloonContent><h3>최종 팀 발표</h3></BalloonContent><BalloonAfter/></Balloon>
          </BalloonBox>

          <BalloonBox>
            <BalloonCircle/>
            <Balloon><BalloonContent><h3>정규 활동</h3></BalloonContent><BalloonAfter/></Balloon>
          </BalloonBox>

        </ProcessBox>



        <Support>
          <Title style={{fontSize:"30px", fontWeight:"700", marginRight:"900px",paddingBottom:"23px"}}>지원자격</Title>
          <Title style={{fontSize:"18px", fontWeight:"normal",lineHeight: "36px"}}>
            - 학사 과정 2학년 이상 공부하신 분<br/>
            - 재학 / 휴학생에 상관없이, 개발자 / 디자이너로 팀 프로젝트 수행이 가능한 분<br/>
            - 실무에 가까운 협업과 창작하는 즐거움을 경험하고 싶으신 분<br/>
            - 다양한 사람들과 폭넓고 깊이 있는 네트워킹을 원하시는 분<br/>
            - 2-3주 텀으로 진행되는 정규 활동에 성실하게 참여할 수 있으신 분<br/>
          </Title>
        </Support>

        <Notice>
          <Title style={{fontSize:"30px", fontWeight:"700", marginRight:"900px",paddingBottom:"23px"}}>유의사항</Title>
          <Title style={{fontSize:"18px", fontWeight:"normal",lineHeight: "36px"}}>
            - 팀으로 프로젝트가 진행되므로 중도하차 시 패널티가 있을 수 있습니다.<br/>
            - 별도의 교육 세션이 준비되어있지는 않습니다.(노션에 팁글 공유예정)<br/>
            - 성실히 참여하여 좋은 성과를 얻어가실 분들을 모집합니다.<br/>
          </Title>
        </Notice>

        <Question>
          <QuestionBox>
            <Title style={{color:"#111111", fontSize:"20px", fontWeight:"500", paddingBottom:"20px"}}>궁금한점이 있으신가요?</Title>

            <Link href='/contact' passHref>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Anchor2>연락망 바로가기</Anchor2>
            </Link>
          </QuestionBox>
        </Question>



      </Recruit>







      {/*<Background>*/}
      {/*  <Image src='/assets/images/recruit-background.png' layout='fill' />*/}
      {/*</Background>*/}
    </Wrapper>
  );
}

export default HomeMain;
