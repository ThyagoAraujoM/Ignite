import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "./../../components/Participant/index";

export function Home() {
  function handleParticipantAdd() {}

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Baatatinha azul 2</Text>

      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput style={styles.textInput} placeholder="Nome do participante" placeholderTextColor="#6B6B6B" />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.participantsContainer}>
        <Participant />
        <Participant />
      </View>
    </View>
  );
}
