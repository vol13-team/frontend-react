import styled from "styled-components";
import { Text, Box, Center } from "@yamada-ui/react";
import { Link } from "react-router-dom";
import { type Card } from "../interfaces/Interfaces";
import React from "react";

export const ArticleDetailCard: React.FC<Card> = (Detail) => {
  return (
    <>
      <Outer>
        <Text>記事詳細</Text>
        <Box>
          <Link to={"/question/"}>
            <Text size={"4xl"}>{Detail.title}</Text>
          </Link>
          <Text>投稿日：{Detail.created_at}</Text>
        </Box>
        <Box>
          <Tag>{Detail.tag}</Tag>
        </Box>
        <Center>
          <img src="" alt="" />
        </Center>
      </Outer>
    </>
  );
};

const Outer = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  padding: 16px;
  background: gray;
  `;

const Tag = styled.div`
display: inline-block;
background: #e0e0e0;
padding: 4px 8px;
border-radius: 4px;
font-size: 12px;
color: #555;
margin-bottom: 8px;`;
