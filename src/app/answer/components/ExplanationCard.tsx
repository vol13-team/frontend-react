import styled from "styled-components";
import { Text, Card, CardBody, CardHeader, CardFooter } from "@chakra-ui/react";

type Props = {
  collectOption: string;
  explanation: string;
};

const ExplanationCard = (props: Props) => {
  const { collectOption, explanation } = props;

  return (
    <SCard>
      <SCardHeader>
        <Text>解説</Text>
      </SCardHeader>
      <SCardBody>
        <Text>{explanation}</Text>
      </SCardBody>

      <SCardFooter>
        <SText>正解 :</SText>
        <SText>{collectOption}</SText>
      </SCardFooter>
    </SCard>
  );
};
const SCard = styled(Card)`
  background-color: #1ff;
  width: 70%;
  margin: auto;
`;

const SCardHeader = styled(CardHeader)`
  text-align: left;
`;

const SCardBody = styled(CardBody)`
  text-align: center;
`;

const SCardFooter = styled(CardFooter)`
  display: flex;
`;

const SText = styled(Text)`
  text-align: right;
  margin-right: 20px;
`;

export default ExplanationCard;
