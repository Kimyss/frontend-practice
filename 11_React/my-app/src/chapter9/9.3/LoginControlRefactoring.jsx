import { useState } from "react";
import Greeting from "../9.1/Greeting";

function LoginButton(props) {
  return <button type="button" onClick={props.onClick}> 로그인 버튼(false)</button>
};

function LogOutButton(props) {
  return <button type="button" onClick={props.onClick}> 로그아웃 버튼(true)</button>
};

function LoginControlRefactoring() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn
        ? <LogOutButton onClick={handleLogout} />
        : <LoginButton onClick={handleLogin} />
      }
    </>
  );
};

export default LoginControlRefactoring;