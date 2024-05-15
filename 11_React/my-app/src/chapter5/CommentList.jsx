import Comment from "./Comment";

const comments = [
  {
    name: '피카추',
    content: '치지직~'
  },
  {
    name: '파이리',
    content: '여름 더워요'
  },
  {
    name: '꼬부기',
    content: '목말라, 삼다수 좋아요'
  }
];

function CommentList(props) {
  return (
    <>
      {/* <Comment />
      <Comment />
      <Comment /> */}

      <Comment name="질럿" content="아듄토리다스" />
      <Comment name="드라군" content="돌아왔다" />
      <Comment name="프로브" content="미네랄필요해" />

      {comments.map((comment, index) => {
        console.log(index.comment);
        return <Comment key={index} name={comment.name} content={comment.content} />;
      })}

      {comments.map((comment, index) =>
        <Comment key={index} name={comment.name} content={comment.content} />)}

    </>
  );
};

export default CommentList;