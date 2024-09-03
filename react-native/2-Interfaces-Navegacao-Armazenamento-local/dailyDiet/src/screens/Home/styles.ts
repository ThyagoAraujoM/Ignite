import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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

export const TodayScore = styled.View`
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 32px;
  margin-bottom: 40px;
  border-radius: 8px;
  position: relative;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const ScoreIcon = styled(MaterialCommunityIcons)`
  position: absolute;
  top: 8;
  right: 8;
`;

export const Score = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZES.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ScoreSubText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const InputTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 8px;
`;

export const MealsDay = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZES.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 8px;
  margin-top: 32px;
`;
