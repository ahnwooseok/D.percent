import {useState} from 'react';


function Checktext({name, array,setData}){
  const [other, setOther] = useState("");            //기타의내용
  const [isOther, setIsOther] = useState(false);    //기타가 선택됐는지 플래그

  const List = () => {
    const result = [];
    for(let i=0; i<array.length -1; i++){
      result.push(
        <div key={i} >   {/* JSX내부에서 array는 내부 인스턴스를 하나씩 다 뿌려줌!!!   인덱싱같은 느낌 ㅇㅇ 그냥 무시하자*/}
          <input
            style={{margin: "0px 8px", fontFamily: "Noto Sans KR, sans-serif", fontWeight: "bold", fontSize: "14px"}}
            type="radio"
            name={name}
            id={array[i]}
            onChange={(event) => {
              setData(event.target.id);
              setOther("");
              setIsOther(false);
              console.log(event.target.id);
            }}
          />
          <label htmlFor={array[i]}>{array[i]}</label>
        </div>
      )
    }
    return result;
  }

  return (
    <div>

      <div style={{display : "flex", paddingTop:"16px"}}>
        <List />
      </div>

      <input
        style={{margin: "0px 8px", fontFamily: "Noto Sans KR, sans-serif", fontWeight: "bold", fontSize: "14px", marginTop:"16px"}}
        type="radio"
        name={name}
        id={array[2]}
        onChange={(event) => {
          setData(event.target.id);
          setIsOther(true);
          console.log(event.target.id);
        }}
      />
      <label htmlFor={array[2]}>{array[2]}</label>


      <input
        style={{
          height:"48px", width: "73%", fontSize: "32px", marginTop: "9px",marginLeft:"12px", border: "1px solid #cccccc", boxSizing:"border-box", borderRadius: "12px"
        }}
        id="other"
        value={other}
        type="text"
        disabled={!isOther}
        onChange={(event) => {
          setOther(event.target.value);
          setData(other);
          console.log(other);
        }}
      />


    </div>
  );
}

export default Checktext;