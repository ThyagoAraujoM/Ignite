import { Center, Heading, Text, useToast, VStack } from "@gluestack-ui/themed";
import { Alert, ScrollView, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { api } from "@services/api";
import { useAuth } from "@hooks/useAuth";

import { ScreenHeader } from "./../components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ToastMessage } from "@components/ToastMessage";
import { AppError } from "@utils/AppError";
import defaultUserPhotoImg from "@assets/userPhotoDefault.png";

type FormDataProps = {
  name: string;
  email: string;
  password?: string | null;
  old_password?: string | null;
  confirm_password?: string | null;
};

const profileSchema = yup.object({
  name: yup.string().required("Nome é obrigatório").required("Nome é obrigatório"),
  email: yup.string().email("Informe um email válido").required("Email é obrigatório"),
  old_password: yup
    .string()
    .nullable()
    .transform((value) => (!!value ? value : null))
    .min(4, "A senha precisa ter no mínimo 4 caracteres"),
  password: yup
    .string()
    .min(4, "A senha precisa ter no mínimo 4 caracteres")
    .nullable()
    .transform((value) => (!!value ? value : null)),
  confirm_password: yup
    .string()
    .nullable()
    .transform((value) => (!!value ? value : null))
    .oneOf([yup.ref("password"), null], "As senhas não conferem")
    .when("password", {
      is: (password: any) => password && password.length > 0,
      then: (schema) =>
        schema
          .nullable()
          .transform((value) => (!!value ? value : null))
          .required("Informe a confirmação da senha."),
      otherwise: (schema) => schema.notRequired(),
    }),
});

export function Profile() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [userPhoto, setUserPhoto] = useState("https://github.com/thyagoaraujom.png");

  const toast = useToast();

  const { user, updateUserProfile } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {
      name: user.name,
      email: user.email,
    },
    resolver: yupResolver(profileSchema),
  });

  async function handleUserPhotoSelect() {
    try {
      let photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

      if (photoSelected.canceled || !photoSelected.assets) {
        return;
      }
      const photoData = photoSelected.assets[0];

      const photoUri = photoData.uri;
      if (!photoUri) {
        return;
      }

      const photoInfo = (await FileSystem.getInfoAsync(photoUri)) as { size: number };
      if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
        return toast.show({
          placement: "top",
          render: ({ id }) => (
            <ToastMessage
              id={id}
              action="error"
              onClose={() => toast.close(id)}
              title="Essa imagem é muito grande. Escolha uma até 5MB."
            />
          ),
        });
      }

      const fileExtension = photoUri.split(".").pop();

      const photoFile = {
        name: `${user.name}.${fileExtension}`.toLowerCase(),
        uri: photoUri,
        type: `${photoData.type}/${fileExtension}`,
      } as any;

      const userPhotoUploadForm = new FormData();
      userPhotoUploadForm.append("avatar", photoFile);

      const avatarUpdatedResponse = await api.patch("/users/avatar", userPhotoUploadForm, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const userUpdated = user;
      userUpdated.avatar = avatarUpdatedResponse.data.avatar;

      updateUserProfile(userUpdated);

      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage id={id} action="success" onClose={() => toast.close(id)} title="Foto atualizada com sucesso!" />
        ),
      });

      console.log(photoUri);
      setUserPhoto(photoUri);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleProfileUpdate(data: FormDataProps) {
    try {
      setIsUpdating(true);
      await api.put("/users", data);

      const userUpdated = user;
      userUpdated.name = data.name;

      await updateUserProfile(userUpdated);

      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            id={id}
            action="success"
            onClose={() => toast.close(id)}
            title="Perfil atualizado com sucesso!"
          />
        ),
      });
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : "Não foi possível atualizar o seu perfil. Tente novamente mais tarde.";
      toast.show({
        placement: "top",
        render: ({ id }) => <ToastMessage id={id} action="error" onClose={() => toast.close(id)} title={title} />,
      });
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Profile" />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt="$6" px="$10">
          <UserPhoto
            source={user.avatar ? { uri: `${api.defaults.baseURL}/avatar/${user.avatar}` } : defaultUserPhotoImg}
            alt="Foto do usuário"
            size="xl"
          />
          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text color="$green500" fontFamily="$heading" fontSize="$md" mt="$2" mb="$8">
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Center w="$full" gap="$4">
            <Controller
              name="name"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  placeholder="Nome"
                  bg="$gray600"
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input value={value} onChangeText={onChange} isReadOnly placeholder="E-mail" bg="$gray600" />
              )}
            />
          </Center>

          <Heading alignSelf="flex-start" fontFamily="$heading" color="$gray200" fontSize="$md" mt="$12" mb="$2">
            Alterar senha
          </Heading>

          <Center w="$full" gap="$4">
            <Controller
              name="old_password"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  onChangeText={onChange}
                  placeholder="Senha antiga"
                  bg="$gray600"
                  secureTextEntry
                  errorMessage={errors.old_password?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  onChangeText={onChange}
                  placeholder="Nova senha"
                  bg="$gray600"
                  secureTextEntry
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Controller
              name="confirm_password"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  onChangeText={onChange}
                  placeholder="Confirme a nova senha"
                  bg="$gray600"
                  secureTextEntry
                  errorMessage={errors.confirm_password?.message}
                />
              )}
            />

            <Button isLoading={isUpdating} title="Atualizar" onPress={handleSubmit(handleProfileUpdate)} />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  );
}
