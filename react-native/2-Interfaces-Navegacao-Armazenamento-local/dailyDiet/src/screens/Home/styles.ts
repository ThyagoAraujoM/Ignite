import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import type { StatusType } from "src/@types/Status";
import { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

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
  align-items: center;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const UserContainer = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const ResetIconContainer = styled(TouchableOpacity)`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_1};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  padding-bottom: 2px;
`;

export const ResetIcon = styled(AntDesign)`
  /* align-self: center; */
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
