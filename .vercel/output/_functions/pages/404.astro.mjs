import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_N-6LtxwP.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from '../chunks/DefaultLayout_BvB_jNW1.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "404" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-48 lg:py-48"> <div class="container flex flex-col items-center justify-center gap-8 md:gap-12 py-64 mx-auto"> <!-- <FuzzyText 
  baseIntensity={0.2} 
  hoverIntensity={0.5} 
  enableHover={true}
  client:load
  >Fathir</FuzzyText> --> <h1 class="text-4xl md:text-5xl">Page not found</h1> <a href="/" class="button button-primary rounded-pill">Go back to home</a> </div> </section> ` })}`;
}, "/home/user/FixPorto/src/pages/404.astro", void 0);

const $$file = "/home/user/FixPorto/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
