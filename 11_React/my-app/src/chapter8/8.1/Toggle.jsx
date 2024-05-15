import { useState } from "react";

function Toggle() {
  const [isToggleOn, setisToggleOn] = useState(true);

  const handleToggle = () => {
    console.log(setisToggleOn);
    setisToggleOn(!isToggleOn);
  };

  return (
    <button type="button" onClick={handleToggle}>
      {isToggleOn ? '켜짐' : '꺼짐'}
    </button>
  );
};

export default Toggle;