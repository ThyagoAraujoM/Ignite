import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealsGetAll } from "./mealsGetAll";
import { MEAL_COLLECTION } from "@storage/storage.config";

export async function mealDelById(id: string) {
  const storageMeals = await mealsGetAll();
  const indexMeal = storageMeals.findIndex((meal) => meal.id === id);
  if (indexMeal !== -1) {
    storageMeals.splice(indexMeal, 1);
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storageMeals));
  }
}
