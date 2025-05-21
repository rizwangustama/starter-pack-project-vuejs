export interface DataResponse<T> {
  data: T,
  paggination: string,
  totalPage: number,
}