import type { APIRoute } from 'astro'

export const prerender = false

export const POST: APIRoute = async ({ cookies }) => {
  try {
    // Clear the authentication cookie
    cookies.delete('token', {
      path: '/',
    })

    return new Response(JSON.stringify({ message: 'Logged out successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error('Logout error:', error)
    return new Response(JSON.stringify({ message: 'Error during logout' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

// Alias POST to post for compatibility
export const post = POST 