


function Check({name,array,setData}) {
  const onChange = (event) => {
    console.log(event.target.id);
    setData(event.target.id);
  }
  return (
    //버튼 가로배치
    <div style={{display : "flex", paddingTop:"16px"}}>
      {array.map((cur,idx) =>
        <div key={idx} >   {/* checktext에 for 문이랑 같은느낌  */}
          <input
            style={{margin: "0px 8px", fontFamily: "Noto Sans KR, sans-serif", fontWeight: "bold", fontSize: "14px"}}
            type="radio"
            id={cur}
            name={name}    //name을 동일하게 설정해야 중복체크 방지, 근데 아까는 다 똑같이 name 설정해줬으니까 안되지,
                           // 있음, 없음 -> 이걸로 아이디가 동일하게 설정되서 안돼 name={data} 이렇게 갈경우는
                           // 그러니까 name을 고유의 값으로 주도록 하자!
            onChange={onChange}
          />
          <label htmlFor={cur}>{cur}</label>
        </div>
      )}

    </div>
  );
}

export default Check;