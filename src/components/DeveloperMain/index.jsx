import React, {useState} from 'react'
import {
  Wrapper,
  Designer, Title, DesignerArrange, Box52, SubTitle, Button
} from "./styles";
import Check from "./Check";
import Text from "./Text"
import CheckText from "./CheckText"
import axios from 'axios';




async function Submit(name,depart,grade,id_num,q1,q2,q3,q4,ads ){
  try {
    // loading 상태를 true 로 바꿉니다.

    const response = await axios.get(
      'https://ksun1234.cafe24.com/useock/Submit.php?Name='+name+'&Depart='+depart+'&Grade='+grade+'&ID_num='+id_num+'&Q1='+q1+'&Q2='+q2+'&Q3='+q3+'&Q4='+q4+'&AndSoOn='+ads

    );
    console.log(response.data);
    return true;
  } catch (e) {
    return false;
  }

}


function DeveloperMain() {

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
            // alert("지원완료!");
            alert(Submit(name,department,grade,studentId,experience1,experience2,experience3,activity,interest)?"성공적으로 제출되었습니다.":"비정상 제출입니다.");

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
          <Check name="grade" setData={setGrade} array={["2학년", "3학년", "4학년", "졸업"]}/>
          <Box52></Box52>

          <SubTitle>학번</SubTitle>
          <Text data={studentId} setData={setStudentId}/>
          <Box52></Box52>
          <div style={{height:"20px"}}></div>


          <Title style={{fontSize:"20px"}}>당신의 경험을 알려주세요</Title>
          <div style={{height:"26px"}}></div>

          <SubTitle>사용 가능한 언어를 모두 선택해주세요.</SubTitle>
          <Check name="experience1" setData={setExperience1} array={["html", "css", "js", "react", "nodejs"]}/>
          <Box52></Box52>

          <SubTitle>학과수업 이외의 대외활동이나 스터디 등에서 앱, 웹서비스 작업을 해본 경험이 있으신가요?</SubTitle>
          <CheckText name="experience2" array={["있음", "없음", "기타"]} setData={setExperience2}></CheckText>
          <Box52></Box52>

          <SubTitle>디자이너와 협업을 해 본 경험이 있으신가요?</SubTitle>
          <Check name="experience3" setData={setExperience3} array={["있음", "없음"]}/>
          <Box52></Box52>

          <SubTitle>동아리에서 기대하는 활동 수준을 선택해주세요.</SubTitle>
          <CheckText name="activity" array={["미흡하더라도 단순 협업 연습", "포트폴리오가 될만한 작업", "기타"]} setData={setActivity}></CheckText>
          <Box52></Box52>

          <SubTitle>원활한 주제 선정을 위해 작업에 있어서 관심 분야가 있으면 간략히 적어주세요. (ex.커머스,금융,여행)</SubTitle>
          <Text data={interest} setData={setInterest}/>


          <Button>제출하기 ></Button>



        </DesignerArrange>
      </Designer>
    </Wrapper>
  );
}

export default DeveloperMain;
