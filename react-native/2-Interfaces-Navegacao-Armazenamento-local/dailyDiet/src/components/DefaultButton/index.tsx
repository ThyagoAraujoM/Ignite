import React from "react";

import { Container, Icon, TextButton } from "./styles";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  text: string;
  icon: {
    name: keyof typeof AntDesign.glyphMap;
    color: string;
    size: number;
  };
};

export function DefaultButton({ text, icon }: Props) {
  return (
    <Container activeOpacity={0.6}>
      <Icon name={icon.name} size={icon.size} color={icon.color} />
      <TextButton>{text}</TextButton>
    </Container>
  );
}
