import { Groups } from "@screens/Groups";
import { defaultTheme } from "@theme/default";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { ActivityIndicator } from "react-native";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        {fontsLoaded ? (
          <>
            <StatusBar translucent style="light"></StatusBar>
            <Groups />
          </>
        ) : (
          <Loading />
        )}
      </ThemeProvider>
    </>
  );
}
