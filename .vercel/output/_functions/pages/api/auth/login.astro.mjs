import jwt from 'jsonwebtoken';
export { renderers } from '../../../renderers.mjs';

const adminConfig = {
  username: process.env.ADMIN_USERNAME || "patir",
  password: process.env.ADMIN_PASSWORD || "patir",
  jwtSecret: process.env.JWT_SECRET || "your-super-secret-key-change-this-in-production"
};

const prerender = false;
const POST = async ({ request, cookies }) => {
  try {
    const body = await request.json();
    const { username, password } = body;
    console.log("Login attempt:", { username, providedPassword: "***" });
    if (username !== adminConfig.username || password !== adminConfig.password) {
      console.log("Login failed: Invalid credentials");
      return new Response(JSON.stringify({
        message: "Invalid credentials",
        success: false
      }), {
        status: 401,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const token = jwt.sign({ username }, adminConfig.jwtSecret, { expiresIn: "1d" });
    cookies.set("token", token, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24
      // 1 day
    });
    console.log("Login successful for user:", username);
    return new Response(JSON.stringify({
      message: "Login successful",
      success: true
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    return new Response(JSON.stringify({
      message: "Internal server error",
      success: false
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
  POST,
  post,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
