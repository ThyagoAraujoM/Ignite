import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { Loading } from "@components/Loading";
import { ToastMessage } from "@components/ToastMessage";
import type { ExerciseDTO } from "@dtos/ExerciseDTO";
import { Heading, useToast } from "@gluestack-ui/themed";
import { Center, HStack, Text, VStack } from "@gluestack-ui/themed";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import type { AppNavigationRoutesProos } from "@routes/app.routes";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [groupSelected, setSelectedGroup] = useState("costas");
  const [groups, setGroups] = useState<string[]>([]);
  const [exercises, setExercises] = useState<ExerciseDTO[]>([]);

  const toast = useToast();

  const navigation = useNavigation<AppNavigationRoutesProos>();

  function handleOpenExerciseDetails(id: string) {
    navigation.navigate("exercise", { exerciseId: id });
  }

  async function fetchGroups() {
    try {
      let response = await api.get("./groups");

      setGroups(response.data);
    } catch (error) {
      const isAppErfror = error instanceof AppError;
      const title = isAppErfror ? error.message : "Não foi possível carregar os grupos musculares.";

      toast.show({
        placement: "top",
        render: ({ id }) => <ToastMessage id={id} action="error" onClose={() => toast.close(id)} title={title} />,
        duration: 3000,
      });
    }
  }

  async function fetchExercisesByGroup() {
    try {
      setIsLoading(true);

      let response = await api.get(`./exercises/bygroup/${groupSelected}`);
      setExercises(response.data);
    } catch (error) {
      const isAppErfror = error instanceof AppError;
      const title = isAppErfror ? error.message : "Não foi possível carregar os exercícios.";

      toast.show({
        placement: "top",
        render: ({ id }) => <ToastMessage id={id} action="error" onClose={() => toast.close(id)} title={title} />,
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchGroups();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchExercisesByGroup();
    }, [groupSelected])
  );

  return (
    <VStack flex={1}>
      <HomeHeader></HomeHeader>

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group name={item} isActive={groupSelected == item} onPress={() => setSelectedGroup(item)} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32 }}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <VStack px="$8" flex={1}>
          <HStack justifyContent="space-between" mb="$5" alignItems="center">
            <Heading color="$gray200" fontSize="$md" fontFamily="$heading">
              Exercícios
            </Heading>
            <Text color="$gray200" fontSize="$sm" fontFamily="$body">
              {exercises.length}
            </Text>
          </HStack>

          <FlatList
            data={exercises}
            renderItem={({ item }) => <ExerciseCard data={item} onPress={() => handleOpenExerciseDetails(item.id)} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </VStack>
      )}
    </VStack>
  );
}
