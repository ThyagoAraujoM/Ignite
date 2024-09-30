import type { UserDTO } from "@dtos/UserDTO";
import { createContext, type ReactNode } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
};

type AuthContentProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContentProviderProps) {
  return (
    <AuthContext.Provider
      value={{
        user: {
          id: "teste",
          avatar: "ts",
          email: "tste",
          name: "teste",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
