import React from "react";
import { Heading, Box, Text } from "@yamada-ui/react";
import { Link } from "react-router-dom";
import { type Issue } from "../interfaces/Interfaces";
import styled from "styled-components";

export const IssueCard: React.FC<Issue> = ({ id, title, body, correctRate }: Issue) => {
  return (
    <CardDiv>
      <Link to={`/detail/${id}`}>
        <Heading size={"2xl"}>{title}</Heading>
      </Link>
      <Box>
        <Text>問題文：{body}</Text>
      </Box>
      <Box>
        <Text>正答率：{correctRate}%</Text>
      </Box>
    </CardDiv>
  );
};

const CardDiv = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  width:100%;
`;
