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


export const Select = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:80%;
  
`;

export const Title = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-family: Noto Sans KR, sans-serif;
  font-size: 30px;
  line-height: 150%;
`;

export const SelectBox = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  background: #FFFFFF;
  border: 1px solid rgba(17, 17, 17, 0.02);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 16px;

  width: 257px;
  height: 254px;
  margin-left: 40px;
  margin-right: 40px;
`;



export const Anchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: #111111;
  border-radius: 12px;
  
  width: 222px;
  height: 54px;
  color: #ffffff;

  font-family: Noto Sans KR, sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 150%;
  
  margin-top: 33px;
`;