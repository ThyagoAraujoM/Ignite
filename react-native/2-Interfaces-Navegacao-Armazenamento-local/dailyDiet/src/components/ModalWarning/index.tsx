import React from "react";

import { Modal, type ModalProps } from "react-native";
import { CloseButton, CloseButtonText, Container, ModalContainer, WarningText } from "./styles";

type Props = ModalProps & {
  text: string;
  setModalOf: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ModalWarning({ text, visible, setModalOf }: Props) {
  function modalOf() {
    setModalOf(false);
  }

  return (
    <Modal visible={visible} transparent={true} onRequestClose={modalOf}>
      <ModalContainer>
        <Container>
          <WarningText>{text}</WarningText>
          <CloseButton onPress={modalOf}>
            <CloseButtonText>Fechar</CloseButtonText>
          </CloseButton>
        </Container>
      </ModalContainer>
    </Modal>
  );
}
