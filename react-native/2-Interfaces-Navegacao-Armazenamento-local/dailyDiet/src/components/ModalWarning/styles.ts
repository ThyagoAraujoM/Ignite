import styled, { css } from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_7};
  `}
  padding: 20px;
  width: 80%;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 8px;
`;

export const WarningText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}
  text-align: center;
`;

export const CloseButton = styled.TouchableOpacity`
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 6px;
`;

export const CloseButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;
