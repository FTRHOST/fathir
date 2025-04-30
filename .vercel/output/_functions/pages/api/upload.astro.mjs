import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!file) {
      return new Response(JSON.stringify({
        error: "No file uploaded",
        success: false
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const allowedTypes = ["image/png", "image/svg+xml"];
    if (!allowedTypes.includes(file.type)) {
      return new Response(JSON.stringify({
        error: "Only PNG and SVG files are allowed",
        success: false
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const uploadsDir = path.join(process.cwd(), "public/uploads");
    await fs.mkdir(uploadsDir, { recursive: true });
    const extension = file.type === "image/svg+xml" ? ".svg" : ".png";
    const filename = `logo-${Date.now()}${extension}`;
    const filepath = path.join(uploadsDir, filename);
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.writeFile(filepath, buffer);
    return new Response(JSON.stringify({
      success: true,
      url: `/uploads/${filename}`,
      message: "File uploaded successfully"
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Upload error:", error);
    return new Response(JSON.stringify({
      error: "Failed to upload file",
      success: false,
      details: error instanceof Error ? error.message : "Unknown error"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const post = POST;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  post,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
