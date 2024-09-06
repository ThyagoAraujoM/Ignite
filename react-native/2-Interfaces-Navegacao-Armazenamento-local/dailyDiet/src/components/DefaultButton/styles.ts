import styled, { css } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const Icon = styled(AntDesign)`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZES.MD}px;
  `}
`;
