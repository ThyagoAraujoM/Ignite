import React, { useState } from "react";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootParamList = {
  groups: undefined;
  new: undefined;
  players: {
    group: string;
  };
};

type Props = {
  navigation: NativeStackNavigationProp<RootParamList, "groups">;
};

export function Groups({ navigation }: Props) {
  const [groups, setGroups] = useState([]);

  // const navigation = useNavigation();

  // Possível utilizar navigation sendo passado pelo props do componente e configurado suas propriedades e tipagem,
  // Ou utilizar o próprio hook do react native useNavigation que já volta de forma mais enxuta as mesmas funçãoes
  // e funcionalidades
  function handleNewGroup() {
    navigation.navigate("new");
  }

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
        showsVerticalScrollIndicator={false}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
