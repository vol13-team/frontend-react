import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { theme } from "../../../components/thme";
import styled from "styled-components";
import IssueForm from "./IssueForm";

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SButton onClick={onOpen}>作成する</SButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <SModalContent>
          <ModalHeader>問題作成</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <IssueForm />
          </ModalBody>
        </SModalContent>
      </Modal>
    </>
  );
}

const SButton = styled.button`
  margin-right: 16px;
  padding: 8px 16px;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: ${theme.primaryColor};
`;

const SModalContent = styled(ModalContent)`
  width: 100%;
  min-width: 900px;
`;

export default BasicUsage;
