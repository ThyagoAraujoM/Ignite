import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import { useAuth } from "@hooks/useAuth";

export function Routes() {
  const theme = DefaultTheme;
  theme.colors.background = gluestackUIConfig.tokens.colors.gray700;

  const { user } = useAuth();

  return (
    <NavigationContainer theme={theme}>
      <AuthRoutes></AuthRoutes>
    </NavigationContainer>
  );
}
