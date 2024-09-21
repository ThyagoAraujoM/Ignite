import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { Heading } from "@gluestack-ui/themed";
import { Center, HStack, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import type { AppNavigationRoutesProos } from "@routes/app.routes";
import { useState } from "react";
import { FlatList } from "react-native";

export function Home() {
  const [groupSelected, setSelectedGroup] = useState("costas");
  const [groups, setGroups] = useState(["costas", "ombros", "bíceps", "tríceps"]);
  const [exercises, setExercises] = useState([
    "Puxada frontal",
    "Remada curvada",
    "Remada unilateral",
    "Levantamento terra",
  ]);

  const navigation = useNavigation<AppNavigationRoutesProos>();

  function handleOpenExerciseDetails() {
    navigation.navigate("exercise");
  }

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
          renderItem={({ item }) => <ExerciseCard title={item} onPress={handleOpenExerciseDetails} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </VStack>
    </VStack>
  );
}
