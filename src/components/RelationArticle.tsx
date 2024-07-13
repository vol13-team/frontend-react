import React from "react";
import { Box, Text } from "@yamada-ui/react";
import { Link } from "react-router-dom";
import { Articlecard } from "./ArticleCard";
import styled from "styled-components";
export const RelationArticle: React.FC = () => {
  return (
    <>
      <Outer>
        <Text>関連記事一覧</Text>
        <Box>
          <Link to={`/detail/${id}`}>
            <Articlecard
              idNum={id}
              title={title}
              tag={tag}
              liked={true}
              created_at={aa}
              viewed={true}
              imgUrl=""
            />
          </Link>
        </Box>
      </Outer>
    </>
  );
};

const Outer = styled.div`
  width: 200%;
  background: #f0f0f0;
  padding: 16px;`;
