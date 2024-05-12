import Book from "./Book";

function Library() {
  return (
    <>
      <Book name="삼국지" page={300} />
      <br />
      <Book name="아홉살인생" page={200} />
    </>
  );
};

export default Library;