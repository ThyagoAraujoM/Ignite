import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { StatusType } from "src/@types/Status";
import { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-top: 24px;
  padding-right: 24px;
  padding-left: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const UserIcon = styled.Image`
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 50px;
`;

export const InputTitle = styled.Text`
  ${({ theme }) =>
    css({
      color: theme.COLORS.GRAY_1,
      fontSize: theme.FONT_SIZES.MD,
      fontfamily: theme.FONT_FAMILY.BOLD,
    })};

  margin-bottom: 8px;
`;

export const MealsDay = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZES.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 8px;
  margin-top: 32px;
`;
