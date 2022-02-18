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
  height: 1200px;
  background: #ffffff;
  border-radius: 12px;
`;

export const DesignerArrange = styled.div`
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

export const Text = styled.input`
  type: text;
  height:48px;
  width:80%;
  font-size:32px;
  margin-top: 9px;
  
  border: 1px solid #CCCCCC;
  box-sizing: border-box;
  border-radius: 12px;
  
`;

export const Check = styled.input`
  
  type: radio;
  
  width:100px;
  height:100px;
  background-color: ${props => `${props.color}`};
`;

// function Check({title,array,data,setData}) {
//   const onChange = (event) => {
//     setData(event.target.id);
//   }
//   return (
//     <div>
//       {title}
//       {array.map((i,di) =>
//         <div key={di} >   {/* checktext에 for 문이랑 같은느낌  */}
//           <input
//             c
//             name={title}
//             id={i}
//             onChange={onChange}
//           />
//           <label htmlFor={i}>{i}</label>
//         </div>
//       )}
//       <hr/>
//     </div>
//   );


