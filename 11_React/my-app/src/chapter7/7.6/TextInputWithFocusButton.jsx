import { useEffect, useRef } from "react";

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  console.log(inputEl);

  useEffect(() => {
    console.log(inputEl);
    inputEl.current.focus();
  }, []);

  const handleButton = () => {
    inputEl.current.focus();
  }

  return (
    <>
      <input ref={inputEl} type="text" />
      <button type="button" onClick={handleButton}>포커스더인풋</button>
    </>
  );
};

export default TextInputWithFocusButton;