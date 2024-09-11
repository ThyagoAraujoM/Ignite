import type { MealStorageDTO } from "@storage/meal/mealStorageDTO";
import type { StatusType } from "./Status";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      overview: undefined;
      newmeal:
        | {
            meal: MealStorageDTO;
          }
        | undefined;
      registratedMeal: {
        status: StatusType;
      };
      meal: {
        meal: MealStorageDTO;
      };
    }
  }
}
