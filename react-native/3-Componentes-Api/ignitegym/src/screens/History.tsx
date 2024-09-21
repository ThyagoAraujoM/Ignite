import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Center, Heading, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { FlatList, SectionList } from "react-native";

type ExerciseHistory = {
  muscle: string;
  exercise: string;
  time: string;
};

export function History() {
  const [exerciseHistoryList, setExerciseHistoryList] = useState<ExerciseHistory[]>([
    { exercise: "Elevação cruzada", muscle: "Costas", time: "8:55" },
  ]);

  const [exercises, setExercises] = useState([
    {
      title: "22.07.24",
      data: [{ exercise: "Elevação cruzada", muscle: "Costas", time: "8:55" }],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => <HistoryCard exercise="Puxada Lateral" muscle="Costas" time="11.22.33" />}
        renderSectionHeader={({ section }) => (
          <Heading color="$gray200" fontSize="$md" mt="$10" mb="$10" fontFamily="$heading">
            {section.title}
          </Heading>
        )}
        style={{ paddingHorizontal: 32 }}
        contentContainerStyle={exercises.length == 0 && { flex: 1, justifyContent: "center" }}
        ListEmptyComponent={() => {
          return (
            <Text color="$gray100" textAlign="center">
              {" "}
              Não há exercícios registrados ainda. {"\n"} Vamos fazer exercícios hoje ?
            </Text>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
