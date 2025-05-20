export const EnumStatus = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;
/**
 * EnumStatus is a TypeScript enum that represents the status of an operation.
 * It has four possible values: IDLE, LOADING, SUCCESS, and ERROR.
 * 
 * @enum {string}
 * @property {string} IDLE - The operation is idle.
 * @property {string} LOADING - The operation is loading.
 * @property {string} SUCCESS - The operation was successful.
 * @property {string} ERROR - The operation encountered an error.
 */
export type EnumStatus = typeof EnumStatus[keyof typeof EnumStatus];
