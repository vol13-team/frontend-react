import { Route, Routes } from "react-router-dom";
import { UIProvider } from "@yamada-ui/react";
import "./App.css";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { MyPage } from "./pages/MyPage";
import { Pickup } from "./pages/Pickup";
import Question from "./pages/Question";
import Answer from "./pages/Answer";

const App: React.FC = () => {
  return (
    <UIProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/detail/:id"></Route>
          <Route path="/post"></Route>
          <Route path="/profile"></Route>
          <Route path="/pickup" element={<Pickup />}></Route>
          <Route path="/question" element={<Question />}></Route>
          <Route path="/answer" element={<Answer />}></Route>
        </Route>
      </Routes>
    </UIProvider>
  );
};

export default App;
