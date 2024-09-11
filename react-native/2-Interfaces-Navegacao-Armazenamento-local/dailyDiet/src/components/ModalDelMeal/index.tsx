import React from "react";

import { Modal, type ModalProps } from "react-native";
import {
  ButtonsContainer,
  CancelButton,
  CancelButtonText,
  ConfirmButton,
  ConfirmButtonText,
  InnerContainer,
  OutContainer,
  Title,
} from "./style";

import type { MealStorageDTO } from "@storage/meal/mealStorageDTO";
import { mealDelById } from "@storage/meal/mealDelById";

type Props = ModalProps & {
  setModalOf: React.Dispatch<React.SetStateAction<boolean>>;
  meal: MealStorageDTO;
  handleDelMeal: () => void;
};

export function ModalDelMeal({ visible, meal, setModalOf, handleDelMeal }: Props) {
  function closeModal() {
    setModalOf(false);
  }

  async function handleConfirmDel() {
    try {
      await mealDelById(meal.id);

      closeModal();
      handleDelMeal();
    } catch (error) {}
  }

  return (
    <Modal transparent visible={visible}>
      <OutContainer>
        <InnerContainer>
          <Title>Deseja realmente excluir o registro da refeição?</Title>
          <ButtonsContainer>
            <CancelButton onPress={closeModal}>
              <CancelButtonText>Cancelar</CancelButtonText>
            </CancelButton>
            <ConfirmButton onPress={handleConfirmDel}>
              <ConfirmButtonText>Confirmar</ConfirmButtonText>
            </ConfirmButton>
          </ButtonsContainer>
        </InnerContainer>
      </OutContainer>
    </Modal>
  );
}
