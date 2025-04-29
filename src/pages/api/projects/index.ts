import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import fs from 'fs/promises'
import path from 'path'

export const prerender = false

export const GET: APIRoute = async () => {
  try {
    const projects = await getCollection('projects')
    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error fetching projects:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch projects' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json()
    const { title, author, description, img, content, pubDate } = data

    // Validate required fields
    if (!title || !author || !description || !img || !content) {
      return new Response(JSON.stringify({ 
        error: 'Missing required fields',
        success: false 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    // Generate a URL-safe slug from the title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    // Generate a unique ID for the project
    const id = `${slug}-${Date.now()}`

    // Create the markdown content with proper escaping
    const markdownContent = `---
title: "${title.replace(/"/g, '\\"')}"
author: "${author.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
img: "${img}"
pubDate: "${pubDate || new Date().toISOString()}"
---

${content}`

    // Ensure the projects directory exists
    const projectsDir = path.join(process.cwd(), 'src/content/projects')
    await fs.mkdir(projectsDir, { recursive: true })

    // Write the file
    const filePath = path.join(projectsDir, `${id}.md`)
    await fs.writeFile(filePath, markdownContent, 'utf-8')

    console.log('Project created successfully:', id)
    return new Response(JSON.stringify({ 
      id, 
      success: true,
      message: 'Project created successfully' 
    }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error creating project:', error)
    return new Response(JSON.stringify({ 
      error: 'Failed to create project',
      success: false,
      details: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}

// Alias POST to post for compatibility
export const post = POST 