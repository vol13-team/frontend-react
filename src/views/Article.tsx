import styled from "styled-components";
import { FaRegSquareCheck } from "react-icons/fa6";

interface Props {
  user_id: string;
  title: string;
  icon_url: string;
  latest_update?: string;
  questionNum?: number;
}

const Article = (props: Props) => {
  const {
    user_id,
    title,
    icon_url,
    latest_update = "3日前",
    questionNum = 3,
  } = props;
  return (
    <SArticle>
      {/* <div> */}
      {/* <link>タグを<a>タグに変更し、href属性の値を正しく設定 */}
      <SFlex>
        <SImage src={icon_url} width={48} height={48} alt='アイコン' />
        <SUserId>{user_id}</SUserId>
      </SFlex>
      <STitleWrapper>
        <SArticleTitle>{title}</SArticleTitle>
      </STitleWrapper>
      {/* </div> */}
      <SActionPanel>
        <SArticleIcon>
          <FaRegSquareCheck size={16} />
          <SSpan>{questionNum}問</SSpan>
        </SArticleIcon>
        <SUserId>最終更新日: {latest_update}</SUserId>
      </SActionPanel>
    </SArticle>
  );
};

const SArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
`;

const SFlex = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;

const STitleWrapper = styled.div`
  display: -webkit-box;
  height: 58px;
  margin: 8px 0 0 64px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const SArticleTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  text-overflow: ellipsis;
`;

const SActionPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const SArticleIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SSpan = styled.span`
  margin-left: 4px;
`;

const SUserId = styled.p`
  margin-left: 16px;
`;

export default Article;
