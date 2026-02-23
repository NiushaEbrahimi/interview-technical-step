export type User = {
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  image: string,
  accessToken: string,
  refreshToken: string,
}

export type AuthResponse = {
  user: User
  token: string
}