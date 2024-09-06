import type { StatusType } from "./Status";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      overview: undefined;
      newmeal: undefined;
      registratedMeal: {
        status: StatusType;
      };
    }
  }
}
