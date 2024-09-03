import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  gap: 12px;
  padding: 14px 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  align-items: center;
  margin-bottom: 8px;
  border-radius: 6px;
`;
export const Divisor = styled.View`
  height: 100%;
  width: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`;

export const MealTime = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZES.SSM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const MealText = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export type MealStatusType = "right" | "wrong";

type MealStatusProps = {
  status: MealStatusType;
};

export const MealStatus = styled.View<MealStatusProps>`
  border-radius: 50px;
  width: 14px;
  height: 14px;
  background-color: ${({ theme, status }) => (status == "right" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID)};
`;
