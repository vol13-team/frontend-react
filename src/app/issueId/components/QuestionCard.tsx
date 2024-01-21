import styled from "styled-components";
import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";

const StyledCard = styled(Card)`
  width: 80%;
  margin: auto;
  background-color: #f5f5f5;
`;

const StyledCardHeader = styled(CardHeader)`
  width: 80%;
  text-align: left;
`;

const StyledCardBody = styled(CardBody)`
  width: 80%;
  margin: auto;
  text-align: center;
`;

const QuestionCard = () => {
  return (
    <StyledCard>
      <StyledCardHeader>問題</StyledCardHeader>
      <StyledCardBody>
        <Text>問題文</Text>
      </StyledCardBody>
    </StyledCard>
  );
};

export default QuestionCard;
