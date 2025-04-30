import { a as createComponent, r as renderComponent, f as renderScript, b as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_N-6LtxwP.mjs';
import 'kleur/colors';
import { d as defaultSiteConfig, $ as $$DefaultLayout, l as logo } from '../../chunks/DefaultLayout_BvB_jNW1.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$Profile = createComponent(async ($$result, $$props, $$slots) => {
  let currentConfig = defaultSiteConfig;
  try {
    const config = await import('../../chunks/site_HsS9EckJ.mjs');
    currentConfig = { ...defaultSiteConfig, ...config.default };
  } catch (error) {
  }
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Profile Settings" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div class="max-w-2xl mx-auto"> <h1 class="text-2xl font-bold mb-8">Profile Settings</h1> <div id="errorMessage" class="hidden mb-4 p-4 text-red-700 bg-red-100 rounded-lg"></div> <div id="successMessage" class="hidden mb-4 p-4 text-green-700 bg-green-100 rounded-lg"></div> <form id="profileForm" class="space-y-6"> <div class="grid grid-cols-1 gap-6"> <!-- Basic Information --> <div class="bg-white p-6 rounded-lg shadow"> <h2 class="text-lg font-semibold mb-4">Basic Information</h2> <div class="space-y-4"> <div> <label for="name" class="block text-sm font-medium text-gray-700">Name</label> <input type="text" id="name" name="name"${addAttribute(currentConfig.name, "value")} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required> </div> <div> <label for="title" class="block text-sm font-medium text-gray-700">Website Title</label> <input type="text" id="title" name="title"${addAttribute(currentConfig.title, "value")} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required> </div> <div> <label for="description" class="block text-sm font-medium text-gray-700">Website Description</label> <textarea id="description" name="description" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required>${currentConfig.description}</textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Logo</label> <div class="flex items-center space-x-4"> <img id="logoPreview"${addAttribute(logo, "src")} alt="Logo Preview" class="h-16 w-16 object-contain border rounded p-1"> <div class="flex-1"> <input type="file" id="logoFile" accept=".png,.jpg,.jpeg,.svg" class="hidden"> <input type="hidden" id="logo" name="logo"${addAttribute(currentConfig.logo, "value")}> <button type="button" id="uploadButton" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
Upload New Logo
</button> <p class="mt-1 text-sm text-gray-500">PNG, JPG, or SVG only. Will be displayed at 32x32.</p> </div> </div> </div> </div> </div> <!-- Contact Information --> <div class="bg-white p-6 rounded-lg shadow"> <h2 class="text-lg font-semibold mb-4">Contact Information</h2> <div class="space-y-4"> <div> <label for="email" class="block text-sm font-medium text-gray-700">Email</label> <input type="email" id="email" name="email"${addAttribute(currentConfig.email, "value")} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required> </div> <div> <label for="github" class="block text-sm font-medium text-gray-700">GitHub URL</label> <input type="url" id="github" name="github"${addAttribute(currentConfig.github, "value")} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"> </div> <div> <label for="linkedin" class="block text-sm font-medium text-gray-700">LinkedIn URL</label> <input type="url" id="linkedin" name="linkedin"${addAttribute(currentConfig.linkedin, "value")} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"> </div> </div> </div> <!-- Website Content --> <div class="bg-white p-6 rounded-lg shadow"> <h2 class="text-lg font-semibold mb-4">Website Content</h2> <div class="space-y-4"> <div> <label for="heroTitle" class="block text-sm font-medium text-gray-700">Hero Title</label> <input type="text" id="heroTitle" name="heroTitle"${addAttribute(currentConfig.heroTitle, "value")} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required> </div> <div> <label for="heroDescription" class="block text-sm font-medium text-gray-700">Hero Description</label> <textarea id="heroDescription" name="heroDescription" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required>${currentConfig.heroDescription}</textarea> </div> <div> <label for="footerText" class="block text-sm font-medium text-gray-700">Footer Text</label> <input type="text" id="footerText" name="footerText"${addAttribute(currentConfig.footerText, "value")} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required> </div> </div> </div> </div> <div class="flex justify-end space-x-4"> <button type="submit" id="submitButton" class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
Save Changes
</button> </div> </form> </div> </div> ` })} ${renderScript($$result, "/home/user/FixPorto/src/pages/admin/profile.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/FixPorto/src/pages/admin/profile.astro", void 0);

const $$file = "/home/user/FixPorto/src/pages/admin/profile.astro";
const $$url = "/admin/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Profile,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
