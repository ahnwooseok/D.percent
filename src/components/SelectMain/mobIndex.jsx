import Image from 'next/image';
import Link from 'next/link';
import { Anchor, MarginBox, Select, SelectBox, Wrapper } from "./mobStyleds";
import { Title } from "./styles";




function MobSelectMain() {
  return (
    <Wrapper>


      <Select>
        <MarginBox/>
        <Title>당신의 역할은 무엇인가요?</Title>
        <div style={{margin:"20px"}} />
        <SelectBox>
          <Image src='/assets/images/select1.png' width={70} height={105} />
          <Link href='/designer' passHref>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Anchor>디자이너(Designer)</Anchor>
          </Link>
        </SelectBox>
        <div style={{margin:"20px"}} />
        <SelectBox>
          <Image src='/assets/images/select2.png' width={70} height={105} />
          <Link href='/developer' passHref>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Anchor>개발자(Developer)</Anchor>
          </Link>
        </SelectBox>

      </Select>
    </Wrapper>
  );
}

export default MobSelectMain;
