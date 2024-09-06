import { SectionList, Text } from "react-native";
import logo from "@assets/Logo.png";
import userIcon from "@assets/UserIcon.png";
import { Container, Header, InputTitle, Logo, MealsDay, UserIcon } from "./styles";
import { DefaultButton } from "@components/DefaultButton";
import { useTheme } from "styled-components/native";
import { MealListItem } from "@components/MealListItem";
import type { StatusType } from "src/@types/Status";
import { StatusBar } from "expo-status-bar";
import { DietScore } from "@components/DietScore";
import { useNavigation } from "@react-navigation/native";

type Meal = {
  time: string;
  text: string;
  status: StatusType;
};

type Meals = {
  title: string;
  data: Meal[];
}[];

export function Home() {
  const mealsRegisters: Meals = [
    {
      title: "01.05.2022",
      data: [
        {
          time: "12:00",
          text: "Whey",
          status: "right",
        },
        {
          time: "12:00",
          text: "Whey",
          status: "right",
        },
        {
          time: "12:00",
          text: "Whey",
          status: "right",
        },

        {
          time: "12:00",
          text: "Whey",
          status: "right",
        },
        {
          time: "12:00",
          text: "Whey",
          status: "right",
        },
        {
          time: "12:00",
          text: "Whey",
          status: "right",
        },
        {
          time: "12:00",
          text: "Whey",
          status: "right",
        },

        {
          time: "12:00",
          text: "Whey",
          status: "right",
        },
      ],
    },
    {
      title: "01.05.2022",
      data: [
        {
          time: "12:00",
          text: "Whey",
          status: "right",
        },
        {
          time: "12:00",
          text: "Whey",
          status: "right",
        },
        {
          time: "12:00",
          text: "Whey",
          status: "right",
        },

        {
          time: "12:00",
          text: "Whey",
          status: "right",
        },
        {
          time: "12:00",
          text: "Whey",
          status: "right",
        },
        {
          time: "12:00",
          text: "Whey",
          status: "right",
        },
        {
          time: "12:00",
          text: "Whey",
          status: "right",
        },

        {
          time: "12:00",
          text: "Whey",
          status: "right",
        },
      ],
    },
  ];

  const navigation = useNavigation();

  function handleNavationNewMeal() {
    navigation.navigate("newmeal");
  }

  return (
    <>
      <StatusBar translucent></StatusBar>
      <Container>
        <Header>
          <Logo source={logo} />
          <UserIcon source={userIcon} />
        </Header>

        <DietScore status="right" subText="das refeições dentro da dieta" title="90,86%" isOverViewPage={false} />

        <InputTitle>Refeições</InputTitle>
        <DefaultButton
          onPress={handleNavationNewMeal}
          text="Nova Refeição"
          icon={{ name: "plus", color: "white", size: 24 }}
        />

        <SectionList
          sections={mealsRegisters}
          keyExtractor={(item, index) => index.toString()}
          renderSectionHeader={({ section }) => {
            return <MealsDay>{section.title}</MealsDay>;
          }}
          renderItem={({ item }) => {
            return <MealListItem text={item.text} status={item.status} time={item.time} />;
          }}
          initialNumToRender={5}
        />
      </Container>
    </>
  );
}
