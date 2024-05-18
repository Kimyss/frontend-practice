import { useState } from "react";

function FlavorForm() {
  const [fruits, setFruits] = useState('choco');

  const handleSelect = (e) => {
    setFruits(e.target.value);
    console.log(fruits);
  };

  const handleSubmit = (e) => {
    alert('좋아하는 맛: ' + fruits);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        좋아하는 맛?
        <select value={fruits} onChange={handleSelect}>
          <option value="choco">초코</option>
          <option value="vanila">바닐라</option>
          <option value="starwberry">딸기</option>
          <option value="grape">포도</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
};

export default FlavorForm;