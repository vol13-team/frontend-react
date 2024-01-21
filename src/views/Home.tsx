import styled from "styled-components";
import Article from "./Article";
import SidePanel from "../app/_components/sidepanel/SidePanel";
import { Link } from "react-router-dom";

const dummyArticles = [
  {
    icon_url: "/icon.svg",
    user_id: "userid",
    article_id: "000001",
    title: "記事タイトル",
    latest_update: "1日前",
    questionNum: 5,
  },
  {
    icon_url: "/icon.svg",
    user_id: "userid",
    article_id: "000002",
    title: "記事タイトル",
    latest_update: "2日前",
    questionNum: 3,
  },
  {
    icon_url: "/icon.svg",
    user_id: "userid",
    article_id: "000003",
    title: "記事タイトル",
    latest_update: "2日前",
    questionNum: 11,
  },
  {
    icon_url: "/icon.svg",
    user_id: "userid",
    article_id: "000004",
    title: "記事タイトル",
    latest_update: "1日前",
    questionNum: 1,
  },
  {
    icon_url: "/icon.svg",
    user_id: "userid",
    article_id: "000005",
    title: "記事タイトル",
    latest_update: "1日前",
    questionNum: 2,
  },
];
const Home = () => {
  return (
    <>
      <SMain>
        <SWrapper>
          <SArticleSection>
            <SSectionTitle>記事一覧</SSectionTitle>
            <SArticleContainer>
              {dummyArticles.map((article) => (
                <Link
                  key={article.article_id}
                  to={{
                    pathname: `/article/${article.article_id}`,
                  }}
                >
                  <Article
                    icon_url={article.icon_url}
                    user_id={article.user_id}
                    title={article.title}
                    latest_update={article.latest_update}
                    questionNum={article.questionNum}
                  />
                </Link>
              ))}
            </SArticleContainer>
          </SArticleSection>
          <SidePanel />
        </SWrapper>
      </SMain>
    </>
  );
};

const SMain = styled.main`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 120px);
  background-color: #f0f0f0;
  overflow: scroll;
`;

const SWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SArticleSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 32px 0 0;
`;

const SSectionTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
`;

const SArticleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  width: 100%;
`;

export default Home;
