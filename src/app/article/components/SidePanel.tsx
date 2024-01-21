import styled from "styled-components";

import RelatedArticle from "./RelatedArticle";

const SidePanel = () => {
  return (
    <SSidePanel>
      <SSideTitle>関連記事一覧</SSideTitle>
      <RelatedArticle />
      <RelatedArticle />
      <RelatedArticle />
      <RelatedArticle />
    </SSidePanel>
  );
};

const SSidePanel = styled.div`
  margin: 32px 0 0 32px;
  padding: 0 16px;
  width: 450px;
  background-color: #fff;
`;

const SSideTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 16px;
  text-align: start;
  color: #333;
`;

export default SidePanel;
