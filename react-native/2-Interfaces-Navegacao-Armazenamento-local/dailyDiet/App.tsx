import { Loading } from "@components/Loading";
import { NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";
import { Home } from "@screens/Home";
import { defaultTheme } from "@theme/default";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar translucent></StatusBar>
      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}
