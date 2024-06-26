import { useState } from "react";
import Greeting from "../9.1/Greeting";

function LoginButton(props) {
  return <button type="button" onClick={props.onClick}>로그인버튼</button>
};

function LogOutButton(props) {
  return <button type="button" onClick={props.onClick}>로그아웃버튼</button>
};

function LoginControl() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  let button;
  if (isLoggedIn) {
    button = <LoginButton onClick={handleLogout} />
  } else {
    button = <LogOutButton onClick={handleLogin} />
  }

  return (
    <>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </>
  );
};

export default LoginControl;