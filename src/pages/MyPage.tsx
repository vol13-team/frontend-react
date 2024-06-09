import React from "react";
import styled from "styled-components";
import { useUser } from "@clerk/clerk-react";
import { ArticleImage } from "../components/ArticleImage";
import { Tabs, TabPanel, Tab, Button } from "@yamada-ui/react";
import { Link } from "react-router-dom";

export const MyPage: React.FC = () => {
  const { user } = useUser();

  // ダミーデータを入れる
  const articleCre = [
    {
      id: 1,
      img: "https://source.unsplash.com/random",
      title: "createTest",
      time: 55,
    },
    {
      id: 2,
      img: "https://source.unsplash.com/random",
      title: "createTest",
      time: 5,
    },
    {
      id: 3,
      img: "https://source.unsplash.com/random",
      title: "createTest",
      time: 3600,
    },
    {
      id: 4,
      img: "https://source.unsplash.com/random",
      title: "createTest",
      time: 3600,
    },
  ];

  const articleAns = [
    {
      id: 1,
      img: "https://source.unsplash.com/random",
      title: "createTest",
      time: 55,
    },
    {
      id: 2,
      img: "https://source.unsplash.com/random",
      title: "answerdTest",
      time: 5,
    },

    {
      id: 3,
      img: "https://source.unsplash.com/random",
      title: "answerdTest",
      time: 3600,
    },
  ];

  return (
    <>
      <InfoDiv>
        <UserDiv>
          <UserImg src={user?.imageUrl} alt="icon" />
          <UserInfoDiv>
            <UserName>{user?.username}</UserName>
            <UserID>{user?.id}</UserID>
            <UserProf>データベースに入れたプロフィール</UserProf>
          </UserInfoDiv>
        </UserDiv>
        <ButtonDiv>
          <PostButton>
            <Link to={"/profile"}>プロフィールを編集</Link>
          </PostButton>
        </ButtonDiv>
      </InfoDiv>

      <Tabs variant="sticky-solid" isFitted>
        <Tab>作成した問題</Tab>
        <Tab>解答した問題</Tab>
        <TabPanel>
          <ArticleDiv>
            {articleCre.map((article) => (
              <ArticleImage
                key={article.id}
                id={article.id}
                img={article.img}
                title={article.title}
                time={article.time}
              />
            ))}
          </ArticleDiv>
        </TabPanel>
        <TabPanel>
          <ArticleDiv>
            {articleAns.map((article) => (
              <ArticleImage
                key={article.id}
                id={article.id}
                img={article.img}
                title={article.title}
                time={article.time}
              />
            ))}
          </ArticleDiv>
        </TabPanel>
      </Tabs>
    </>
  );
};

const ButtonDiv = styled.div`
  z-index: 0;`;
const PostButton = styled(Button)`
  margin : 10px 0`;

const InfoDiv = styled.div`
  display: flex;
  justify-content: ;
  margin: 120px 80px 40px 40px;`;

const ArticleDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  `;

const UserDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 0 0 40px 40px;
  `;

const UserInfoDiv = styled.div`
  margin : 0 0 20px 40px;`;

const UserImg = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin: 0 20px 0 40px;
  border-radius: 10px;`;

const UserName = styled.h2`
  font-size: 2rem;
  margin: -10px 0 10px 0;`;

const UserID = styled.p`
  margin: 0 0 10px 0;
  color: gray;
  `;

const UserProf = styled.p`
  margin: 0 0 10px 0;
  `;
