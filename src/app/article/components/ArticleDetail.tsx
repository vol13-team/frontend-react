import styled from "styled-components";
import { IoMdTime } from "react-icons/io";

const ArticleDetail = () => {
  return (
    <SArticleDetail>
      <SArticleTitle>記事タイトル</SArticleTitle>
      <STimeFlex>
        <IoMdTime />
        <STime>2日前</STime>
      </STimeFlex>
      <SButton>続きを読む</SButton>
    </SArticleDetail>
  );
};

const SArticleDetail = styled.div`
  padding: 32px;
`;

const SArticleTitle = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: start;
  color: #333;
`;

const STimeFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

const STime = styled.time`
  display: block;
  letter-spacing: 0.05rem;
  font-size: 0.8rem;
  color: #333;
`;

const SButton = styled.button`
  width: 100%;
  border: 1px solid #333;
  padding: 8px;
  margin-top: 32px;
`;

export default ArticleDetail;
