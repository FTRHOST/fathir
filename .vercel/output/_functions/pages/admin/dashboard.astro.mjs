import { a as createComponent, r as renderComponent, f as renderScript, b as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_N-6LtxwP.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from '../../chunks/DefaultLayout_BvB_jNW1.mjs';
import { g as getCollection } from '../../chunks/_astro_content_BXFH5y_D.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Admin Dashboard" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div class="flex justify-between items-center mb-8"> <h1 class="text-2xl font-bold">Admin Dashboard</h1> <button id="logoutBtn" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
Logout
</button> </div> <div id="errorMessage" class="text-red-500 text-sm mb-4 hidden"></div> <!-- Stats Cards --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> <div class="bg-white rounded-lg shadow p-6"> <h3 class="text-lg font-semibold mb-2">Total Projects</h3> <p class="text-3xl font-bold text-indigo-600"> ${await getCollection("projects").then((projects) => projects.length)} </p> </div> <div class="bg-white rounded-lg shadow p-6"> <h3 class="text-lg font-semibold mb-2">Recent Projects</h3> <p class="text-3xl font-bold text-green-600"> ${await getCollection("projects").then(
    (projects) => projects.filter((p) => new Date(p.data.pubDate) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1e3)).length
  )} </p> </div> <div class="bg-white rounded-lg shadow p-6"> <h3 class="text-lg font-semibold mb-2">Total Views</h3> <p class="text-3xl font-bold text-blue-600">0</p> </div> </div> <!-- Quick Actions --> <div class="bg-white rounded-lg shadow p-6 mb-8"> <h2 class="text-xl font-bold mb-4">Quick Actions</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> <a href="/admin/projects/new" class="p-4 bg-indigo-100 rounded-lg hover:bg-indigo-200 text-center"> <span class="block text-lg font-semibold">Add New Project</span> </a> <a href="/admin/projects" class="p-4 bg-green-100 rounded-lg hover:bg-green-200 text-center"> <span class="block text-lg font-semibold">Manage Projects</span> </a> <a href="/admin/settings" class="p-4 bg-yellow-100 rounded-lg hover:bg-yellow-200 text-center"> <span class="block text-lg font-semibold">Settings</span> </a> <a href="/admin/profile" class="p-4 bg-purple-100 rounded-lg hover:bg-purple-200 text-center"> <span class="block text-lg font-semibold">Profile</span> </a> </div> </div> <!-- Recent Projects --> <div class="bg-white rounded-lg shadow p-6"> <h2 class="text-xl font-bold mb-4">Recent Projects</h2> <div class="overflow-x-auto"> <table class="min-w-full divide-y divide-gray-200"> <thead> <tr> <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Title
</th> <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Author
</th> <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Date
</th> <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Actions
</th> </tr> </thead> <tbody class="bg-white divide-y divide-gray-200"> ${await getCollection("projects").then((projects) => projects.slice(0, 5)).then((projects) => projects.map((project) => renderTemplate`<tr> <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> ${project.data.title} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> ${project.data.author} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> ${new Date(project.data.pubDate).toLocaleDateString()} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> <a${addAttribute(`/admin/projects/edit/${project.id}`, "href")} class="text-indigo-600 hover:text-indigo-900 mr-3">
Edit
</a> <button class="text-red-600 hover:text-red-900"${addAttribute(`deleteProject('${project.id}')`, "onclick")}>
Delete
</button> </td> </tr>`))} </tbody> </table> </div> </div> </div> ` })} ${renderScript($$result, "/home/user/FixPorto/src/pages/admin/dashboard.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/FixPorto/src/pages/admin/dashboard.astro", void 0);

const $$file = "/home/user/FixPorto/src/pages/admin/dashboard.astro";
const $$url = "/admin/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
