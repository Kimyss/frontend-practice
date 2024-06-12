import './App.css';
import Layout from './pages/Layout';

import { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router-dom";
import Main from './pages/Main';
import ProductDetail from './pages/ProductDetail';






const GlobalStyle = createGlobalStyle`
body{
  box-sizing: border-box;
}
*{
  box-sizing: inherit;
}
#root{
  text-align: center;
  /* 실제 앱을 만들땐 하나하나 스타일주세요 */
}

.cursor-pointer{
  cursor: pointer;
}
`


function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='detail/:productId' element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
