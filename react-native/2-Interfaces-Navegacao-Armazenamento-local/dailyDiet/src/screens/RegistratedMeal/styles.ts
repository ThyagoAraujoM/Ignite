import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

export const GoHomeButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  padding: 16px 24px;
  border-radius: 6px;
`;

export const GoHomeText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;
