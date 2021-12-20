import React, { useState } from "react";
import Modal from "react-modal";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { Container, TransactionTypeContainer } from "./styles";
import closeModal from "../../assets/close.svg";
type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export default function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-over'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className={"react-modal-close"}
      >
        <img src={closeModal} alt='Fechar modal' />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder='Título' />

        <input placeholder='Valor' type='number' />

        <TransactionTypeContainer>
          <button
            type='button'
            onClick={() => {
              setType("deposit");
            }}
          >
            <img src={incomeImg} alt='Entrada' />
            <span>Entrada</span>
          </button>
          <button
            type='button'
            onClick={() => {
              setType("withdraw");
            }}
          >
            <img src={outcomeImg} alt='Saída' />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder='Categoria' />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
