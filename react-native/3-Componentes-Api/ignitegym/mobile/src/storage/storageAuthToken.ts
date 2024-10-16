import AsyncStorage from "@react-native-async-storage/async-storage";

import { AUTH_TOKEN_STORAGE } from "@storage/storageConfig";

type StorageAuthTokenProps = {
  token: string;
  refresh_token: string;
};

export async function authStorageTokenSave({ token, refresh_token }: StorageAuthTokenProps): Promise<void> {
  await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, JSON.stringify({ token, refresh_token }));
}

export async function authStorageTokenGet() {
  let response = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE);
  const authStorage: StorageAuthTokenProps = response ? JSON.parse(response) : {};

  return authStorage;
}

export async function authStorageTokenRemove(): Promise<void> {
  await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE);
}
