import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { NewMeal } from "@screens/NewMeal";
import { OverView } from "@screens/OverView";
import { RegistratedMeal } from "@screens/RegistratedMeal";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="overview" component={OverView} />
      <Screen name="newmeal" component={NewMeal} />
      <Screen name="registratedMeal" component={RegistratedMeal} />
      <Screen name="meal" component={Meal} />
    </Navigator>
  );
}
