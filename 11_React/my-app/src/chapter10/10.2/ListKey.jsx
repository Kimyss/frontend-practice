import { useState } from "react";

function ListKey() {

  const [list, setList] = useState(['복습중요', '과제중요', '파이팅중요']);
  const [value, setValue] = useState('');

  // const inputChange = (event)=>{
  //   setValue(event.target.value);
  // };

  const addToList = () => {
    setList([...list, value]);
    setValue(' ');
    console.log(value);
  };

  return (
    <>
      <input type="text" key={value} onChange={(event) => { setValue(event.target.value); }} />
      <button type="button" onClick={addToList}>추가</button>

      <ul>
        {list.map((item, index) => {
          // return <li>{item}</li>;
          // return <li key={item}>{item}</li>;
          return <li key={index}>{item}</li>;
        })}
      </ul>

      <ul>
        {[
          <li key={0}>{1}</li>,
          <li key={1}>{2}</li>,
          <li key={2}>{3}</li>,
          <li key={3}>{4}</li>,
          <li key={4}>{5}</li>
        ]}
      </ul>
    </>
  );

}

export default ListKey;