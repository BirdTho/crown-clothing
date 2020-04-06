
export interface User {
  id: string,
  displayName: string,
  email: string,
  createdAt: {
    seconds: number,
    nanoseconds: number,
  }
}