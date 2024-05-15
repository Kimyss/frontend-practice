import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chapter3/3.4/JsxUse';
import Library from './chapter3/Library';
import Clock from './chapter4/Clock';
import PropUse from './chapter5/5.3/PropUse';
import CommnetEx from './chapter5/5.6/CommnetEx';
import CommentList from './chapter5/CommentList';
import Counter from './chapter7/7.2/Counter';
import TextInputWithFocusButton from './chapter7/7.6/TextInputWithFocusButton';
import Toggle from './chapter8/8.1/Toggle';
import ConfirmButton from './chapter8/ConfirmButton';
import MyButton from './chapter8/8.2/MyButton';
import Greeting from './chapter9/9.1/Greeting';
import LoginControl from './chapter9/9.2/LoginControl';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <App />
    // </React.StrictMode>
    
    // 3장 예제
  //  <JsxUse />
  // <Library />
  
  // 4장 예제
  // <Clock />

  // 5장예제
  // <PropUse />
  // <CommnetEx
  //   date = {new Date()}
  //   text = "리액트 즐기자"
  //   user = {{
  //     name: 'hello kitty',
  //     avatarUrl: 'http://placekitten.com/200/300'
  //   }}
  //  />

  // <CommentList />

  // 7장
  // <Counter />
  // <TextInputWithFocusButton />

  // 8장
  // <Toggle />
  // <MyButton />
  // <ConfirmButt1on />

  // 9장
  // <Greeting isLoggedIn = {true} />
  // <Greeting />

  <LoginControl />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
