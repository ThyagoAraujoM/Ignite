import type { StatusType } from "src/@types/Status";

export type MealStorageDTO = {
  time: string;
  name: string;
  description: string;
  status: StatusType;
  id: string;
};
