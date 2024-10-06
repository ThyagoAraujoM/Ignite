import { HistoryCard } from "@components/HistoryCard";
import { Loading } from "@components/Loading";
import { ScreenHeader } from "@components/ScreenHeader";
import { ToastMessage } from "@components/ToastMessage";
import type { HistoryByDayDTO } from "@dtos/HistoryByDayDTO";
import { Center, Heading, Text, useToast, VStack } from "@gluestack-ui/themed";
import { useFocusEffect } from "@react-navigation/native";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import { useCallback, useState } from "react";
import { FlatList, SectionList } from "react-native";

type ExerciseHistory = {
  muscle: string;
  exercise: string;
  time: string;
};

export function History() {
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [exercises, setExercises] = useState<HistoryByDayDTO[]>([]);

  async function fetchHistory() {
    try {
      setIsLoading(true);
      let response = await api.get("history");
      setExercises(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : "Não foi possível carregar o histórico";

      toast.show({
        placement: "top",
        render: ({ id }) => <ToastMessage id={id} action="error" onClose={() => toast.close(id)} title={title} />,
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchHistory();
    }, [])
  );

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />
      {isLoading ? (
        <Loading />
      ) : (
        <SectionList
          sections={exercises}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <HistoryCard data={item} />}
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
      )}
    </VStack>
  );
}
