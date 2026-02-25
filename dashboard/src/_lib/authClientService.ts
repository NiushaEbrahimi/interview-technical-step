'use client'

import { User, AuthResponse } from "./types"
import { loginAction, logoutAction, getCurrentUserAction } from "@/_lib/authServerActions"

export async function login(username: string, password: string, expiresInMins = 60): Promise<AuthResponse> {
  const result = await loginAction({ username, password, expiresInMins })
  
  if (!result.success) {
    throw new Error(result.error || 'Login failed')
  }
  
  return result
}

export async function logout(): Promise<void> {
  await logoutAction()
}

export async function getCurrentUser(): Promise<User | null> {
  return await getCurrentUserAction()
}


export function isAuthenticated(): boolean {
  if (typeof document === 'undefined') return false
  return document.cookie.includes('accessToken=')
}
