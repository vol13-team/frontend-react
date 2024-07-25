import React from "react";
import { Articlecard } from "../components/Articlecard";
import styled from "styled-components";
import { Heading, Button } from "@yamada-ui/react";
import { Link } from "react-router-dom";

export const Pickup: React.FC = () => {
  const dammy = [
    {
      id: 1,
      title: "記事タイトル1",
      tag: "タグ1",
      liked: true,
      viewed: true,
      created_at: 1,
      imgUrl: "https://source.unsplash.com/random",
    },
    {
      id: 2,
      title: "記事タイトル2",
      tag: "タグ2",
      liked: false,
      viewed: false,
      created_at: 2,
      imgUrl: "https://source.unsplash.com/random",
    },
    {
      id: 3,
      title: "記事タイトル3",
      tag: "タグ3",
      liked: false,
      viewed: true,
      created_at: 2,
      imgUrl: "https://source.unsplash.com/random",
    },
    {
      id: 4,
      title: "記事タイトル4",
      tag: "タグ4",
      liked: true,
      viewed: true,
      created_at: 2,
      imgUrl: "https://source.unsplash.com/random",
    },
    {
      id: 5,
      title: "記事タイトル5",
      tag: "タグ5",
      liked: false,
      viewed: true,
      created_at: 2,
      imgUrl: "https://source.unsplash.com/random",
    },
  ];

  return (
    <>
      <H1 size="lg">PickUp問題集</H1>
      <ButtonDiv>
        <Button>
          <Link to="">投稿する</Link>
        </Button>
      </ButtonDiv>
      <Style>
        <PickUpDiv>
          <PickUpList>
            {dammy.map((article) => (
              <PickUpItem key={article.id}>
                <Articlecard
                  imgUrl={article.imgUrl}
                  title={article.title}
                  tag={article.tag}
                  liked={article.liked}
                  viewed={article.viewed}
                  created_at={article.created_at}
                  idNum={article.id}
                />
              </PickUpItem>
            ))}
          </PickUpList>
        </PickUpDiv>
      </Style>
    </>
  );
};

const H1 = styled(Heading)`
  margin: 100px 0 -40px 0;
  text-align: center;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 80px 0 0;
`;

const Style = styled.div`
  width: 100%;
  // margin: 100px auto 40px auto;
  display: flex;
  // justify-content: center;
`;

const PickUpDiv = styled.div`
  width: 75%;
`;

const PickUpList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  // gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PickUpItem = styled.li`
  display: flex;
  justify-content: center;
`;

