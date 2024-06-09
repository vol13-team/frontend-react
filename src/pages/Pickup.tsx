import React from "react";
import { Articlecard } from "../components/Articlecard";
import styled from "styled-components";
import { Heading, Button } from "@yamada-ui/react";
import { Link } from "react-router-dom";

export const Pickup: React.FC = () => {
  const dammy = [
    {
      id: 1,
      title: "a",
      tag: "a",
      liked: true,
      viewed: true,
      created_at: 1,
      imgUrl: "https://source.unsplash.com/random",
    },
    {
      id: 2,
      title: "b",
      tag: "b",
      liked: false,
      viewed: false,
      created_at: 2,
      imgUrl: "https://source.unsplash.com/random",
    },
    {
      id: 2,
      title: "b",
      tag: "b",
      liked: false,
      viewed: true,
      created_at: 2,
      imgUrl: "https://source.unsplash.com/random",
    },
    {
      id: 2,
      title: "b",
      tag: "b",
      liked: true,
      viewed: true,
      created_at: 2,
      imgUrl: "https://source.unsplash.com/random",
    },
    {
      id: 2,
      title: "b",
      tag: "b",
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
  margin: 0 80px 0 0;`;

const Style = styled.div`
width: 100%;
margin: 100px auto 40px auto;
display: flex;
justify-content: center;
`;

const PickUpDiv = styled.div`
  width: 75%;

`;

const PickUpList = styled.ul`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
margin: 0;
padding: 0;

`;

const PickUpItem = styled.li`
margin: 0 20px 40px 20px;

`;
