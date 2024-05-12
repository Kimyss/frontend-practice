function Clock() {
  return (
    <>
      <h1> h1 리액트 안녕 h1 </h1>
      <h2>현재시간 {new Date().toLocaleDateString()}</h2>
    </>
  );
};

export default Clock;