import Avartar from "./Avartar";
import Userinfo from "./Userinfo";


function formatDate(date) {
  return date.toLocaleDateString();
}

function CommnetEx(props) {
  return (
    <>
      <div className="comment" >
        <div className="user-info">
          <img className="avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
          />
          <div className="user-info-name">
            {props.user.name}
          </div>
        </div>
      </div>

      <div className="comment-text">
        {props.text}
      </div>

      <div className="comment-date">
        {formatDate(props.date)}
      </div>

      <hr />
      <br />

      {/* Avartar.jsx추출하기 */}
      <div className="comment">
        <div className="user-info">
          <Avartar user={props.user} />
          <div className="user-info-name">
            {props.user.name}
          </div>
        </div>
      </div>

      <div className="comment-text">
        {props.text}
      </div>

      <div className="comment-date">
        {formatDate(props.date)}
      </div>

      <hr />

      {/* Userinfo 추출 */}
      <div className="comment">
        <Userinfo user={props.user} />
        <div className="comment-text">
          {props.text}
        </div>

        <div className="comment-date">
          {formatDate(props.date)}
        </div>
      </div>

    </>
  );
};

export default CommnetEx;