import { Image, VStack } from "@gluestack-ui/themed";
import { HStack } from "@gluestack-ui/themed";
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";

import { Heading } from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
import { ChevronRight } from "lucide-react-native";

type Props = TouchableOpacityProps & {
  title: string;
};

export function ExerciseCard({ title, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg="$gray500" alignItems="center" p="$2" pr="$4" rounded="$md" mb="$3">
        <Image
          source={{
            uri: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2024/01/08/762443603-istock-1426469131.jpg",
          }}
          alt="Imagem do exercício"
          w="$16"
          h="$16"
          rounded="$md"
          mr="$4"
          resizeMode="cover"
        />

        <VStack flex={2}>
          <Heading fontSize="$lg" color="$white" fontFamily="$heading">
            {title}
          </Heading>
          <Text fontSize="$sm" color="$gray200" mt="$1" numberOfLines={2}>
            3 séres, 3 repetições
          </Text>
        </VStack>
        <Icon as={ChevronRight} color="$gray300" />
      </HStack>
    </TouchableOpacity>
  );
}
