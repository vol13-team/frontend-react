// import { useEffect, useState } from "react";
import styled from "styled-components";
import SidePanel from "../components/SidePanel";
// import Article from "./Article";
// import { Link } from "react-router-dom";
// interface ArticleProps {
//   user_id: string;
//   title: string;
//   url: string;
//   icon_url: string;
// }

const PickupPage = () => {
  // const [qiita, setQiita] = useState<ArticleProps[]>([]); // useStateの型を明示的に指定

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetchPickUpQiitaArticle(10);

  //     setQiita(result);
  //     console.log(result);
  //   };
  //   fetchData();
  //   console.log(qiita);
  // }, []);

  return (
    <>
      <SMain>
        <SWrapper>
          {/* <SArticleContainer>
            {qiita &&
              qiita.map((article: ArticleProps) => (
                <Link target='_blank' to={article.url} key={article.icon_url}>
                  <Article
                    user_id={article.user_id} // Add the user_id property
                    title={article.title}
                    icon_url={article.icon_url}
                  />
                </Link>
              ))}
          </SArticleContainer> */}
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

// const SArticleContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 16px;
//   width: 100%;
//   margin: 32px 0 0;
// `;

export default PickupPage;
