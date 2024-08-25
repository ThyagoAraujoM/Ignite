import React from "react";

import logoImg from "../../assets/logo.png";

import { BackButton, BackIcon, Container, Logo } from "./styles";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton ? (
        <BackButton>
          <BackIcon></BackIcon>
        </BackButton>
      ) : (
        <></>
      )}

      <Logo source={logoImg} />
    </Container>
  );
}
