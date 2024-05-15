import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  console.log(count);

  const [color, setColor] = useState('blue');
  const [button, setButton] = useState('구~독');

  const [subscribe, setSubScribe] = useState(false);

  let wrongCount = 0;

  return (
    <>
      <p>총 {count} 번 클릭</p>
      <button type="button" onClick={() => {
        count++;
        console.log(count);
      }}>
        렌더링X
      </button>

      <br />

      <p>총 {count} 번 클릭</p>
      <button type="button" onClick={() => {
        setCount(count + 1);
        console.log(count);
      }}>
        렌더링O
      </button>

      <br />

      <p>총 {wrongCount} 번 클릭</p>
      <button type="button" onClick={() => {
        wrongCount++;
        console.log(wrongCount);
      }}>
        wrongCount
      </button>

      <br />

      <p style={{ color: color }}>현재 글자색:{color}</p>
      <button type="button" onClick={() => {
        setColor('red');
        console.log(setColor);
        console.log(color);
      }}
      >글자색변경</button>

      <p>버튼내용 변경</p>
      <button type="button"
        onClick={() => {
          setButton('구독안함');
        }}>{button}</button>

      <button type="button" onClick={() => {
        setSubScribe(true)
      }}
      >{subscribe ? '구독완료' : '구독하기'}</button>

    </>
  );
};

export default Counter;