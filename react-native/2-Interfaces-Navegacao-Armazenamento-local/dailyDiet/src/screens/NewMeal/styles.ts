import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { StatusType } from "src/@types/Status";
import { TextInput } from "react-native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 30px 24px 24px 24px;
  position: relative;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZES.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const GoBackIcon = styled(MaterialCommunityIcons)`
  position: absolute;
  left: 0;
`;

export const Content = styled.View`
  padding: 40px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

type InputContainerProps = {
  horizontal?: boolean;
};

export const InputContainer = styled.View<InputContainerProps>`
  margin-bottom: 24px;

  ${({ horizontal }) =>
    horizontal
      ? css`
          flex: 1;
        `
      : ""}
`;

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZES.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Input = styled(TextInput)`
  margin-top: 8px;
  padding: 12px 16px;
  border-radius: 6px;
  ${({ theme, multiline }) => css`
    border: 1px solid ${theme.COLORS.GRAY_5};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZES.MD}px;
    height: ${multiline ? 120 : 48}px;
  `};
`;

export const HorizontalBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

export const DateTimeButton = styled.TouchableOpacity`
  margin-top: 8px;
  padding: 12px 16px;
  border-radius: 6px;
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_5};
  `};
`;

export const DateTimeText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZES.MD}px;
    color: ${theme.COLORS.GRAY_1};
  `};
`;

type TypeMealButtonProps = {
  status: StatusType;
  checked: boolean;
};

export const TypeMealButton = styled.TouchableOpacity<TypeMealButtonProps>`
  padding: 16px;
  justify-content: center;
  align-items: center;
  flex: 1;
  border-radius: 6px;
  flex-direction: row;
  gap: 8px;

  ${({ theme, status, checked }) => {
    if (checked) {
      return status == "right"
        ? css`
            background-color: ${theme.COLORS.GREEN_LIGHT};
            border: 1px solid ${theme.COLORS.GREEN_DARK};
          `
        : css`
            background-color: ${theme.COLORS.RED_LIGHT};
            border: 1px solid ${theme.COLORS.RED_DARK};
          `;
    }
    return css`
      background-color: ${theme.COLORS.GRAY_6};
    `;
  }}
`;

type LittleCircleProps = {
  status: StatusType;
};

export const LittleCircle = styled.View<LittleCircleProps>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, status }) => (status == "right" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK)};
  border-radius: 6px;
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  padding: 16px;
  border-radius: 6px;
`;

export const SubmitText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZES.SM}px;
    text-align: center;
  `}
`;
