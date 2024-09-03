import styled from "styled-components/native";
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
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
`;
