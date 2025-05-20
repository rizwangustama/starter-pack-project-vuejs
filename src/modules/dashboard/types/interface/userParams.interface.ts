import type { User } from "./user.interface";

export interface UserParams extends User {
  data: any,
  message: string,
}