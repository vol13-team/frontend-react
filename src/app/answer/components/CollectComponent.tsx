import {
  Card as ChakraCard,
  CardBody as ChakraCardBody,
  Text as ChakraText,
} from "@chakra-ui/react";
import styled from "styled-components";
const CollectComponent = () => {
  return (
    <SCard>
      <SCardBody>
        <SText>正解</SText>
        <SMark>○</SMark>
      </SCardBody>
    </SCard>
  );
};

const SCard = styled(ChakraCard)`
  width: 60%;
  margin: auto;
  background-color: rgba(255, 0, 0, 0.4);
`;

const SCardBody = styled(ChakraCardBody)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
  text-align: center;
`;
const SText = styled(ChakraText)`
  text-align: center;
  color: rgb(255, 0, 0);
  font-size: 30px;
  font-weight: bold;
`;
const SMark = styled(ChakraText)`
  color: rgb(255, 0, 0);
  font-size: 50px;
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 8px;
`;
export default CollectComponent;
