import React from "react";

import { View } from "react-native";

import { Container, LoadingIndicator } from "./styles";

export function Loading() {
  return (
    <Container>
      <LoadingIndicator />
    </Container>
  );
}
