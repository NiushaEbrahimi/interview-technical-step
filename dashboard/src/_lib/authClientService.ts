'use client'

import { loginAction, logoutAction, getCurrentUserAction } from "@/_lib/authServerActions"

export interface User {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  image: string
  accessToken: string
  refreshToken: string
}

export interface AuthResponse {
  success: boolean
  error?: string
  user?: User
}

export const authAPI = {
  async login(username: string, password: string, expiresInMins = 60): Promise<AuthResponse> {
    const result = await loginAction({ username, password, expiresInMins })
    
    if (!result.success) {
      throw new Error(result.error || 'Login failed')
    }
    
    return result
  },

  async logout(): Promise<void> {
    await logoutAction()
  },

  async getCurrentUser(): Promise<User | null> {
    return await getCurrentUserAction()
  },


  isAuthenticated(): boolean {
    if (typeof document === 'undefined') return false
    return document.cookie.includes('accessToken=')
  }
}