import { Link, useNavigate } from "react-router-dom";

function Mainpage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>메인페이지</h1>
      <ul>
        <li onClick={(() => { navigate('/places') })}>장소</li>
        <li onClick={(() => { navigate('/games') })}>게임</li>
      </ul>



      <ul>
        <li>
          <Link to="/places">장소</Link>
        </li>
        <li>
          <Link to="/games">게임</Link>
        </li>
      </ul>
    </>
  );
};

export default Mainpage;