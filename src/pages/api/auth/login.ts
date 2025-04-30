import type { APIRoute } from 'astro'
import jwt from 'jsonwebtoken'
import { adminConfig } from '../../../config/admin'

// Mark as server-side rendered
export const prerender = false

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const body = await request.json()
    const { username, password } = body

    console.log('Login attempt:', { username, providedPassword: '***' })

    // Validate credentials
    if (username !== adminConfig.username || password !== adminConfig.password) {
      console.log('Login failed: Invalid credentials')
      return new Response(JSON.stringify({ 
        message: 'Invalid credentials',
        success: false 
      }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    // Generate JWT token
    const token = jwt.sign({ username }, adminConfig.jwtSecret, { expiresIn: '1d' })

    // Set cookie
    cookies.set('token', token, {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 // 1 day
    })

    console.log('Login successful for user:', username)
    return new Response(JSON.stringify({ 
      message: 'Login successful',
      success: true 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    return new Response(JSON.stringify({ 
      message: 'Internal server error',
      success: false 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

// Alias POST to post for compatibility
export const post = POST 