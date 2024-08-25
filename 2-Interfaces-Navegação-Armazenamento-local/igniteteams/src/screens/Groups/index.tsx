import React from "react";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

export function Groups() {
  return (
    <Container>
      <Header></Header>
      <Highlight title="Turmas" subTitle="jogue com sua turma" />
    </Container>
  );
}
