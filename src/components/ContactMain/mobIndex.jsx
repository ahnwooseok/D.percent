import Image from 'next/image';
import {
  Title,
  TitleBox,
  SubTitle,
  Wrapper,
  Contents1,
  Contents2,
  Contents3,
  MimoBox,
  Contact,
  MarginBox, FlexBox
} from "./mobStyles";


function MobContactMain() {
  return (
    <Wrapper>


      <Contact>


        <MarginBox/>
        <TitleBox>
          <Title>Contact Us</Title>
        </TitleBox>

        <SubTitle>Crew President</SubTitle>
        <MimoBox>
          <Image src='/assets/images/mimo1.png' width={100} height={100} />
          <Contents1>박찬빈</Contents1>
          <Contents2>커뮤니케이션디자인학과</Contents2>
          <Contents3>Kakao ID : beantom</Contents3>
        </MimoBox>
        <FlexBox>
          <MimoBox>
            <Image src='/assets/images/mimo2.png' width={100} height={100} />
            <Contents1>안우석</Contents1>
            <Contents2>컴퓨터공학과</Contents2>
            <Contents3>Kakao ID : peterdntjr</Contents3>
          </MimoBox>

          <MimoBox>
            <Image src='/assets/images/mimo3.png' width={100} height={100} />
            <Contents1>이지환</Contents1>
            <Contents2>컴퓨터공학부</Contents2>
            <Contents3>Kakao ID : wlghks0508</Contents3>
          </MimoBox>


        </FlexBox>

        <FlexBox>

          <MimoBox>
            <Image src='/assets/images/mimo4.png' width={100} height={100} />
            <Contents1>백윤아</Contents1>
            <Contents2>산업디자인학과</Contents2>
            <Contents3>Kakao ID : milkiii</Contents3>
          </MimoBox>

          <MimoBox>
            <Image src='/assets/images/mimo5.png' width={100} height={100} />
            <Contents1>김예은</Contents1>
            <Contents2>커뮤니케이션디자인학과</Contents2>
            <Contents3>Kakao ID : dnwjd980</Contents3>
          </MimoBox>
        </FlexBox>






      </Contact>
    </Wrapper>
  );
}

export default MobContactMain;
