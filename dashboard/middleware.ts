import { NextRequest, NextResponse } from 'next/server'

const protectedRoutes = ['/dashboard', '/users', '/products']
const publicRoutes = ['/login', '/']

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const token = req.cookies.get('accessToken')?.value || 
                req.headers.get('authorization')?.replace('Bearer ', '')

  const isProtectedRoute = protectedRoutes.some(route => 
    path.startsWith(route)
  )
  const isPublicRoute = publicRoutes.includes(path)

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (isPublicRoute && path === '/login' && token) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}