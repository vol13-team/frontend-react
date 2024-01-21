import React from "react";
import { Box, Text } from "@chakra-ui/react";
import styled from "styled-components";
const Answer = (props: any) => {
  return (
    <SBox>
      <SText>あなたの解答 :</SText>
      <Box>{props.selectAnswer}</Box>
    </SBox>
  );
};

const SText = styled(Text)`
  margin-right: 20px;
`;

const SBox = styled(Box)`
  display: flex;
  width: 70%;
  text-align: center;
  margin: auto;
  padding: 10px;
  margin-bottom: 20px;
`;

export default Answer;
