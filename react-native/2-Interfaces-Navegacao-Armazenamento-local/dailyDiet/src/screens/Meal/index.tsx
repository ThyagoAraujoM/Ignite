import React, { useState } from "react";

import {
  ButtonsContainer,
  Container,
  Content,
  DateText,
  DelButtonText,
  DeleteButton,
  DeleteIcon,
  EditButton,
  EditButtonText,
  EditIcon,
  GoBackIcon,
  Header,
  MealDate,
  MealDescription,
  MealName,
  StatusCircle,
  StatusContainer,
  StatusText,
  Title,
} from "./styles";
import { useTheme } from "styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { MealStorageDTO } from "@storage/meal/mealStorageDTO";
import { ModalDelMeal } from "./../../components/ModalDelMeal/index";

type RouteParams = {
  meal: MealStorageDTO;
};

export function Meal() {
  const theme = useTheme();
  const route = useRoute();
  const { meal } = route.params as RouteParams;
  const { status, name, description, time } = meal;
  const [showModalDelMeal, setShowModalDelMeal] = useState(false);

  const navigation = useNavigation();
  function handleGoBack() {
    navigation.navigate("home");
  }

  function handleEditMeal() {
    navigation.navigate("newmeal", { meal: meal });
  }

  function handleShowDelModal() {
    setShowModalDelMeal(true);
  }

  function handleDelMeal() {
    navigation.navigate("home");
  }

  return (
    <Container status={status}>
      <Header>
        <GoBackIcon onPress={handleGoBack} size={24} color={theme.COLORS.GRAY_2} name="arrow-left" />
        <Title>Nova Refeição</Title>
      </Header>
      <Content>
        <MealName>{name}</MealName>
        <MealDescription>{description} </MealDescription>
        <DateText>Data e Hora</DateText>
        <MealDate>{time}</MealDate>

        <StatusContainer>
          <StatusCircle status={status} />
          {status == "right" ? <StatusText>dentro da dieta</StatusText> : <StatusText>fora da dieta</StatusText>}
        </StatusContainer>
        <ButtonsContainer>
          <EditButton onPress={handleEditMeal} activeOpacity={0.5}>
            <EditIcon color={theme.COLORS.WHITE} size={18} name="edit" />
            <EditButtonText>Editar refeição</EditButtonText>
          </EditButton>
          <DeleteButton onPress={handleShowDelModal}>
            <DeleteIcon color={theme.COLORS.GRAY_1} size={18} name="trash-2" />
            <DelButtonText>Excluir refeição</DelButtonText>
          </DeleteButton>
        </ButtonsContainer>
      </Content>
      <ModalDelMeal
        handleDelMeal={handleDelMeal}
        meal={meal}
        visible={showModalDelMeal}
        setModalOf={setShowModalDelMeal}
      />
    </Container>
  );
}
