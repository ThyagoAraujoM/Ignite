import { Center, Heading, Image, ScrollView, Text, useToast, VStack } from "@gluestack-ui/themed";
import React, { useState } from "react";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import type { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "@hooks/useAuth";
import { AppError } from "@utils/AppError";
import { ToastMessage } from "@components/ToastMessage";

type FormDataProps = {
  email: string;
  password: string;
};

const signUpSchema = yup.object({
  email: yup.string().email("Informe um email válido").required("Informe o email"),
  password: yup.string().min(4, "A senha precisa ter no mínimo 8 caracteres").required("Informe a senha"),
});

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();

  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({ resolver: yupResolver(signUpSchema) });

  function handleNewAccount() {
    navigation.navigate("signUp");
  }

  async function handleSingIn({ email, password }: FormDataProps) {
    try {
      setIsLoading(true);
      await signIn(email, password);
    } catch (error) {
      const isAppError = error instanceof AppError;
      setIsLoading(false);

      const title = isAppError ? error.message : "Não foi possível fazer login. Tente novamente mais tarde.";

      toast.show({
        placement: "top",
        render: ({ id }) => <ToastMessage id={id} action="error" onClose={() => toast.close(id)} title={title} />,
        duration: 3000,
      });
    }
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

          <Center gap="$2">
            <Heading color="$gray100">Acesse a conta</Heading>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholder="E-mail"
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                  placeholder="Senha"
                  secureTextEntry
                />
              )}
            />

            <Button isLoading={isLoading} title="Acessar" onPress={handleSubmit(handleSingIn)} />
          </Center>

          <Center flex={1} justifyContent="flex-end" mt="$4">
            <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
              Ainda não tem acesso?
            </Text>
            <Button onPress={handleNewAccount} variant="outline" title="Criar Conta" />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
