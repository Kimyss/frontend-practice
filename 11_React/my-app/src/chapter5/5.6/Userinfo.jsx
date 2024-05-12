import Avartar from "./Avartar";

function Userinfo(props) {
  return (
    <div className="user-info">
      <Avartar user={props.user} />
      <div className="user-info-name">
        {props.user.name}
      </div>
    </div>
  );
};

export default Userinfo;