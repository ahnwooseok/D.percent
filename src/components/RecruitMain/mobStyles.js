import styled from 'styled-components';

export const Wrapper = styled.main`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: -1;
`;


export const MarginBox = styled.div`
  height:500px;
`;

export const RecruitBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-weight: 500;
  font-family: Noto Sans KR, sans-serif;
  font-size: 18px;
  line-height: 110%;
`;

export const SubTitle = styled.h2`
  color: #ffffff;
  font-family: Noto Sans KR, sans-serif;
  font-weight: lighter;
  font-size: 8px;
  //line-height: 110%;
  margin:4px 0px;
`;

export const Anchor = styled.a`
  font-family: Noto Sans KR, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: #ffffff;
  border-radius: 8px;
  width: 132px;
  height: 51px;
  padding: 20px 10px;
  color: #111111;
  font-size: 16px;
  margin-top: 45px;
  margin-right: 100px;
  font-weight: bold;
`;


export const Background = styled.div`
  z-index: -1;
  position: absolute; 
  width: 100%;
  height: 200px;  
  background-size:  cover;
  
  //margin-bottom: 30%;
  //background-image: url('../../../public/assets/images/recruit-background.png');
  //위로로 어떻게 끄냐....
`;


export const Question = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 180px;
  
  width: 100%;
  height: 160px;
  background: rgba(255, 255, 255, 0.96);
`;


export const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding-top: 14px;
`;


export const Anchor2 = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: #111111;
  border-radius: 8px;
  width: 120px;
  height: 40px;
  padding: 10px;
  color: #ffffff;
  font-size: 12px;
  font-family: Noto Sans KR, sans-serif;
  margin: 10px;
  //font-weight: bold;
`;