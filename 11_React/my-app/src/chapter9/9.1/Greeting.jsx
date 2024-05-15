function UserGreeting() {
  return <h1>환영합니다. 고객님!</h1>;
};

function GuestGreeting() {
  return <h1>로그인이 필요합니다.</h1>;
};


function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  console.log(isLoggedIn);
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

export default Greeting;