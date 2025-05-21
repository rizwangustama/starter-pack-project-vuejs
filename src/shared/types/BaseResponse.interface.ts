export interface BaseResponse<T> {
  status: boolean,
  data: T,
  message: string,
}