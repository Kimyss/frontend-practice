import { useState } from "react";

function NameForm() {

  const [nameForm, setNameForm] = useState('-fdsadsadf');

  const handleChanhge = (e) => {
    setNameForm(e.target.value.toUpperCase());
    console.log(setNameForm);
  };

  const handleSubmit = (e) => {
    alert('입력 이름: ' + nameForm);
    e.preventDefault();
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          이름:
          <input type="text" value={nameForm} onChange={handleChanhge} />
        </label>
        <button type="submit" >제출</button>
      </form>
    </>
  );
};

export default NameForm;