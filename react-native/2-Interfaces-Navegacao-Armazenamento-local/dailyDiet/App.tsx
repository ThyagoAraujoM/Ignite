import { Loading } from "@components/Loading";
import { NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";
import { Routes } from "@routes/index";
import { defaultTheme } from "@theme/default";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  return <ThemeProvider theme={defaultTheme}>{fontsLoaded ? <Routes /> : <Loading />}</ThemeProvider>;
}
