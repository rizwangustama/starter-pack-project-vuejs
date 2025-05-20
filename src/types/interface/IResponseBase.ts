import type { EnumStatus } from "../enum/EnumStatus";

export interface IResponseBase {
  status: EnumStatus;
  message: string;
  data?: any;
  error?: string;
  [key: string]: any; // Allow additional properties
}