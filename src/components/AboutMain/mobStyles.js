import styled from "styled-components";

export const Wrapper = styled.main`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: -1;
`;

export const MarginBox = styled.div`
  height:2200px;
`;


export const Background = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  //opacity: 0.956;
`;
export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-family: Noto Sans KR, sans-serif;
  font-size: 20px;
  line-height: 150%;
  font-weight: 300;
  font-style: normal;

`;
export const SubTitle = styled.h2`
  color: #ffffff;
  font-family: Noto Sans KR, sans-serif;
  font-size: 12px;
  line-height: 150%;
  font-weight: 300;
  font-style: normal;
`;

export const Logo = styled.div`
  margin:40px 0px;
`;


export const ChallengeCircle = styled.div`
  width: 316px;
  height: 316px;
  mix-blend-mode: normal;
  /* sub */
  //border: 1px solid #FFFA8B;
  border: 1px solid;
  color: #ffffff;
  border-radius: 200px;
  box-sizing: border-box;
`;

export const ChallengeCircleTitle = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top : 38px;
  
  color: #ffffff;
  font-family: Noto Sans KR, sans-serif;
  font-style: normal;
  line-height: 150%;
  font-weight: bold;
  font-size: 21px;
`;

export const ChallengeCircleSubTitle = styled.h2`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top : 38px;

  color: #ffffff;
  font-family: Noto Sans KR, sans-serif;
  font-style: normal;
  line-height: 150%;
  font-weight: 500;
  font-size: 21px;
`;

export const ChallengeCircleContent = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top : 40px;
  
  color: #ffffff;
  font-family: Noto Sans KR, sans-serif;
  font-style: normal;
  line-height: 150%;
  font-weight: 500;
  font-size: 12px;
  //letter-spacing: 0.5px;
`;


export const FoundRowLine = styled.div`

  width: 100%;
  height: 0px;

  padding-top: 2px;
  
  border: 1px;
  background: #404040;
`;


export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  
`;

