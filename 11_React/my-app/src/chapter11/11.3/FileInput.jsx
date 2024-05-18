import { useRef } from "react";

function FileInput() {

  const fileInput = useRef(null);
  console.log(fileInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fileInput.current.files);
    alert('선택된 파일: ' + fileInput.current.files[0].name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        파일업로드
        <input ref={fileInput} type="file" />
      </label>
      <br />
      <button type="submit">제출</button>
    </form>
  );
};

export default FileInput;