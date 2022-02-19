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

export const Designer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100vh;
  width: 80vw;
  height: 1400px;
  background: #ffffff;
  border-radius: 12px;
`;

export const DesignerArrange = styled.form`
  display: flex;
  flex-direction: column;
  //align-items: center;    //좌정렬
  
  width: 80%;
  
  
`;

export const Title = styled.h1`
  font-family: Noto Sans KR, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 150%;

  color: #111111;
`;

export const Box52 = styled.div`
  height: 50px;
`;

export const SubTitle = styled.div`
  font-family: Noto Sans KR, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #111111;
`;

export const Button = styled.button`
  font-family: Noto Sans KR, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  
  margin-top: 40px;
  background-color: #111111;
  width: 152px;
  height: 48px;
  border-radius: 12px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  margin-left:56vw;
  margin-bottom:12px;
  
  cursor:pointer;
`;