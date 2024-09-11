import React, { useState } from "react";

import { Modal, type ModalProps } from "react-native";

import {
  ButtonsContainer,
  CancelButton,
  CancelText,
  ConfirmButton,
  ConfirmText,
  Description,
  InnerContainer,
  OutContainer,
  Title,
} from "./styles";
import { mealsDelAll } from "@storage/meal/mealsDelAll";

type Props = ModalProps & {
  setModalOf: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelMeals: () => void;
};

export function ModalDelAll({ visible, setModalOf, handleDelMeals }: Props) {
  const [showCallBackModal, setShowCallBackModal] = useState(false);
  const [resultTitle, setResultTitle] = useState("");
  const [resultText, setResultText] = useState("");

  function closeModal() {
    setModalOf(false);
  }

  async function handleConfirmDel() {
    try {
      await mealsDelAll();
      closeModal();
      handleDelMeals();
      showSuccesModal();
    } catch (error) {
      showErrorModal();
      throw error;
    }
  }

  function showSuccesModal() {
    setShowCallBackModal(true);
    setResultTitle("Sucesso!");
    setResultText("Refeições apagadas com sucesso!");
  }

  function showErrorModal() {
    setShowCallBackModal(true);
    setResultTitle("Erro!");
    setResultText("Erro ao apagar refeições, por favor tente mais tarde");
  }

  async function closeCallBackModal() {
    setShowCallBackModal(false);
    setResultText("");
  }

  return (
    <>
      <Modal visible={visible} transparent onRequestClose={closeModal}>
        <OutContainer>
          <InnerContainer>
            <Title>Deletar todos!</Title>
            <Description>Tem certeza que deseja apagar todos as refeições ?</Description>
            <ButtonsContainer>
              <CancelButton onPress={closeModal}>
                <CancelText>Cancelar</CancelText>
              </CancelButton>
              <ConfirmButton onPress={handleConfirmDel}>
                <ConfirmText>Confirmar</ConfirmText>
              </ConfirmButton>
            </ButtonsContainer>
          </InnerContainer>
        </OutContainer>
      </Modal>
      <Modal transparent visible={showCallBackModal} onRequestClose={closeCallBackModal}>
        <OutContainer>
          <InnerContainer>
            <Title>{resultTitle}</Title>
            <Description>{resultText}</Description>
            <ButtonsContainer>
              <ConfirmButton onPress={closeCallBackModal}>
                <ConfirmText>Confirmar</ConfirmText>
              </ConfirmButton>
            </ButtonsContainer>
          </InnerContainer>
        </OutContainer>
      </Modal>
    </>
  );
}
