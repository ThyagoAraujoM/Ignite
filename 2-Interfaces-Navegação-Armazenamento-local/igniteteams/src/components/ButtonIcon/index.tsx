import React from "react";
import { Container, Icon } from "./styles";
import type { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {};
export function ButtonIcon({}: Props) {
  return (
    <Container type="PRIMARY">
      <Icon name="home" type="PRIMARY" />
    </Container>
  );
}
