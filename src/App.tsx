import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense, useContext } from "react";
import "./styles/index.scss";
import { Theme, ThemeContext } from "./Theme/ThemeContext";
import { useTheme } from "./Theme/useTheme";

const App = () => {
  const { theme, toogleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button onClick={toogleTheme}>TOGGLE THEME</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
