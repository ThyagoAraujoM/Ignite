import React, { useEffect, useState } from "react";

import {
  Container,
  Content,
  DateTimeButton,
  DateTimeText,
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
import { useTheme } from "styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import DateTimePicker, { type DateTimePickerEvent } from "@react-native-community/datetimepicker";

import type { StatusType } from "src/@types/Status";

import type { MealStorageDTO } from "@storage/meal/mealStorageDTO";
import { mealAdd } from "@storage/meal/mealAdd";

import { dateToString, stringToDate } from "src/utils/DateFunctions";

import { ModalWarning } from "@components/ModalWarning";
import { GenerateRandomId } from "src/utils/GenerateRandomId";

type RouteParams = {
  meal?: MealStorageDTO;
};

export function NewMeal() {
  const theme = useTheme();
  const navigation = useNavigation();
  const routes = useRoute();
  const params = routes.params as RouteParams;
  const meal = params?.meal;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [mealTime, setMealTime] = useState<Date>();
  const [status, setStatus] = useState<StatusType>("none");

  const [showDatePick, setShowDatePick] = useState(false);
  const [showTimePick, setShowTimePick] = useState(false);

  const [warningText, setWarningText] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleGoBack() {
    navigation.navigate("home");
  }

  function handleOpenDatePick() {
    setShowDatePick(true);
  }

  function handleOpenTimePick() {
    setShowTimePick(true);
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

  function returnFormatedTime(time?: Date) {
    if (!time) {
      return "";
    }
    let hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    let minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    return `${hours}:${minute}`;
  }

  function handleChangeMealTime(event: DateTimePickerEvent, selectedDate?: Date) {
    const currentDate = selectedDate || mealTime;
    setShowTimePick(false);
    setShowDatePick(false);

    setMealTime(currentDate);
  }

  function handleChangeMealStatus(status: StatusType) {
    setStatus(status);
  }

  function checkValuesForm() {
    if (description.trim() == "" || status.trim() == "" || name.trim() == "" || !mealTime) {
      return false;
    }

    return true;
  }

  async function handleSubmit() {
    try {
      if (!checkValuesForm()) {
        setShowModal(true);
        setWarningText("Todos os campos são obrigatórios.");
        return;
      }

      let newMeal: MealStorageDTO = {
        description,
        status: status,
        name,
        time: mealTime ? dateToString(mealTime) : "",
        id: meal ? meal.id : GenerateRandomId(20),
      };

      await mealAdd(newMeal);

      navigation.navigate("registratedMeal", { status: status });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (meal) {
      let date = new Date(stringToDate(meal.time));
      setName(meal.name);
      setDescription(meal.description);
      setStatus(meal.status);
      setMealTime(isNaN(date.getTime()) ? new Date() : date);
    }
  }, []);

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

              <DateTimeButton onPress={handleOpenDatePick}>
                <DateTimeText>{returnFormatedDate(mealTime)}</DateTimeText>
              </DateTimeButton>
              {showDatePick ? (
                <DateTimePicker
                  onChange={handleChangeMealTime}
                  value={mealTime ?? new Date()}
                  mode="date"
                  display="default"
                />
              ) : (
                ""
              )}
            </InputContainer>
            <InputContainer horizontal>
              <InputLabel>Hora</InputLabel>
              <DateTimeButton onPress={handleOpenTimePick}>
                <DateTimeText>{returnFormatedTime(mealTime)}</DateTimeText>
              </DateTimeButton>
              {showTimePick ? (
                <DateTimePicker onChange={handleChangeMealTime} value={mealTime ?? new Date()} mode="time" />
              ) : (
                ""
              )}
            </InputContainer>
          </HorizontalBox>

          <InputLabel>Teste</InputLabel>

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

        <ModalWarning setModalOf={setShowModal} visible={showModal} text={warningText} />
      </Container>
    </>
  );
}
