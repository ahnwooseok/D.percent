import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react'
import {
  Wrapper,
  Designer, Title, DesignerArrange, Box52, SubTitle, Button
} from "./styles";
import Check from "./Check";
import Text from "./Text"




function DesignerMain() {

  const [name,setName]=useState("");
  const [department,setDepartment]=useState("");
  const [grade,setGrade]=useState("");
  const [studentId,setStudentId]=useState("");
  const [experience1,setExperience1]=useState("");
  const [experience2,setExperience2]=useState("");
  const [experience3,setExperience3]=useState("");
  const [activity,setActivity]=useState("");
  const [interest,setInterest]=useState("");

  return (
    <Wrapper>

      <Designer>
        <DesignerArrange    //form 태그
          onSubmit={(event)=>{
            event.preventDefault();
            console.log({
              name:name,
              department:department,
              grade:grade,
              studentId:studentId,
              experience1:experience1,
              experience2:experience2,
              experience3:experience3,
              activity:activity,
              interest:interest
            });

          }}>



          <Title>지원서 작성하기</Title>
          <SubTitle style={{fontWeight:"normal"}}>Designer</SubTitle>
          <Box52></Box52>

          <SubTitle>이름</SubTitle>
          <Text data={name} setData={setName}/>
          <Box52></Box52>

          <SubTitle>학과</SubTitle>
          <Text data={department} setData={setDepartment}/>
          <Box52></Box52>

          <SubTitle>학년</SubTitle>
          <Check name="grade" data={grade} setData={setGrade} array={["2학년", "3학년", "4학년", "졸업"]}/>
          <Box52></Box52>

          <SubTitle>학번</SubTitle>
          <Text data={studentId} setData={setStudentId}/>
          <Box52></Box52>
          <div style={{height:"20px"}}></div>


          <Title style={{fontSize:"20px"}}>당신의 경험을 알려주세요</Title>
          <div style={{height:"26px"}}></div>

          <SubTitle>교내,교외에서 UX/UI수업이나 관련 활동한 경험이 있으신가요?</SubTitle>
          <Check name="experience1" data={experience1} setData={setExperience1} array={["있음", "없음"]}/>
          <Box52></Box52>

          <SubTitle>학과수업 이외의 대외활동이나 스터디 등에서 앱, 웹서비스 작업을 해본 경험이 있으신가요?</SubTitle>
          <SubTitle>체크택스트 experience2</SubTitle>
          <Box52></Box52>

          <SubTitle>개발자와 협업을 해 본 경험이 있으신가요?</SubTitle>
          <Check name="experience3" data={experience3} setData={setExperience3} array={["있음", "없음"]}/>
          <Box52></Box52>

          <SubTitle>동아리에서 기대하는 활동 수준을 선택해주세요.</SubTitle>
          <SubTitle>체크택스트 activity</SubTitle>
          <Box52></Box52>

          <SubTitle>원활한 주제 선정을 위해 작업에 있어서 관심 분야가 있으면 간략히 적어주세요. (ex.커머스,금융,여행)</SubTitle>
          <Text data={interest} setData={setInterest}/>

          <Button>제출하기</Button>

        </DesignerArrange>
      </Designer>
    </Wrapper>
  );
}

export default DesignerMain;
