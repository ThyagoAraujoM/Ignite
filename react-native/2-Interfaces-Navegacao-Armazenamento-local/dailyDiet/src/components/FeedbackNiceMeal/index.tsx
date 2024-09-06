import { BoldText, Container, RepresentativeImage, SubTitle, Title } from "./styles";
import NiceMeal from "@assets/NiceMeal.png";

export function FeedbackNiceMeal() {
  return (
    <Container>
      <Title>Continue assim!</Title>
      <SubTitle>
        Você continua <BoldText>dentro da dieta.</BoldText> Muito bem!
      </SubTitle>
      <RepresentativeImage source={NiceMeal}></RepresentativeImage>
    </Container>
  );
}
