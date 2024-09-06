import React, { useState } from "react";

import {
  Container,
  Content,
  Footer,
  GoBackIcon,
  Header,
  HorizontalBox,
  Input,
  InputContainer,
  InputLabel,
  LittleCircle,
  SubmitButton,
  SubmitText,
  Title,
  TypeMealButton,
} from "./styles";

import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker, { type DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { Text } from "react-native";
import type { StatusType } from "src/@types/Status";

export function NewMeal() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [mealTime, setMealTime] = useState<Date>(new Date());
  const [showDatePick, setShowDatePick] = useState(false);
  const [showTimePick, setShowTimePick] = useState(false);
  const [status, setStatus] = useState<StatusType | "">("");

  function handleGoBack() {
    navigation.navigate("home");
  }

  function handleOpenDatePick() {
    setShowDatePick(true);
  }

  function returnFormatedDate(date?: Date) {
    if (!date) {
      return "";
    }

    let day = date.getDate() < 9 ? "0" + date.getDate() : date.getDate();
    let month = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    let year = date.getFullYear();

    let formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  }

  function handleOpenTimePick() {
    setShowTimePick(true);
  }

  function returnFormatedTime(time?: Date) {
    if (!time) {
      return "";
    }

    return time.getHours() + ":" + (time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes());
  }

  function handleChangeMealTime(event: DateTimePickerEvent, selectedDate?: Date) {
    const currentDate = selectedDate || mealTime;
    setShowTimePick(false);
    setMealTime(currentDate);
  }

  function handleChangeMealStatus(status: StatusType) {
    setStatus(status);
  }

  function handleSubmit() {
    navigation.navigate("registratedMeal", { status: "right" });
  }

  return (
    <>
      <StatusBar translucent></StatusBar>
      <Container>
        <Header>
          <GoBackIcon onPress={handleGoBack} size={24} color={theme.COLORS.GRAY_2} name="arrow-left" />
          <Title>Nova Refeição</Title>
        </Header>
        <Content>
          <InputContainer>
            <InputLabel>Nome</InputLabel>
            <Input value={name} onChangeText={setName} placeholderTextColor={theme.COLORS.GRAY_1} />
          </InputContainer>
          <InputContainer>
            <InputLabel>Descrição</InputLabel>
            <Input
              value={description}
              onChangeText={setDescription}
              textAlignVertical="top"
              multiline
              placeholderTextColor={theme.COLORS.GRAY_1}
            />
          </InputContainer>
          <HorizontalBox>
            <InputContainer horizontal>
              <InputLabel>Data </InputLabel>
              <Input
                value={returnFormatedDate(mealTime)}
                onPress={handleOpenDatePick}
                placeholderTextColor={theme.COLORS.GRAY_1}
              />
              {showDatePick ? (
                <DateTimePicker onChange={handleChangeMealTime} value={mealTime} mode="date" display="default" />
              ) : (
                ""
              )}
            </InputContainer>
            <InputContainer horizontal>
              <InputLabel>Hora</InputLabel>
              <Input
                value={returnFormatedTime(mealTime)}
                onPress={handleOpenTimePick}
                placeholderTextColor={theme.COLORS.GRAY_1}
              />
              {showTimePick ? <DateTimePicker onChange={handleChangeMealTime} value={mealTime} mode="time" /> : ""}
            </InputContainer>
          </HorizontalBox>

          <InputLabel>Hora</InputLabel>

          <HorizontalBox>
            <TypeMealButton onPress={() => handleChangeMealStatus("right")} status="right" checked={status == "right"}>
              <LittleCircle status="right"></LittleCircle>
              <InputLabel>Sim</InputLabel>
            </TypeMealButton>

            <TypeMealButton onPress={() => handleChangeMealStatus("wrong")} status="wrong" checked={status == "wrong"}>
              <LittleCircle status="wrong"></LittleCircle>
              <InputLabel>Não</InputLabel>
            </TypeMealButton>
          </HorizontalBox>
          <Footer>
            <SubmitButton onPress={handleSubmit}>
              <SubmitText>Cadastrar refeição</SubmitText>
            </SubmitButton>
          </Footer>
        </Content>
      </Container>
    </>
  );
}
