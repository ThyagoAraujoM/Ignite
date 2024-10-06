import AsyncStorage from "@react-native-async-storage/async-storage";

import { AUTH_TOKEN_STORAGE } from "@storage/storageConfig";

export async function authStorageTokenSave(token: string): Promise<void> {
  await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, token);
}

export async function authStorageTokenGet(): Promise<string | null> {
  const token = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE);
  return token;
}

export async function authStorageTokenRemove(): Promise<void> {
  await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE);
}
