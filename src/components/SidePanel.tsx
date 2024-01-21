import styled from "styled-components";
import SideArticle from "./SideArticle";

const articles = [
  {
    id: 1,
    title: "マンスリーハッカソンVol.14",
    startAt: "2024年02月10日",
    endAt: "2024年02月11日",
    imagePath: "/supporterz.jpg",
    url: "https://talent.supporterz.jp/events/00b4ec88-717a-4f90-a0c3-5359b40e6905/",
  },
  {
    id: 2,
    title: "QiitaHackathon",
    startAt: "2024年02月10日",
    endAt: "2024年02月11日",
    imagePath: "/qiita.jpg",
    url: "https://qiita.com//official-campaigns/hackathon/2024-first",
  },
  {
    id: 3,
    title: "Open Hack U Tokyo",
    startAt: "2024年02月09日",
    endAt: "2024年02月23日",
    imagePath: "/hacku.jpg",
    url: "https://hacku.yahoo.co.jp/2024/",
  },
];

const SidePanel = () => {
  return (
    <SSidePanel>
      <SSection>
        <SSectionTitle>開催予定のハッカソン</SSectionTitle>
        {articles.map((article) => (
          <SideArticle
            key={article.id}
            title={article.title}
            startAt={article.startAt}
            endAt={article.endAt}
            imagePath={article.imagePath}
            url={article.url}
          />
        ))}
      </SSection>
    </SSidePanel>
  );
};

const SSidePanel = styled.div`
  min-width: 330px;
  max-width: 330px;
  margin: 32px 0 0 32px;
  min-height: calc(100vh - 152px);
  border-radius: 8px 8px 0 0;
`;

const SSection = styled.section`
  margin-top: 16px;
  &:first-child {
    margin-top: 0;
  }
`;

const SSectionTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
`;

export default SidePanel;
