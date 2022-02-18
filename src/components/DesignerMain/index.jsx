import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react'
import {
  Wrapper,
  Designer, Title, DesignerArrange, Box52, SubTitle, Text, Check
} from "./styles";


function DesignerMain() {
  return (
    <Wrapper>


      <Designer>
        <DesignerArrange>

          <Title>지원서 작성하기</Title>
          <SubTitle style={{fontWeight:"normal"}}>Designer</SubTitle>
          <Box52></Box52>

          <SubTitle>이름</SubTitle>
          <Text></Text>
          <Box52></Box52>

          <SubTitle>학과</SubTitle>
          <Text></Text>
          <Box52></Box52>

          <SubTitle>학년</SubTitle>
          {/*<Check title="학년" data={grade} setData={setGrade} array={["1학년", "2학년", "3학년", "4학년"]}/>*/}
          <Check color={"#032403"} array={["1학년", "2학년", "3학년", "4학년"]}/>
          <Box52></Box52>

          <SubTitle>학번</SubTitle>
          <Text></Text>
          <Box52></Box52>

          <SubTitle>이름</SubTitle>
          <Box52></Box52>

          <Title style={{fontSize:"20px"}}>당신의 경험을 알려주세요</Title>
          <div style={{height:"26px"}}></div>
          <SubTitle>교내,교외에서 UX/UI수업이나 관련 활동한 경험이 있으신가요?</SubTitle>
          <Box52></Box52>

          <SubTitle>학과수업 이외의 대외활동이나 스터디 등에서 앱, 웹서비스 작업을 해본 경험이 있으신가요?</SubTitle>
          <SubTitle>이름</SubTitle>

        </DesignerArrange>
      </Designer>
    </Wrapper>
  );
}

export default DesignerMain;
