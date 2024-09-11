import { MEAL_COLLECTION } from "@storage/storage.config";
import { mealsGetAll } from "./mealsGetAll";
import type { MealStorageDTO } from "./mealStorageDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function mealAdd(meal: MealStorageDTO) {
  try {
    const storageMeals = await mealsGetAll();

    let indexMeal = storageMeals.findIndex((actualMeal) => actualMeal.id == meal.id);

    if (indexMeal === -1) {
      storageMeals.push(meal);
    } else {
      storageMeals[indexMeal] = meal;
    }

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storageMeals));
  } catch (error) {
    console.log(error);
  }
}
