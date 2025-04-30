import { a as createComponent, r as renderComponent, f as renderScript, b as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_N-6LtxwP.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from '../../chunks/DefaultLayout_BvB_jNW1.mjs';
import { g as getCollection } from '../../chunks/_astro_content_BXFH5y_D.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Manage Projects" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div class="flex justify-between items-center mb-8"> <h1 class="text-2xl font-bold">Manage Projects</h1> <a href="/admin/projects/new" class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
Add New Project
</a> </div> <!-- Projects Table --> <div class="bg-white rounded-lg shadow overflow-hidden"> <table class="min-w-full divide-y divide-gray-200"> <thead> <tr> <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Title
</th> <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Author
</th> <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Date
</th> <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Status
</th> <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Actions
</th> </tr> </thead> <tbody class="bg-white divide-y divide-gray-200"> ${await getCollection("projects").then(
    (projects) => projects.map((project) => renderTemplate`<tr> <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> ${project.data.title} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> ${project.data.author} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> ${new Date(project.data.pubDate).toLocaleDateString()} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
Published
</span> </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> <a${addAttribute(`/admin/projects/edit/${project.id}`, "href")} class="text-indigo-600 hover:text-indigo-900 mr-3">
Edit
</a> <button class="text-red-600 hover:text-red-900"${addAttribute(`deleteProject('${project.id}')`, "onclick")}>
Delete
</button> </td> </tr>`)
  )} </tbody> </table> </div> </div> ` })} ${renderScript($$result, "/home/user/FixPorto/src/pages/admin/projects/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/FixPorto/src/pages/admin/projects/index.astro", void 0);

const $$file = "/home/user/FixPorto/src/pages/admin/projects/index.astro";
const $$url = "/admin/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
