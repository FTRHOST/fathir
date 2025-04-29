import type { MiddlewareHandler } from 'astro'
import jwt from 'jsonwebtoken'
import { adminConfig } from '../config/admin'

export const onRequest: MiddlewareHandler = async ({ request, redirect }, next) => {
  // Skip auth for login page and API endpoints
  if (
    request.url.includes('/admin/login') ||
    request.url.includes('/api/auth/login') ||
    request.url.includes('/api/auth/logout')
  ) {
    return next()
  }

  // Check if the request is for admin pages
  if (request.url.includes('/admin')) {
    const token = request.cookies.get('token')?.value

    if (!token) {
      return redirect('/admin/login')
    }

    try {
      // Verify token
      jwt.verify(token, adminConfig.jwtSecret)
      return next()
    } catch (error) {
      console.error('Auth error:', error)
      return redirect('/admin/login')
    }
  }

  return next()
} 