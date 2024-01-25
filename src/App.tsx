import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./views/HomePage";
// import Article from "./views/ArticlePage";
import ArticleIdPage from "./views/ArticleIdPage";
import IssueIdPage from "./views/IssueIdPage";
import AnswerPage from "./views/AnswerPage";

function App() {
  return (
    <>
      <Routes>
        {/*  */}
        <Route path='/' element={<HomePage />} />
        {/* 記事一覧 */}
        <Route path='/article' element={<HomePage />} />
        {/* 問題一覧 */}
        <Route path='/article/:article_id' element={<ArticleIdPage />} />
        {/* 問題表示 */}
        <Route path='/article/:article_id/issue_id' element={<IssueIdPage />} />
        {/* 答え合わせ */}
        <Route
          path='/article/:article_id/issue_id/answer'
          element={<AnswerPage />}
        />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
