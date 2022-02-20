import Image from 'next/image';
import Link from 'next/link';

import {
  Wrapper,
  Select, SubTitle, Title, SelectArrange, SelectBox, Anchor, ColumnBox
} from "./styles";


function SelectMain() {
  return (
    <Wrapper>


      <Select>

        <ColumnBox>

          <div style={{paddingBottom:"60px", paddingLeft:"32px"}}>
            <SubTitle>지원서 작성하기</SubTitle>
            <Title>당신의 역할은 무엇인가요?</Title>
          </div>



          <SelectArrange>


            <SelectBox>
              <Image src='/assets/images/select1.png' width={70} height={105} />
              <Link href='/designer' passHref>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Anchor>디자이너(Designer)</Anchor>
              </Link>
            </SelectBox>

            <SelectBox>
              <Image src='/assets/images/select2.png' width={70} height={105} />
              <Link href='/developer' passHref>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Anchor>개발자(Developer)</Anchor>
              </Link>
            </SelectBox>

          </SelectArrange>

        </ColumnBox>









      </Select>
    </Wrapper>
  );
}

export default SelectMain;
