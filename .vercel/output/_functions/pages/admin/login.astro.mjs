import { a as createComponent, r as renderComponent, f as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_N-6LtxwP.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from '../../chunks/DefaultLayout_BvB_jNW1.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Admin Login" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-8"> <h1 class="text-2xl font-bold mb-6 text-center">Admin Login</h1> <form id="loginForm" class="space-y-4"> <div> <label for="username" class="block text-sm font-medium text-gray-700">Username</label> <input type="text" id="username" name="username" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700">Password</label> <input type="password" id="password" name="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required> </div> <div id="errorMessage" class="text-red-500 text-sm hidden"></div> <button type="submit" id="submitButton" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
Login
</button> </form> </div> </div> ` })} ${renderScript($$result, "/home/user/FixPorto/src/pages/admin/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/FixPorto/src/pages/admin/login.astro", void 0);

const $$file = "/home/user/FixPorto/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
