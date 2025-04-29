import type { APIRoute } from 'astro'
import fs from 'fs/promises'
import path from 'path'
import { SiteConfig } from '../../config/site'

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json() as SiteConfig

    // Validate required fields
    const requiredFields = ['name', 'title', 'description', 'email', 'heroTitle', 'heroDescription', 'footerText', 'author']
    const missingFields = requiredFields.filter(field => !data[field as keyof SiteConfig])

    if (missingFields.length > 0) {
      return new Response(JSON.stringify({
        error: `Missing required fields: ${missingFields.join(', ')}`,
        success: false
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Save to site.json
    const configPath = path.join(process.cwd(), 'src/config/site.json')
    await fs.writeFile(configPath, JSON.stringify(data, null, 2))

    return new Response(JSON.stringify({
      success: true,
      message: 'Profile settings saved successfully'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Save profile error:', error)
    return new Response(JSON.stringify({
      error: 'Failed to save profile settings',
      success: false,
      details: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

// Alias POST to post for compatibility
export const post = POST 