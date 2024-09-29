import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

type Props = {
  muscle: string;
  exercise: string;
  time: string;
};

export function HistoryCard({ exercise, muscle, time }: Props) {
  return (
    <HStack
      w="$full"
      px="$5"
      py="$4"
      mb="$3"
      bg="$gray600"
      rounded="$md"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack mr="$5" flex={1}>
        <Heading color="$white" fontSize="$md" textTransform="capitalize" fontFamily="$heading" numberOfLines={1}>
          {muscle}
        </Heading>

        <Text color="$gray100" fontSize="$lg" numberOfLines={1}>
          {exercise}
        </Text>
      </VStack>
      <Text color="$gray300" fontSize="$md">
        {time}
      </Text>
    </HStack>
  );
}
