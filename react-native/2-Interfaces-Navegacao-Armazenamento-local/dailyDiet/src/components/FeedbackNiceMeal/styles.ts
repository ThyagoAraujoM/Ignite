import styled, { css } from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GREEN_DARK};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const BoldText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const RepresentativeImage = styled.Image`
  margin-top: 40px;
  margin-bottom: 32px;
`;
