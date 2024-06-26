// CSS 스타일작성(인라인 스타일 넣어줄객체)

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid gray",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  contentText: {
    color: "black",
    fontSize: 16,
  }
};


function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          alt="프로필아바타이미지"
          style={styles.image} />
      </div>

      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.contentText}>{props.content}</span>
      </div>
    </div>
  );
};

export default Comment;
