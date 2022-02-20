import styled from "styled-components";

export const Wrapper = styled.main`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  background-color: #fff;
`;

export const Background = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  //opacity: 0.956;
`;


export const MainBox = styled.div`
  display:flex;
  width:80%;
`;
export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  
  
`;
export const Logo = styled.div`
  
`;


export const Title = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-family: Noto Sans KR, sans-serif;
  font-size: 24px;
`;


export const SubTitle = styled.h1`
  color: #ffffff;
  font-weight: 350;
  font-family: Noto Sans KR, sans-serif;
  font-size: 12px;
`;