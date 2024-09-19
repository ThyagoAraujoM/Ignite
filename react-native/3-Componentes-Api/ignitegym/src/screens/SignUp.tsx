import { Center, Heading, Image, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import React from "react";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
export function SignUp() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator>
      <VStack flex={1}>
        <Image
          w="$full"
          h={624}
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          position="absolute"
        />
        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo />
            <Text color="$gray100" fontSize="$sm">
              Treine sua mente e seu corpo
            </Text>
          </Center>

          <Center gap="$2" flex={1}>
            <Heading color="$gray100">Crie sua conta</Heading>
            <Input placeholder="Nome" />
            <Input keyboardType="email-address" autoCapitalize="none" placeholder="E-mail" />
            <Input placeholder="Senha" secureTextEntry />
            <Button title="Criar e acessar" />
          </Center>

          <Button onPress={handleGoBack} variant="outline" title="Voltar para o login" mt="$12" />
        </VStack>
      </VStack>
    </ScrollView>
  );
}
