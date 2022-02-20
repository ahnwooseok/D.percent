import styled from 'styled-components';

export const Wrapper = styled.main`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
`;
export const Recruit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width:100%;
  
  
  padding-top: 1200px;
`;
export const RecruitBox = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: center;
  
  
  
  padding-right:1000px;        ///아이패드에서 나오는거 체크
`;

export const Title = styled.h1`
  color: #ffffff;
  font-weight: 900;
  font-family: Noto Sans KR, sans-serif;
  font-size: 48px;
  line-height: 110%;
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
  height: 100%;  
  background-size:  cover;
  //margin-bottom: 30%;
  //background-image: url('../../../public/assets/images/recruit-background.png');
  //위로로 어떻게 끄냐....
  
`;




export const RowLine = styled.div`
  
  width: 1034px;
  height: 0px;
  
  //background: linear-gradient(270deg, #0DFF8B 0%, #FFFA8B 100%, #FFFA8B 100%);
  border: none;
  border-top: 2px dotted #ffffff;
  
`;

export const Box209 = styled.div`
  height: 209px;
`;

export const ProcessBox = styled.div`
  display: flex;
  position: relative;
  
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

export const Balloon = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding-top: 10px;
  border-radius: .4em;
    width: 200px;
    height: 80px;
`;
export const BalloonAfter = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 0;
  border: 18px solid transparent;
  border-bottom-color: #ffffff;
  border-top: 0;
  margin-left: -18px;
  margin-top: -18px;
`;
export const BalloonContent = styled.div`
  padding: 25px 10px;
  text-align: center;
  align-items: center;
  font-family: Noto Sans KR, sans-serif;
`;

export const BalloonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;


export const BalloonCircle = styled.div`
  position: relative;
  background: #19F38A;
  border-radius: .4em;
  width: 10px;
  height: 10px;
  margin-bottom: 42px;
`;

export const Support = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding-top:103px;
`;

export const Notice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding-top:67px;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 180px;
  
  width: 100%;
  height: 209px;
  background: rgba(255, 255, 255, 0.96);
`;


export const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const Anchor2 = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: #111111;
  border-radius: 8px;
  width: 153px;
  height: 47px;
  padding: 10px;
  color: #ffffff;
  font-size: 16px;
  font-family: Noto Sans KR, sans-serif;
  
  //margin-top: 45px;
  //margin-right: 100px;
  font-weight: bold;
`;
