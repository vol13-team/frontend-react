import styled from "styled-components";
import {
  Box,
  Card,
  CardBody as ChakraCardBody,
  Text,
  Grid as ChakraGrid,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  options: string[]; //選択肢
  selectState: string;
  setSelectState: React.Dispatch<React.SetStateAction<string>>;
};

const selection = ["A", " B", "C", "D"];

const SelectionCard = (props: Props) => {
  const { options, selectState, setSelectState } = props;
  return (
    <SGrid>
      {options &&
        options.map((option: string, index: number) => (
          <Card
            gap={6}
            onClick={() => {
              setSelectState(selection[index]);
            }}
            key={index}
            bg={selection[index] === selectState ? "blue.200" : "gray.100"}
          >
            <SCardBody>
              <Box>{selection[index]}</Box>
              <SText>{option}</SText>
            </SCardBody>
          </Card>
        ))}
    </SGrid>
  );
};

export default SelectionCard;

const SGrid = styled(ChakraGrid)`
  display: "flex";
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
`;

const SCardBody = styled(ChakraCardBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SText = styled(Text)`
  text-align: center;
`;
