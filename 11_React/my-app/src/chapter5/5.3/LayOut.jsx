function LayOut(props) {
  return (
    <>
      {props.header}
      레이아웃 크기 :
      width  : {props.width} | height : {props.height}
      <hr />
      밑줄은 hr태그
      <br />
      이 밑은 푸터공간
      {props.footer}
    </>
  );
};

export default LayOut;