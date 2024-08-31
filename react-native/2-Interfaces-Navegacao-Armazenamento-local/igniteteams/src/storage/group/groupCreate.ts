import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storage.config";
import { groupsGetAll } from "./groupsGetAll";
import { AppError } from "@utils/AppError";

export async function groupCreate(newGroupName: string) {
  try {
    const storageGroups = await groupsGetAll();

    const groudAlreadyExists = await storageGroups.includes(newGroupName);

    if (groudAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome.");
    }

    const storage = JSON.stringify([...storageGroups, newGroupName]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
