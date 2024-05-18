import { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage() {

  const [isLog, setIsLog] = useState(false);
  const handleClickLogin = () => {
    setIsLog(true);
  };

  const handleClickLogOut = () => {
    setIsLog(false);
  };

  return (
    <>
      <Toolbar
        isLoggedIn={isLog}
        onClickLogin={handleClickLogin}
        onClickLogout={handleClickLogOut} />
    </>
  );
};

export default LandingPage;