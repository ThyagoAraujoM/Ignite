import React from "react";
import { Container } from "./styles";
import type { TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  return <Container {...rest} />;
}
