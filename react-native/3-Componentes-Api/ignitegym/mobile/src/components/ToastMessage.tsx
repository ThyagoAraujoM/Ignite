import { X } from "lucide-react-native";

import { Toast, ToastDescription, ToastTitle, Pressable, Icon, VStack, HStack } from "@gluestack-ui/themed";

type Props = {
  id: string;
  title: string;
  description?: string;
  action?: "error" | "success";
  onClose: () => void;
};

export function ToastMessage({ id, title, description, action = "success", onClose }: Props) {
  return (
    <Toast nativeID={`toast-${id}`} action={action} bgColor={action === "success" ? "$green500" : "$red500"} mt="$10">
      <HStack space="xs" w="$full">
        <VStack flex={1}>
          <ToastTitle color="$white" fontFamily="$heading">
            {title}
          </ToastTitle>

          {description && (
            <ToastDescription color="$white" fontFamily="$body">
              {description}
            </ToastDescription>
          )}
        </VStack>

        <Pressable alignSelf="flex-end" onPress={onClose}>
          <Icon as={X} color="$coolGray50" size="md" />
        </Pressable>
      </HStack>
    </Toast>
  );
}
