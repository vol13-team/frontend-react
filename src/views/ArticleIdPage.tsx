import styled from "styled-components";
import Thumbnail from "../app/article/components/Thumbnail";
import ArticleDetail from "../app/article/components/ArticleDetail";
import QuestionCard from "../app/article/components/QuestionCard";
import SidePanel from "../components/SidePanel";
import BasicUsage from "../app/article/components/CreateIssueModal";

const DetailPage = () => {
  return (
    <div>
      <SMain>
        <SWrapper>
          <SMinPanel>
            <SArticleContainer>
              <Thumbnail />
              <ArticleDetail />
            </SArticleContainer>
            <SQuestionContainer>
              <SFlex>
                <SQuestionTitle>確認問題</SQuestionTitle>
                <BasicUsage />
              </SFlex>
              <QuestionCard
                questionTitle='確認問題'
                questionText='問題文を表示する問題文を表示する問題文を表示する'
                questionRate='80'
              />
              <QuestionCard
                questionTitle='確認問題'
                questionText='問題文を表示する問題文を表示する問題文を表示する'
                questionRate='65'
              />
              <QuestionCard
                questionTitle='確認問題'
                questionText='問題文を表示する問題文を表示する問題文を表示する'
                questionRate='90'
              />
            </SQuestionContainer>
          </SMinPanel>
          <SidePanel />
        </SWrapper>
      </SMain>
    </div>
  );
};

export default DetailPage;

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

const SMinPanel = styled.div`
  margin-top: 32px;
  width: 100%;
  max-width: 700px;
`;

const SArticleContainer = styled.div`
  background-color: #fff;
`;

const SQuestionContainer = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #fff;
`;

const SFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

const SQuestionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 16px;
  text-align: start;
  color: #333;
`;
