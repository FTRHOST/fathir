import { a as createComponent, r as renderComponent, f as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_N-6LtxwP.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from '../../../chunks/DefaultLayout_BvB_jNW1.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const $$New = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Add New Project" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div class="max-w-2xl mx-auto"> <h1 class="text-2xl font-bold mb-8">Add New Project</h1> <div id="errorMessage" class="hidden mb-4 p-4 text-red-700 bg-red-100 rounded-lg"></div> <div id="successMessage" class="hidden mb-4 p-4 text-green-700 bg-green-100 rounded-lg"></div> <form id="newProjectForm" class="space-y-6"> <div> <label for="title" class="block text-sm font-medium text-gray-700">Title</label> <input type="text" id="title" name="title" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required> </div> <div> <label for="author" class="block text-sm font-medium text-gray-700">Author</label> <input type="text" id="author" name="author" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required> </div> <div> <label for="description" class="block text-sm font-medium text-gray-700">Description</label> <textarea id="description" name="description" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required></textarea> </div> <div> <label for="img" class="block text-sm font-medium text-gray-700">Cover Image URL</label> <input type="url" id="img" name="img" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required> </div> <div> <label for="content" class="block text-sm font-medium text-gray-700">Content (Markdown)</label> <textarea id="content" name="content" rows="10" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 font-mono" required></textarea> </div> <div class="flex justify-end space-x-4"> <a href="/admin/projects" class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
Cancel
</a> <button type="submit" id="submitButton" class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
Create Project
</button> </div> </form> </div> </div> ` })} ${renderScript($$result, "/home/user/FixPorto/src/pages/admin/projects/new.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/FixPorto/src/pages/admin/projects/new.astro", void 0);

const $$file = "/home/user/FixPorto/src/pages/admin/projects/new.astro";
const $$url = "/admin/projects/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
