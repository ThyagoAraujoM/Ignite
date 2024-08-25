import React, { useState } from "react";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";

export function Groups() {
  const [groups, setGroups] = useState([]);

  return (
    <Container>
      <Header></Header>
      <Highlight title="Turmas" subTitle="jogue com sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma" />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />
    </Container>
  );
}
