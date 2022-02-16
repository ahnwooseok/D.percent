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