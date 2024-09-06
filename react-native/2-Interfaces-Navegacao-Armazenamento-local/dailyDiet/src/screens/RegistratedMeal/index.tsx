import React from "react";

import { Image, StatusBar } from "react-native";
import NiceMeal from "@assets/NiceMeal.png";
import { Container, GoHomeButton, GoHomeText } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FeedbackNiceMeal } from "@components/FeedbackNiceMeal";
import { FeedbackBadMeal } from "@components/FeedbackBadMeal";
import type { StatusType } from "src/@types/Status";

type RouteParams = {
  status: StatusType;
};

export function RegistratedMeal() {
  const naviagtion = useNavigation();

  function handleGoHome() {
    naviagtion.navigate("home");
  }

  const route = useRoute();
  const { status } = route.params as RouteParams;

  console.log(status);
  return (
    <>
      <StatusBar translucent></StatusBar>
      <Container>
        {status == "right" ? <FeedbackNiceMeal /> : <FeedbackBadMeal />}

        <GoHomeButton onPress={handleGoHome}>
          <GoHomeText>Ir para a página inicial</GoHomeText>
        </GoHomeButton>
      </Container>
    </>
  );
}
