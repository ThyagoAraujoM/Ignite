import React, { useState } from "react";

import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const navigation = useNavigation();
  const [group, setGroup] = useState("");

  function handleNewGroup() {
    navigation.navigate("players", { group });
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight title="Nova turma" subTitle="crie a turma para adicionar as pessoas" />
        <Input onChangeText={setGroup} placeholder="Nome da turma" />
        <Button onPress={handleNewGroup} title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
