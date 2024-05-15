import { useState } from "react";

function ConfirmButton() {
  const [isConfirm, setIsConfirm] = useState(false);
  console.log(isConfirm);

  const handleConfirm = () => {
    setIsConfirm(!isConfirm);
    console.log(isConfirm);
  };




  return (
    <button type="button" onClick={handleConfirm}>
      {isConfirm ? '확인' : "미확인"}
    </button>
  );
};

export default ConfirmButton;