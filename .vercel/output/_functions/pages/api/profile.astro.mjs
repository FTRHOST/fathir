import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const requiredFields = ["name", "title", "description", "email", "heroTitle", "heroDescription", "footerText", "author"];
    const missingFields = requiredFields.filter((field) => !data[field]);
    if (missingFields.length > 0) {
      return new Response(JSON.stringify({
        error: `Missing required fields: ${missingFields.join(", ")}`,
        success: false
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const configPath = path.join(process.cwd(), "src/config/site.json");
    await fs.writeFile(configPath, JSON.stringify(data, null, 2));
    return new Response(JSON.stringify({
      success: true,
      message: "Profile settings saved successfully"
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Save profile error:", error);
    return new Response(JSON.stringify({
      error: "Failed to save profile settings",
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
