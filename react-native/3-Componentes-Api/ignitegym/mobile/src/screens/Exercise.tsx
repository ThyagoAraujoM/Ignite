import { Box, HStack, Image, useToast } from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
import { Center, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { AppNavigationRoutesProos } from "@routes/app.routes";
import { ArrowLeft } from "lucide-react-native";
import { ScrollView, TouchableOpacity } from "react-native";
import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";
import { Button } from "@components/Button";
import { api } from "@services/api";
import type { ExerciseDTO } from "@dtos/ExerciseDTO";
import { useEffect, useState } from "react";
import { AppError } from "@utils/AppError";
import { ToastMessage } from "@components/ToastMessage";
import { Loading } from "@components/Loading";

type RouteParams = {
  exerciseId: string;
};

export function Exercise() {
  const toast = useToast();
  const navigation = useNavigation<AppNavigationRoutesProos>();
  const route = useRoute();
  const { exerciseId } = route.params as RouteParams;

  const [sendingRegister, setSendingRegister] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [exercise, setExercise] = useState<ExerciseDTO>({} as ExerciseDTO);

  function handleGoBack() {
    navigation.goBack();
  }

  async function fetchExerciseDetals() {
    try {
      setIsLoading(true);
      let response = await api.get(`/exercises/${exerciseId}`);

      setExercise(response.data);
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

  async function handleExerciseHistoryRegister() {
    try {
      setSendingRegister(true);

      await api.post(`/history`, {
        exercise_id: exerciseId,
      });

      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            id={id}
            action="success"
            onClose={() => toast.close(id)}
            title="Registro realizado com sucesso!"
          />
        ),
        duration: 3000,
      });

      navigation.navigate("history");
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : "Não foi possível realizar o registro.";
      toast.show({
        placement: "top",
        render: ({ id }) => <ToastMessage id={id} action="error" onClose={() => toast.close(id)} title={title} />,
        duration: 3000,
      });
    } finally {
      setSendingRegister(false);
    }
  }

  useEffect(() => {
    fetchExerciseDetals();
  }, [exerciseId]);

  return isLoading ? (
    <Loading />
  ) : (
    <VStack flex={1}>
      <VStack px="$8" bg="$gray600" pt="$12">
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color="$green500" />
        </TouchableOpacity>

        <HStack justifyContent="space-between" alignItems="center" mt="$2" mb="$8">
          <Heading color="$gray100" fontFamily="$heading" fontSize="$lg" flexShrink={1}>
            {exercise.name}
          </Heading>
          <HStack alignItems="center">
            <BodySvg />
            <Text color="$gray200" ml="$1" textTransform="capitalize">
              {exercise.group}
            </Text>
          </HStack>
        </HStack>
      </VStack>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>
        <VStack p="$8">
          <Box rounded="$lg" mb="$3" overflow="hidden">
            <Image
              source={{
                uri: `${api.defaults.baseURL}/exercise/demo/${exercise.demo}`,
              }}
              alt="Exercício"
              resizeMode="cover"
              w="$full"
              h="$80"
            />
          </Box>

          <Box bg="$gray600" rounded="$md" pb="$4" px="$4">
            <HStack alignItems="center" justifyContent="space-around" mb="$6" mt="$5">
              <HStack>
                <SeriesSvg />
                <Text color="$gray200" ml="$2">
                  {exercise.series} séries
                </Text>
              </HStack>

              <HStack>
                <RepetitionsSvg />
                <Text color="$gray200" ml="$2">
                  {exercise.repetitions} repetições
                </Text>
              </HStack>
            </HStack>
            <Button title="Marcar como realizado" isLoading={sendingRegister} onPress={handleExerciseHistoryRegister} />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
