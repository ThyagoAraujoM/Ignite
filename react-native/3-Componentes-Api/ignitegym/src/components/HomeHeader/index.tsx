import { UserPhoto } from "@components/UserPhoto";
import { Heading, HStack, Icon, Text, VStack } from "@gluestack-ui/themed";
import { LogOut } from "lucide-react-native";

export function HomeHeader() {
  return (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
      <UserPhoto source={{ uri: "https://github.com/thyagoaraujom.png" }} w="$16" h="$16" alt="Imagem do usuário" />
      <VStack flex={1}>
        <Text color="$gray100" fontSize="$sm">
          Olá
        </Text>
        <Heading color="$gray100" fontSize="$md">
          Thyago Araujo
        </Heading>
      </VStack>
      <LogOut />
      <Icon as={LogOut} color="$gray200" size="xl" />
    </HStack>
  );
}
