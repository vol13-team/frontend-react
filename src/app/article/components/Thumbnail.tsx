import styled from "styled-components";

const Thumbnail = () => {
  return (
    <SThumbnail>
      <SThumbnailIn>
        <SThumbnailTitle>記事タイトル</SThumbnailTitle>
        <SFlex>
          <span>@userId</span>
          <SQiitaLogo src='/qiitaLogo.jpg' alt='qiitaロゴ' />
        </SFlex>
      </SThumbnailIn>
    </SThumbnail>
  );
};

const SThumbnail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #ff6699, #ffcc00);
`;

const SThumbnailIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
`;

const SThumbnailTitle = styled.h2`
  font-size: 24px;
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
  height: 25px;
`;

export default Thumbnail;
