export type UserType = {
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  image: string,
  accessToken: string,
  refreshToken: string,
}

export interface AuthResponse {
  success: boolean
  error?: string
  user?: UserType
}