import React, { useState, useEffect, useRef } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert, FlatList, TextInput } from "react-native";

import { Container, Form, HeaderList, NumbersOfPlayes } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { AppError } from "@utils/AppError";

import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";
import type { PlayerStorageDTO } from "@storage/player/playerStorageDTO";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import { Loading } from "@components/Loading";

type RouteParams = {
  group: string;
};

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState<string>("");
  const [team, setTeam] = useState("");
  const [teams, setTeams] = useState<string[]>(["Team A", "Team B", "Team C"]);
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    if (newPlayerName.trim().length == 0) {
      return Alert.alert("Nova pessoa", "Informe o nome da pessoa.");
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur();

      setNewPlayerName("");
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova pessoa", error.message);
      } else {
        Alert.alert("Nova pessoa", "Não foi possível adicionar");
        console.log(error);
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      setLoading(true);
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível carregar as pessoas do time selecionado.");
    } finally {
      setLoading(false);
    }
  }

  async function handleRemovePlayer(playerName: string) {
    setPlayers((prev) => [...prev.filter((player) => player.name != playerName)]);
    try {
      await playerRemoveByGroup(playerName, group);
      await fetchPlayersByTeam();
    } catch (error) {
      Alert.alert("Remover pessoa", "Não foi possível remover essa pessoa.");
    }
  }

  async function handleGroupRemove() {
    Alert.alert("Remover", "Deseja remover o grupo?", [
      {
        text: "Confirmar",
        style: "default",
        onPress: groupRemove,
      },
      {
        text: "Cancelar",
        style: "cancel",
      },
    ]);
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group);
      navigation.navigate("groups");
    } catch (error) {
      Alert.alert("Remover Grupo", "Não foi possível remover o grupo.");
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
    if (team == "") {
      setTeam(teams[0]);
    }
  }, [team]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subTitle="adicione a galera e separe os times" />
      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da Pessoa"
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>
      <HeaderList>
        <FlatList
          data={teams}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Filter onPress={() => setTeam(item)} title={item} isActive={item === team} />}
          horizontal
        />
        <NumbersOfPlayes>{players.length}</NumbersOfPlayes>
      </HeaderList>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard onRemove={() => handleRemovePlayer(item.name)} name={item.name}></PlayerCard>
          )}
          ListEmptyComponent={() => <ListEmpty message="Não há pessoas nesse time." />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
        />
      )}
      <Button title="Remover Turma" type="SECONDARY" onPress={handleGroupRemove} />
    </Container>
  );
}
