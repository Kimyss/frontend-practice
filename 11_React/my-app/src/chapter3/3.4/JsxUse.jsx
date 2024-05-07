import React from "react";
import './jsxUse.css';

function JsxUse() {
  const name = 'react';

  const user = {
    firstName: 'Goni',
    lastName: 'Kim'
  };
  const formatName = (user) => {
    return `${user.firstName} ${user.lastName}`;
  };

  // const element = (
  //   <>
  //     <div>{name} 배우기</div>
  //     <h1>Hello, {formatName(user)}</h1>
  //   </>
  // );

  // 4. style과 className
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };

  // const element = (
  //   // <div style={{ backgroundColor: 'black' }}>리액트공부</div>
  //   <>
  //     <div style={style}>리액트공부</div>
  //     <div className="gray-box"></div>
  //   </>

  // );

  // 5. 주석
  const a = 1; //이거슨 자바스크립트주석
  const element = (
    <>
      {/* 이거슨 JSX주석 */}
      //이거슨 자바스크립트주석
    </>
  )

  return element;
}

export default JsxUse;