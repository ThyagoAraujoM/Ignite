import React from "react";
import { Container, Content, DataBox, DataText, DataTitle, HorizontalDataBox, Title, VerticalDataBox } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";
import { DietScore } from "@components/DietScore";

export function OverView() {
  const theme = useTheme();

  return (
    <>
      <StatusBar backgroundColor={theme.COLORS.GREEN_LIGHT} translucent></StatusBar>
      <Container status="right">
        <DietScore isOverViewPage={true} status="right" subText="das refeições dentro da dieta" title="90,86%" />
        <Content>
          <Title>Estatísticas gerais</Title>
          <VerticalDataBox>
            <DataBox>
              <DataTitle>22</DataTitle>
              <DataText>melhor sequência de pratos dentro da dieta</DataText>
            </DataBox>
            <DataBox>
              <DataTitle>22</DataTitle>
              <DataText>melhor sequência de pratos dentro da dieta</DataText>
            </DataBox>
          </VerticalDataBox>
          <HorizontalDataBox>
            <DataBox horizontal type="right">
              <DataTitle>99</DataTitle>
              <DataText>refeições dentro da dieta</DataText>
            </DataBox>
            <DataBox horizontal type="wrong">
              <DataTitle numberOfLines={1}>10000000000000000000</DataTitle>
              <DataText>refeições fora da dieta</DataText>
            </DataBox>
          </HorizontalDataBox>
        </Content>
      </Container>
    </>
  );
}
