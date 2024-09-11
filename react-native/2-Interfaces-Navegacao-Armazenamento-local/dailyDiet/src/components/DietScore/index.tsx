import React from "react";
import { Container, GoBackIcon, NavigateIcon, Score, ScoreSubText } from "./styles";
import { useTheme } from "styled-components/native";
import type { StatusType } from "src/@types/Status";
import { useNavigation } from "@react-navigation/native";

type Props = {
  status: StatusType;
  title: number;
  subText: string;
  isOverViewPage: boolean;
};

export function DietScore({ status, subText, title, isOverViewPage }: Props) {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleNavigateScoreDetails() {
    navigation.navigate("overview");
  }

  function handleGoBack() {
    navigation.navigate("home");
  }

  return (
    <Container isOverViewPage={isOverViewPage} status={status}>
      {isOverViewPage ? (
        <GoBackIcon
          onPress={handleGoBack}
          color={status == "right" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}
          size={24}
          name="arrow-left"
        />
      ) : (
        <NavigateIcon
          onPress={handleNavigateScoreDetails}
          size={24}
          name="arrow-top-right"
          color={status == "right" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}
        />
      )}
      <Score>{title}%</Score>
      <ScoreSubText>{subText}</ScoreSubText>
    </Container>
  );
}
