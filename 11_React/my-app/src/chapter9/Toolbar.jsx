
const styles = {
  wrapper: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid gray'
  },
  greeting: {
    marginRight: 8
  },
};

function Toolbar(props) {
  const { isLoggedIn, onClickLogin, onClickLogout } = props;

  return (
    <>
      <div style={styles.wrapper}>
        {isLoggedIn && <span style={styles.greeting}>환영해요</span>}
        {isLoggedIn
          ? <button type="button" onClick={onClickLogout}>로그아웃</button>
          : <button type="button" onClick={onClickLogin}>로그인</button>
        }
      </div>


    </>
  );
};

export default Toolbar;