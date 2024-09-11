import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons, AntDesign, Feather } from "@expo/vector-icons";
import type { StatusType } from "src/@types/Status";

type ContainerProps = {
  status: StatusType;
};

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, status }) => {
    if (!status || status == "none") {
      return theme.COLORS.GRAY_5;
    }

    return status == "right" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT;
  }};
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
  padding: 40px 24px 24px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: 20px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 8px;
`;

export const MealDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZES.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-bottom: 24px;
`;

export const DateText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZES.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 8px;
`;

export const MealDate = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZES.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-bottom: 24px;
`;

export const StatusContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  flex-direction: row;
  border-radius: 50px;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  align-self: flex-start;
`;

type StatusCircleProps = {
  status: StatusType;
};

export const StatusCircle = styled.View<StatusCircleProps>`
  width: 8px;
  height: 8px;
  border-radius: 20px;

  background-color: ${({ theme, status }) => {
    if (!status || status == "none") {
      return theme.COLORS.GRAY_5;
    }
    if (status == "right") {
      return theme.COLORS.GREEN_DARK;
    } else {
      return theme.COLORS.RED_DARK;
    }
  }};
`;

export const StatusText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZES.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  gap: 10px;
`;

export const ButtonStyle = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 12px;
  border-radius: 6px;
`;

export const ButtonTextStyle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const EditButton = styled(ButtonStyle)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const EditIcon = styled(AntDesign)``;

export const EditButtonText = styled(ButtonTextStyle)`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const DeleteButton = styled(ButtonStyle)`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const DelButtonText = styled(ButtonTextStyle)`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const DeleteIcon = styled(Feather)``;
