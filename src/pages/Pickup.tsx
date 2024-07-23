import React from "react";
import { Articlecard } from "../components/Articlecard";
import styled from "styled-components";

export const Pickup: React.FC = () => {
  const dammy = [
    {
      id: 1,
      title: "記事タイトル1",
      tag: "タグ1",
      liked: true,
      viewed: true,
      created_at: 1,
    },
    {
      id: 2,
      title: "記事タイトル2",
      tag: "タグ2",
      liked: false,
      viewed: true,
      created_at: 2,
    },
  ];
  return (
    <Style>
      <CardGrid>
        {dammy.map((article) => (
          <Articlecard
            key={article.id}
            id={article.id}
            title={article.title}
            tag={article.tag}
            liked={article.liked}
            viewed={article.viewed}
            created_at={article.created_at}
          />
        ))}
      </CardGrid>
    </Style>
  );
};

const Style = styled.div`
display: flex;
justifyContent: center`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0px; /* 隣のカードとの間隔を狭める */
`;
