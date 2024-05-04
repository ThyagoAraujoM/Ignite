import { Text, TextInput, View, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "./../../components/Participant/index";
import { useState } from "react";

type ParticipantType = {
  name: string;
};

export function Home() {
  const [participants, setParticipants] = useState<ParticipantType[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participantName == "") return;

    let participantsNames = participants.map((participant) => participant.name);
    if (participantsNames.indexOf(participantName) != -1) {
      Alert.alert("Participante já existe na lista!");
      return;
    }

    participants.push({ name: participantName });
    setParticipants([...participants]);
    setParticipantName("");
    Alert.alert("Participante adicionado!");
  }

  function handleParticipantRemove(index: number, name: string) {
    Alert.alert(`Remover`, `Deseja remover o participante ${name}!`, [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          participants.splice(index, 1);
          setParticipants([...participants]);
        },
      },
    ]);
  }

  function handleChangeParticipantName(newName: string) {
    setParticipantName(newName);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Baatatinha azul 2</Text>

      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          onChangeText={handleChangeParticipantName}
          value={participantName}
          style={styles.textInput}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View>
        {/* <ScrollView>
          {participants.map((participant, index) => (
            <Participant
              key={index}
              name={participant.name}
              onRemove={() => {
                handleParticipantRemove(index);
              }}
            />
          ))}
        </ScrollView> */}
        <FlatList
          data={participants}
          renderItem={({ item, index }) => {
            return (
              <Participant
                name={item.name}
                onRemove={() => {
                  handleParticipantRemove(index, item.name);
                }}
              />
            );
          }}
          ListEmptyComponent={() => {
            return <Text style={styles.listEmptyText}>Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.</Text>;
          }}
        />
      </View>
    </View>
  );
}
