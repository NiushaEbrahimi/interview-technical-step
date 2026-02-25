'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

interface LoginPayload {
  username: string
  password: string
  expiresInMins?: number
}

export async function loginAction({ username, password, expiresInMins = 60 }: LoginPayload) {
  try {
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, expiresInMins }),
      next: { revalidate: 0 },
    })

    if (!res.ok) {
      const error = await res.json()
      return { success: false, error: error.message || 'Login failed' }
    }

    const data = await res.json()
    
    const cookieStore = await cookies()
    cookieStore.set('accessToken', data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60,
      path: '/',
    })
    
    cookieStore.set('refreshToken', data.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })
    
    return { success: true, user: data }
  } catch (error) {
    console.error('Login error:', error)
    return { success: false, error: 'Network error' }
  }
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete('accessToken')
  cookieStore.delete('refreshToken')
  redirect('/login')
}

export async function getCurrentUserAction() {
  const cookieStore = await cookies()
  const token = cookieStore.get('accessToken')?.value
  
  if (!token) {
    redirect('/login')
  }
  
  try {
    const res = await fetch('https://dummyjson.com/auth/me', {
      headers: { 'Authorization': `Bearer ${token}` },
      next: { revalidate: 0 },
    })
    
    if (!res.ok) {
      if (res.status === 401) {
        cookieStore.delete('accessToken')
        cookieStore.delete('refreshToken')
      }
      redirect('/login')
    }
    
    return await res.json()
  } catch (error) {
    console.error('Failed to fetch user:', error)
    redirect('/login')
  }
}