import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const OutContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BRACKGROUND_MODAL};
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const InnerContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 40px 24px 24px 24px;
  gap: 32px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZES.LG}px;
  `};
  margin-bottom: 10px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const ButtonStyled = styled(TouchableOpacity)`
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  flex: 1;
`;

export const CancelButton = styled(ButtonStyled)`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const ConfirmButton = styled(ButtonStyled)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const CancelButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZES.MD}px;
  `};
`;

export const ConfirmButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZES.MD}px;
  `};
`;
