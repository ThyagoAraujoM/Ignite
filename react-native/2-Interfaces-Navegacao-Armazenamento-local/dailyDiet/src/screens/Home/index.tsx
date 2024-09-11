import { SectionList } from "react-native";
import { useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import {
  Container,
  Header,
  InputTitle,
  Logo,
  MealsDay,
  ResetIcon,
  ResetIconContainer,
  UserContainer,
  UserIcon,
} from "./styles";

import logo from "@assets/Logo.png";
import userIcon from "@assets/UserIcon.png";

import { DefaultButton } from "@components/DefaultButton";
import { MealListItem } from "@components/MealListItem";
import { DietScore } from "@components/DietScore";

import type { MealStorageDTO } from "@storage/meal/mealStorageDTO";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { useTheme } from "styled-components/native";
import { ModalDelAll } from "@components/ModalDelAll";
import { stringToDate } from "src/utils/DateFunctions";

type MealsPerDay = {
  day: string;
  data: MealStorageDTO[];
};

export function Home() {
  const [meals, setMeals] = useState<MealStorageDTO[]>([]);
  const [overallStatus, setOverallStatus] = useState<number>(0);
  const [showModalDellAll, setShowModalDellAll] = useState(false);
  const theme = useTheme();
  const navigation = useNavigation();

  function handleNavationNewMeal() {
    navigation.navigate("newmeal");
  }

  async function loadMeals() {
    let storageMeals = await mealsGetAll();
    calcPercentOfRightMeals();
    setMeals(storageMeals);
  }

  function returnMealsPerDay(storageMeals: MealStorageDTO[]) {
    let dayOfMeals: MealsPerDay[] = [];

    storageMeals.sort((a, b) => {
      let dateA = stringToDate(a.time);
      let dateB = stringToDate(b.time);
      return dateA.getTime() - dateB.getTime();
    });

    for (let i = 0; i < storageMeals.length; i++) {
      const meal = storageMeals[i];

      let dayOfMeal = meal.time.split(" ")[0].replaceAll("/", ".");
      let indexDayOfMeal = dayOfMeals.findIndex((day) => day.day == dayOfMeal);

      if (indexDayOfMeal != -1) {
        dayOfMeals[indexDayOfMeal].data.push(meal);
      } else {
        dayOfMeals.push({ day: dayOfMeal, data: [meal] });
      }
    }

    dayOfMeals.sort((a, b) => {
      let dateA = new Date(a.day.split(".").reverse().join("-"));
      let dateB = new Date(b.day.split(".").reverse().join("-"));
      return dateB.getTime() - dateA.getTime();
    });

    return dayOfMeals;
  }

  function navigationToMeal(meal: MealStorageDTO) {
    navigation.navigate("meal", { meal: meal });
  }

  function handleOpenModalDellAll() {
    setShowModalDellAll(true);
  }

  function handleDelMeals() {
    setMeals([]);
  }

  function calcPercentOfRightMeals() {
    let result = 0;
    if (meals.length === 0) {
      result = 0;
      setOverallStatus(result);
      return;
    }
    const rightMeals = meals.filter((meal) => meal.status == "right").length;
    const totalMeals = meals.length;
    result = (rightMeals / totalMeals) * 100;
    setOverallStatus(result);
  }

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, [])
  );

  return (
    <>
      <StatusBar translucent></StatusBar>
      <Container>
        <Header>
          <Logo source={logo} />
          <UserContainer>
            <ResetIconContainer onPress={handleOpenModalDellAll}>
              <ResetIcon color={theme.COLORS.GRAY_1} size={20} name="warning" />
            </ResetIconContainer>
            <UserIcon source={userIcon} />
          </UserContainer>
        </Header>

        <DietScore
          status={overallStatus > 60 || overallStatus == 0 ? "right" : "wrong"}
          subText="das refeições dentro da dieta"
          title={overallStatus}
          isOverViewPage={false}
        />

        <InputTitle>Refeições</InputTitle>
        <DefaultButton
          onPress={handleNavationNewMeal}
          text="Nova Refeição"
          icon={{ name: "plus", color: "white", size: 24 }}
        />

        <SectionList
          sections={returnMealsPerDay(meals)}
          keyExtractor={(item, index) => index.toString()}
          renderSectionHeader={({ section }) => {
            return <MealsDay>{section.day}</MealsDay>;
          }}
          renderItem={({ item }) => {
            return (
              <MealListItem
                onPress={() => navigationToMeal(item)}
                text={item.name}
                status={item.status}
                time={item.time}
              />
            );
          }}
          initialNumToRender={5}
        />
        <ModalDelAll handleDelMeals={handleDelMeals} setModalOf={setShowModalDellAll} visible={showModalDellAll} />
      </Container>
    </>
  );
}
