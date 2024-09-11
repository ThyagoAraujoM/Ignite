import React, { useEffect, useState } from "react";
import { Container, Content, DataBox, DataText, DataTitle, HorizontalDataBox, Title, VerticalDataBox } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";
import { DietScore } from "@components/DietScore";
import type { MealStorageDTO } from "@storage/meal/mealStorageDTO";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { stringToDate } from "src/utils/DateFunctions";
import type { StatusType } from "src/@types/Status";

export function OverView() {
  const theme = useTheme();
  const [meals, setMeals] = useState<MealStorageDTO[]>([]);
  const [percentOfRightMeals, setPercentOfRightMeals] = useState(0);
  async function getMeals() {
    const storageMeals = await mealsGetAll();
    setMeals(storageMeals);
  }

  function returnPercentOfRightMeals() {
    if (meals.length === 0) return setPercentOfRightMeals(0);
    const rightMeals = meals.filter((meal) => meal.status == "right").length;
    const totalMeals = meals.length;
    setPercentOfRightMeals((rightMeals / totalMeals) * 100);
  }

  function returnDietMealSequence() {
    let bestSequence = 0;
    let sequence = 0;

    const mealsSorted = meals.sort(
      (a, b) => stringToDate(a.time).getMilliseconds() - stringToDate(b.time).getMilliseconds()
    );

    for (let index = 0; index < mealsSorted.length; index++) {
      const meal = mealsSorted[index];
      if (meal.status == "right") {
        sequence++;
        bestSequence = Math.max(bestSequence, sequence);
      }

      if (meal.status == "wrong") {
        sequence = 0;
        bestSequence = Math.max(bestSequence, sequence);
      }
    }

    return bestSequence;
  }

  function returnMealCountByStatus(status: StatusType) {
    return meals.filter((meal) => meal.status == status).length;
  }

  useEffect(() => {
    getMeals();
  });

  return (
    <>
      <StatusBar
        backgroundColor={percentOfRightMeals > 60 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT}
        translucent
      ></StatusBar>
      <Container status={percentOfRightMeals > 60 ? "right" : "wrong"}>
        <DietScore
          isOverViewPage={true}
          status={percentOfRightMeals > 60 || percentOfRightMeals == 0 ? "right" : "wrong"}
          subText="das refeições dentro da dieta"
          title={percentOfRightMeals}
        />
        <Content>
          <Title>Estatísticas gerais</Title>
          <VerticalDataBox>
            <DataBox>
              <DataTitle>{returnDietMealSequence()}</DataTitle>
              <DataText>melhor sequência de pratos dentro da dieta</DataText>
            </DataBox>
            <DataBox>
              <DataTitle>{meals.length}</DataTitle>
              <DataText>refeições registradas</DataText>
            </DataBox>
          </VerticalDataBox>
          <HorizontalDataBox>
            <DataBox horizontal type="right">
              <DataTitle>{returnMealCountByStatus("right")}</DataTitle>
              <DataText>refeições dentro da dieta</DataText>
            </DataBox>
            <DataBox horizontal type="wrong">
              <DataTitle numberOfLines={1}>{returnMealCountByStatus("wrong")}</DataTitle>
              <DataText>refeições fora da dieta</DataText>
            </DataBox>
          </HorizontalDataBox>
        </Content>
      </Container>
    </>
  );
}
