import type { APIRoute } from 'astro'
import fs from 'fs/promises'
import path from 'path'

export const DELETE: APIRoute = async ({ params }) => {
  try {
    const { id } = params
    const filePath = path.join(process.cwd(), 'src/content/projects', `${id}.md`)
    
    // Check if file exists
    try {
      await fs.access(filePath)
    } catch {
      return new Response(JSON.stringify({ error: 'Project not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    // Delete the file
    await fs.unlink(filePath)

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete project' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}

export const PUT: APIRoute = async ({ params, request }) => {
  try {
    const { id } = params
    const data = await request.json()
    const { title, author, description, img, content, pubDate } = data

    const filePath = path.join(process.cwd(), 'src/content/projects', `${id}.md`)
    
    // Check if file exists
    try {
      await fs.access(filePath)
    } catch {
      return new Response(JSON.stringify({ error: 'Project not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    // Create the markdown content
    const markdownContent = `---
title: '${title}'
author: '${author}'
description: '${description}'
img: '${img}'
pubDate: '${pubDate}'
---

${content}`

    // Update the file
    await fs.writeFile(filePath, markdownContent)

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update project' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
} 