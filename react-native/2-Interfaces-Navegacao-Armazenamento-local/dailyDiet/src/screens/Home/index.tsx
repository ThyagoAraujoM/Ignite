import { SectionList, Text } from "react-native";
import logo from "@assets/Logo.png";
import userIcon from "@assets/UserIcon.png";
import {
  Container,
  Header,
  InputTitle,
  Logo,
  MealsDay,
  Score,
  ScoreIcon,
  ScoreSubText,
  TodayScore,
  UserIcon,
} from "./styles";
import { DefaultButton } from "@components/DefaultButton";
import { useTheme } from "styled-components/native";
import { MealListItem } from "@components/MealListItem";
import type { MealStatusType } from "@components/MealListItem/styles";

type Meal = {
  time: string;
  text: string;
  status: MealStatusType;
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
  const theme = useTheme();

  function handleNavigateScoreDetails() {}

  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <UserIcon source={userIcon} />
      </Header>
      <TodayScore>
        <ScoreIcon
          onPress={handleNavigateScoreDetails}
          size={24}
          name="arrow-top-right"
          color={theme.COLORS.GREEN_DARK}
        />
        <Score>90,86%</Score>
        <ScoreSubText>das refeições dentro da dieta</ScoreSubText>
      </TodayScore>

      <InputTitle>Refeições</InputTitle>
      <DefaultButton text="Nova Refeição" icon={{ name: "plus", color: "white", size: 24 }} />

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
  );
}
