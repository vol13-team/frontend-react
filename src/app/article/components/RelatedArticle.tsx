import styled from "styled-components";

const RelatedArticle = () => {
  return (
    <>
      <SThumbnail>
        <SThumbnailIn>
          <SThumbnailTitle>記事タイトル</SThumbnailTitle>
          <SFlex>
            <span>@userId</span>
            {/* <SQiitaLogo src='@/qiitaLogo.jpg' alt='qiitaロゴ' /> */}
            <SQiitaLogo src='@/qiitaLogo.jpg' alt='qiitaロゴ' />
          </SFlex>
        </SThumbnailIn>
      </SThumbnail>
      <SRelatedTitle>記事タイトル</SRelatedTitle>
    </>
  );
};

const SThumbnail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, #ff6699, #ffcc00);
`;

const SThumbnailIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
`;

const SThumbnailTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: start;
  color: #333;
`;

const SFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SQiitaLogo = styled.img`
  height: 20px;
`;

const SRelatedTitle = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  padding: 16px 16px 8px 16px;
  margin-bottom: 12px;
  text-align: start;
  color: #333;
  border-bottom: 1px solid #ddd;
  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

export default RelatedArticle;
