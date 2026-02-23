
import { User } from './types/types'

export const authAPI = {
  async login(username: string, password: string, expiresInMins = 60) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, expiresInMins }),
      credentials: 'include',
    })
    
    if (!res.ok) throw new Error('Invalid credentials')
    const data = await res.json()
    
    localStorage.setItem('accessToken', data.accessToken)
    localStorage.setItem('refreshToken', data.refreshToken)
    localStorage.setItem('user', JSON.stringify(data))
    
    return data as User
  },

  async getCurrentUser(): Promise<User | null> {
    const token = localStorage.getItem('accessToken')
    if (!token) return null

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
      })
      
      if (!res.ok) return null
      return await res.json()
    } catch {
      return null
    }
  },

  async logout() {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')
  },

  isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false
    return !!localStorage.getItem('accessToken')
  }
}