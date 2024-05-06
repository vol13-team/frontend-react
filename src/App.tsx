import { Route, Routes } from "react-router-dom";
import "./App.css";
import testimg from "./stories/assets/context.png";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
// import MyPage from "./pages/MyPage";
import { ArticleImage } from "./components/ArticleImage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/mypage" element={<MyPage />} /> */}
        <Route path="/article" element={<ArticleImage img={testimg} title={"TEST"} time={55} />} />
      </Route>
    </Routes>
  );
};

export default App;
