function Check({title,array,data,setData}) {
  const onChange = (event) => {
    setData(event.target.id);
  }
  return (
    <div>
      {title}
      {array.map((i,di) =>
        <div key={di} >   {/* checktext에 for 문이랑 같은느낌  */}
          <input
            type="radio"
            name={title}
            id={i}
            onChange={onChange}
          />
          <label htmlFor={i}>{i}</label>
        </div>
      )}
      <hr/>
    </div>
  );
}

export default Check;