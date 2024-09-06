import { BoldText, Container, RepresentativeImage, SubTitle, Title } from "./styles";
import BadMeal from "@assets/BadMeal.png";

export function FeedbackBadMeal() {
  return (
    <Container>
      <Title>Que pena!</Title>
      <SubTitle>
        Você <BoldText>saiu da dieta</BoldText> dessa vez, mas continue se esforçando e não desista!
      </SubTitle>
      <RepresentativeImage source={BadMeal}></RepresentativeImage>
    </Container>
  );
}
