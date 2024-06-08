import { useEffect, useState } from "react";

function EffectSummary() {
  const [count, setCount] = useState(0);

  const countHandler = ()=>{
    setCount(count + 1);
  };

  const [name, setName] = useState('');

  const nameHandler = (e)=>{
    setName(e.target.value);
  };

  useEffect(() => {
    console.log('매번실행');
    return () => {
      
    };
  }, []);

  useEffect(()=>{
    console.log('%ccount가 변함', 'color: red; background:#ffdae0');

    return () =>{
      
    };
  },[count]);

  useEffect(() => {
    console.log('%cname변함', 'color: blue; background:#ffdae0');
    return () => {
      
    };
  }, [name]);

  useEffect(()=>{
    console.log('%c마운트 될 떄만 실행', 'color: yellow; background:black');

    return () =>{
      // 언마운트 될 때만 실행
      console.log('%c언마운트 될 때만 실행', 'color:red; background : black');
    };
  },[]);

  return (
    <>
    <p>카운트 : {count}</p>
    <button type="button" onClick={countHandler}>카운트 + 1</button>
    <p>이름 : {name}</p>
    <input type="text" value={name} onChange={nameHandler}  />
    </>
  );
};

export default EffectSummary;