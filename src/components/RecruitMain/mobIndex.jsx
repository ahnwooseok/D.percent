import Image from 'next/image';
import Link from 'next/link';
import { Wrapper, Anchor, RecruitBox, Title, Background, SubTitle, MarginBox } from "./mobStyles";
import { Anchor2, Question, QuestionBox } from "./mobStyles";




function MobRecruitMain() {
  return (

    <Wrapper>
      <RecruitBox>
        <MarginBox/>
        <Title style={{fontSize:"36px",fontWeight:"900"}}>
          D.PERCENT<br/>
          recruitment
        </Title>

        <Link href='/select' passHref>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Anchor>참여하기</Anchor>
        </Link>

        <Title style={{marginTop:"60px"}}>모집일정</Title>
        <SubTitle>- 2022.02.21 ~ 02.25</SubTitle>
        <SubTitle>- 2022.02.26 ~ 03.01</SubTitle>
        <SubTitle>- 2022.03.02</SubTitle>
        <SubTitle>- 2022.03.07 ~ 여름방학 한달</SubTitle>

        <Title style={{marginTop:"60px"}}>지원자격</Title>
        <SubTitle>- 학사 과정 2학년 이상 공부하신 분</SubTitle>
        <SubTitle>- 재학 / 휴학생 상관없이, 개발자 / 디자이너로 팀 프로젝트 수행이 가능한 분</SubTitle>
        <SubTitle>- 실무에 가까운 협업과 창작하는 즐거움을 경험하고 싶으신 분</SubTitle>
        <SubTitle>- 다양한 사람들과 폭넓고 깊이 있는 네트워킹을 원하시는 분</SubTitle>
        <SubTitle>- 2-3주 텀으로 진행되는 정규 활동에 성실하게 참여할 수 있으신 분</SubTitle>




        <Title style={{marginTop:"60px"}}>유의사항</Title>
        <SubTitle>- 팀으로 프로젝트가 진행되므로 중도하차 시 패널티가 있을 수 있습니다.</SubTitle>
        <SubTitle>- 별도의 교육 세션이 준비되어있지는 않습니다.</SubTitle>
        <SubTitle>- 성실히 참여하여 좋은 성과를 얻어가실 분들을 모집합니다.</SubTitle>





      </RecruitBox>

      <Question>
        <QuestionBox>
          <Title style={{color:"#111111", fontWeight:"12px"}}>궁금한점이 있으신가요?</Title>

          <Link href='/contact' passHref>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Anchor2>연락망 바로가기</Anchor2>
          </Link>
        </QuestionBox>
      </Question>

      <Background>
        <Image src='/assets/images/recruit-background.png' layout='fill' />
      </Background>





    </Wrapper>

  );
}

export default MobRecruitMain;
