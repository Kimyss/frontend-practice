import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./page/Mainpage";
import PlacePage from "./page/PlacePage";
import GamePage from "./page/GamePage";
import NewGame from "./page/NewGame";
import HotGame from "./page/HotGame";

function SimpleRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} ></Route>
        <Route path="/places" element={<PlacePage />} ></Route>
        <Route path="/games" element={<GamePage />} ></Route>

        {/* 방법1 */}
        <Route path="/games/hot" element={<HotGame />} />
        <Route path="/games/new" element={<NewGame />} />
      </Routes>

    </BrowserRouter>
  );
};

export default SimpleRouter;