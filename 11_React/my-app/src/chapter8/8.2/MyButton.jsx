function MyButton() {
  const handleDelete = (id) => {
    console.log('id: ', id, '삭제됨');
  }
  return (
    <>
      <button type="button" onClick={handleDelete(1)}>
        삭제버튼handleDelete(1) 잘못
      </button>

      <br />

      <button type="button" onClick={(e) => {
        console.log(e);
        console.log(e.target);
        handleDelete(2);
      }}>
        삭제하기 e.target
      </button>
    </>
  );
};

export default MyButton;