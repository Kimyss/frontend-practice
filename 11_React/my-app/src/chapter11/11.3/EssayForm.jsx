import { useState } from "react";

function EssayForm() {
  const [essay, setEssay] = useState('좋아하는 에세이 작성요망');

  const handlechange = (e) => {
    setEssay(e.target.essay)
  }

  const handleSubmit = (e) => {
    alert('제출된 에세이: ' + essay);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        에세이:
        <textarea onChange={handlechange}></textarea>
        <button type="submit">제출</button>
      </label>
    </form>
  );
};

export default EssayForm;