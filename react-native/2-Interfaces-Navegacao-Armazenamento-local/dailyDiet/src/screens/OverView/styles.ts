import { SafeAreaView } from "react-native-safe-area-context";
import type { StatusType } from "src/@types/Status";

import styled, { css } from "styled-components/native";

type ContainerProps = {
  status: StatusType;
};

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, status }) => (status === "right" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT)};
`;

export const Content = styled.View`
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 33px 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZES.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
  margin-bottom: 23px;
`;

type DataBoxProps = {
  type?: StatusType;
  horizontal?: boolean;
};

export const DataBox = styled.View<DataBoxProps>`
  background-color: ${({ theme, type }) =>
    !type ? theme.COLORS.GRAY_6 : type == "right" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  max-height: 327px;

  ${({ horizontal }) =>
    horizontal
      ? css`
          flex: 1;
          flex-shrink: 1;
        `
      : ""}
`;

export const DataTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZES.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  text-align: center;
  margin-bottom: 8px;
`;

export const DataText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZES.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  text-align: center;
`;

export const VerticalDataBox = styled.View`
  flex-direction: column;
`;

export const HorizontalDataBox = styled.View`
  flex-direction: row;
  gap: 12px;
`;
