import { Groups } from "@screens/Groups";
import { defaultTheme } from "@theme/default";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";
import { NewGroup } from "@screens/NewGroup";
import { Players } from "@screens/Players";
import { Routes } from "@routes/index";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar style="light" backgroundColor="transparent" translucent />
        {/* {fontsLoaded ? <Groups /> : <Loading />} */}
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </>
  );
}
