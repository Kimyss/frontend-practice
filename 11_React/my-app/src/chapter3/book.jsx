function Book(props) {
  console.log(props);
  return (
    <div>
      <h1>책 제목은 {props.name}</h1>
      <h2>총 페이지수 {props.page} 페이지</h2>
    </div>
  );
};

export default Book;