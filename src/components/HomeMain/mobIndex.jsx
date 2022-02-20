import Image from 'next/image';
import { Wrapper, Background, Title, MainBox, Titles, SubTitle, Logo } from "./mobStyles";




function MobHomeMain() {


  return (
    <Wrapper>


      <MainBox>
        <Titles>
          <Title>
            IT United crew<br/>
            for Juniors
          </Title>
          <SubTitle>
            디자이너 X 개발자의 꿈을 위한 첫 발걸음
          </SubTitle>
        </Titles>

        <Logo>
          <Image src='/assets/images/logo-big.png' width={140} height={72} />
        </Logo>
      </MainBox>

      <Background>
        <Image src='/assets/images/background.jpeg' layout='fill' />
      </Background>
    </Wrapper>
  );
}

export default MobHomeMain;
