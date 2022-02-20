import Image from 'next/image';
import Link from 'next/link';

import { Wrapper, Left, Right, SubTitle, Title, Anchor, Background } from './styles';

function HomeMain() {
  return (
    <Wrapper>
      <Left>
        <Title>
          IT United crew <br /> for Juniors
        </Title>
        <SubTitle>디자이너 X 개발자의 꿈을 위한 첫 발걸음</SubTitle>
        <Link href='/about' passHref>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Anchor>디퍼센트 알아보기 ></Anchor>
        </Link>
      </Left>

      <Right>
        <Image src='/assets/images/logo-big.png' width={648} height={324} />
      </Right>

      <Background>
        <Image src='/assets/images/background.jpeg' layout='fill' />
      </Background>
    </Wrapper>
  );
}

export default HomeMain;
