import React from "react";
import { Articlecard } from "../components/Articlecard";
import styled from "styled-components";

export const Pickup: React.FC = () => {
  const dammy = [
    {
      id: 1,
      title: "a",
      tag: "a",
      liked: true,
      viewed: true,
      created_at: 1,
    },
    {
      id: 2,
      title: "b",
      tag: "b",
      liked: false,
      viewed: true,
      created_at: 2,
    },
  ];
  return (
    <Style>
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
    </Style>
  );
};

const Style = styled.div`
display: flex;
justifyContent: center`;
