import { g as getCollection } from '../../chunks/_astro_content_BXFH5y_D.mjs';
import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async () => {
  try {
    const projects = await getCollection("projects");
    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch projects" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { title, author, description, img, content, pubDate } = data;
    if (!title || !author || !description || !img || !content) {
      return new Response(JSON.stringify({
        error: "Missing required fields",
        success: false
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const id = `${slug}-${Date.now()}`;
    const markdownContent = `---
title: "${title.replace(/"/g, '\\"')}"
author: "${author.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
img: "${img}"
pubDate: "${pubDate || (/* @__PURE__ */ new Date()).toISOString()}"
---

${content}`;
    const projectsDir = path.join(process.cwd(), "src/content/projects");
    await fs.mkdir(projectsDir, { recursive: true });
    const filePath = path.join(projectsDir, `${id}.md`);
    await fs.writeFile(filePath, markdownContent, "utf-8");
    console.log("Project created successfully:", id);
    return new Response(JSON.stringify({
      id,
      success: true,
      message: "Project created successfully"
    }), {
      status: 201,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error creating project:", error);
    return new Response(JSON.stringify({
      error: "Failed to create project",
      success: false,
      details: error instanceof Error ? error.message : "Unknown error"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
const post = POST;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  post,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
