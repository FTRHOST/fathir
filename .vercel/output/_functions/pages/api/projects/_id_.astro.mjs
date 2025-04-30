import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../../renderers.mjs';

const DELETE = async ({ params }) => {
  try {
    const { id } = params;
    const filePath = path.join(process.cwd(), "src/content/projects", `${id}.md`);
    try {
      await fs.access(filePath);
    } catch {
      return new Response(JSON.stringify({ error: "Project not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    await fs.unlink(filePath);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to delete project" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
const PUT = async ({ params, request }) => {
  try {
    const { id } = params;
    const data = await request.json();
    const { title, author, description, img, content, pubDate } = data;
    const filePath = path.join(process.cwd(), "src/content/projects", `${id}.md`);
    try {
      await fs.access(filePath);
    } catch {
      return new Response(JSON.stringify({ error: "Project not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const markdownContent = `---
title: '${title}'
author: '${author}'
description: '${description}'
img: '${img}'
pubDate: '${pubDate}'
---

${content}`;
    await fs.writeFile(filePath, markdownContent);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to update project" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
