import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storage.config";

export async function mealsDelAll() {
  const storage = AsyncStorage;
  await storage.removeItem(MEAL_COLLECTION);
}
