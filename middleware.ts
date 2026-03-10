import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export const runtime = 'nodejs'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Protect admin routes EXCEPT login and setup pages
  if (pathname.startsWith('/admin') && pathname !== '/admin/login' && pathname !== '/admin/setup') {
    const token = request.cookies.get('admin_token')?.value
    
    console.log('Middleware - Admin route:', pathname)
    console.log('Middleware - Token found:', !!token)
    console.log('Middleware - JWT_SECRET:', !!process.env.JWT_SECRET)
    
    if (!token) {
      console.log('Middleware - No token, redirecting to login')
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
    
    try {
      jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret')
      console.log('Middleware - Token verified successfully')
    } catch (error) {
      console.log('Middleware - Token verification failed:', (error as Error).message)
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }
  
  // Protect student routes
  if (pathname.startsWith('/student')) {
    const token = request.cookies.get('user_token')?.value
    
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    
    try {
      jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret')
    } catch (error) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/student/:path*']
}
