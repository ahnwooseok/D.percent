import styled from 'styled-components';

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
export const MainTop = styled.div`
  display: flex;
  padding-top: 1800px;
`;


export const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 156px;
  padding-right: 130px;
  justify-content: center;
  align-items: center;
`;

export const MainRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 179px;

`;

export const MainBottom = styled.div`
  padding-top: 63px;
`;


export const MainContents = styled.p`
  color: #ffffff;
  font-family: Noto Sans KR, sans-serif;
  font-size: 18px;
  line-height: 155%;
  font-style: normal;
`;

export const Challenge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 168px;
`;

export const Line = styled.div`
  width: 257px;
  height: 0px;
  
  padding-top: 2px;
  transform: rotate(90deg);
  border: 2px solid;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.37) 37.5%, #FFFFFF 56.67%, rgba(255, 255, 255, 0.46) 79.58%, rgba(255, 255, 255, 0) 100%);
`;
export const Title = styled.h1`
  color: #ffffff;
  font-family: Noto Sans KR, sans-serif;
  font-size: 36px;
  line-height: 150%;
  font-weight: bold;
  font-style: normal;
  
  padding-top: 125px;
`;

export const ChallengeBox = styled.div`
  display: flex;
  padding-top: 128px;
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
  padding-top : 65px;
  
  color: #ffffff;
  font-family: Noto Sans KR, sans-serif;
  font-style: normal;
  line-height: 150%;
  font-weight: 500;
  font-size: 11px;
`;

export const Activity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ActivityTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 89px;
`;
export const Box73 = styled.div`
  width: 73px;
`;

export const ActivityBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 45px;
`;

export const ActivityContent = styled.div`
  color: #ffffff;
  font-family: Noto Sans KR, sans-serif;
  font-style: normal;
  line-height: 150%;
  font-weight: 350;
  font-size: 24px;
  position: relative;
`;
