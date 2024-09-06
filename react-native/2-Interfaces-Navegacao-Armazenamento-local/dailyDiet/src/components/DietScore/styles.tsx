import type { StatusType } from "src/@types/Status";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { css } from "styled-components";

type TodayScoreProps = {
  status: StatusType;
  isOverViewPage: boolean;
};

export const Container = styled.View<TodayScoreProps>`
  ${({ isOverViewPage }) => {
    return isOverViewPage
      ? css`
          padding: 27px 24px 34px 24px;
          position: relative;
        `
      : css`
          padding: 20px 0;
          margin: 32px 0 40px 0;
          border-radius: 8px;
        `;
  }};

  justify-content: center;
  align-items: center;

  background-color: ${({ theme, status }) => (status == "right" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT)};
`;

export const NavigateIcon = styled(MaterialCommunityIcons)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const GoBackIcon = styled(MaterialCommunityIcons)`
  align-self: flex-start;
`;

export const Score = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZES.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const ScoreSubText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZES.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

type HeaderProps = {
  status: StatusType;
};

export const Header = styled.View<HeaderProps>`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  justify-content: center;
  align-items: center;
  padding: 27px 24px 34px 24px;
`;
