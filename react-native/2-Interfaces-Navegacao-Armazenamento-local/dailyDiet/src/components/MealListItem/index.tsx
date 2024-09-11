import type { TouchableOpacityProps } from "react-native";
import { Container, Divisor, MealStatus, MealText, MealTime } from "./styles";
import type { StatusType } from "src/@types/Status";

type Props = TouchableOpacityProps & {
  time: string;
  text: string;
  status: StatusType;
};

export function MealListItem({ status, text, time, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <MealTime>{time}</MealTime>
      <Divisor />
      <MealText>{text}</MealText>
      <MealStatus status={status} />
    </Container>
  );
}
