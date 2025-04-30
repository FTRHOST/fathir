import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CRL9CtYP.mjs';
import { manifest } from './manifest_C9JwbGcE.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/accessible-components.astro.mjs');
const _page3 = () => import('./pages/admin/dashboard.astro.mjs');
const _page4 = () => import('./pages/admin/editor.astro.mjs');
const _page5 = () => import('./pages/admin/login.astro.mjs');
const _page6 = () => import('./pages/admin/profile.astro.mjs');
const _page7 = () => import('./pages/admin/projects/new.astro.mjs');
const _page8 = () => import('./pages/admin/projects.astro.mjs');
const _page9 = () => import('./pages/api/auth/login.astro.mjs');
const _page10 = () => import('./pages/api/auth/logout.astro.mjs');
const _page11 = () => import('./pages/api/profile.astro.mjs');
const _page12 = () => import('./pages/api/projects/_id_.astro.mjs');
const _page13 = () => import('./pages/api/projects.astro.mjs');
const _page14 = () => import('./pages/api/upload.astro.mjs');
const _page15 = () => import('./pages/blog/_post_.astro.mjs');
const _page16 = () => import('./pages/blog/_---page_.astro.mjs');
const _page17 = () => import('./pages/markdown-page.astro.mjs');
const _page18 = () => import('./pages/mdx-page.astro.mjs');
const _page19 = () => import('./pages/portfolio/_project_.astro.mjs');
const _page20 = () => import('./pages/portfolio/_---page_.astro.mjs');
const _page21 = () => import('./pages/upload.astro.mjs');
const _page22 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.6.2_@types+node@22.14.1_jiti@1.21.7_lightningcss@1.29.3_rollup@4.40.0_sass@1.86_5cde3bf8b15593e61bb20e39f3e99683/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/accessible-components.astro", _page2],
    ["src/pages/admin/dashboard.astro", _page3],
    ["src/pages/admin/editor.astro", _page4],
    ["src/pages/admin/login.astro", _page5],
    ["src/pages/admin/profile.astro", _page6],
    ["src/pages/admin/projects/new.astro", _page7],
    ["src/pages/admin/projects/index.astro", _page8],
    ["src/pages/api/auth/login.ts", _page9],
    ["src/pages/api/auth/logout.ts", _page10],
    ["src/pages/api/profile.ts", _page11],
    ["src/pages/api/projects/[id].ts", _page12],
    ["src/pages/api/projects/index.ts", _page13],
    ["src/pages/api/upload.ts", _page14],
    ["src/pages/blog/[post].astro", _page15],
    ["src/pages/blog/[...page].astro", _page16],
    ["src/pages/markdown-page.md", _page17],
    ["src/pages/mdx-page.mdx", _page18],
    ["src/pages/portfolio/[project].astro", _page19],
    ["src/pages/portfolio/[...page].astro", _page20],
    ["src/pages/upload.astro", _page21],
    ["src/pages/index.astro", _page22]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2e8cd6c2-123c-4a37-a382-433433752c48",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
