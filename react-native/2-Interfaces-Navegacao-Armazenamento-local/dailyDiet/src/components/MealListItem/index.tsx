import { Container, Divisor, MealStatus, MealText, MealTime, type MealStatusType } from "./styles";

type Props = {
  time: string;
  text: string;
  status: MealStatusType;
};

export function MealListItem({ status, text, time }: Props) {
  return (
    <Container>
      <MealTime>{time}</MealTime>
      <Divisor />
      <MealText>{text}</MealText>
      <MealStatus status={status} />
    </Container>
  );
}
