
import {useState} from 'react';

function Text({title,data,setData}) {
  return (
    <div>
      <label htmlFor="title">{title}</label><br/>    {/* id="title"을 타겟으로 한 라벨임 */}


      <input
        style={{
          height:"48px", width: "80%", fontSize: "32px", marginTop: "9px", border: "1px solid #cccccc", boxSizing:"border-box", borderRadius: "12px"
        }}
        value={data}   //app에서 준 데이타 data , setData 를 여기서 그냥 해준다.
        id="title"
        type="text"
        onChange={(e)=>{
          setData(e.target.value);
          console.log(e.target.value);
        }}
      />
    </div>
    //최종적으로 스테이트를 입력했을때 그때의 값을 부모 컴포넌트에 넘긴다.
  );
}

export default Text;