import { Route, Routes } from "react-router-dom";
import { UIProvider } from "@yamada-ui/react";
import "./App.css";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { MyPage } from "./pages/MyPage";

const App: React.FC = () => {
  return (
    <UIProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/detail"></Route>
        </Route>
      </Routes>
    </UIProvider>
  );
};

export default App;
