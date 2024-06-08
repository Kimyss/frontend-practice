import { useEffect, useState } from "react";

function CounterEffect() {

  const [count, setCount] = useState(0);

  const buttonClick = ()=>{
    setCount(count + 1);

    document.title = `clicked ${count} times`
  }

  useEffect(()=>{
    console.log('effect실행');
  },[]);

  return (
    <>
    <p>총 {count}번 실행</p>
    <button type="button" onClick={buttonClick} value={count}>버튼클릭</button>
    </>
  );
};

export default CounterEffect;