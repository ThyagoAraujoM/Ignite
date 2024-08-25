import React from "react";
import { Container, Message } from "./styles";
import { Text } from "react-native";

type Props = {
  message: string;
};

export function ListEmpty({ message }: Props) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
