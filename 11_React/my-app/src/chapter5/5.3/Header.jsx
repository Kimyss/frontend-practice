function Header(props) {
  return (
    <header>
      <h1>이곳은 헤더 - title</h1>
      <h2> {props.title}</h2>
    </header>
  );
};

export default Header;