import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderSlot } from './astro/server_N-6LtxwP.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from './DefaultLayout_BvB_jNW1.mjs';

const $$Astro = createAstro("https://accessible-astro.netlify.app");
const $$MarkdownLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="space-content my-12"> ${renderSlot($$result2, $$slots["default"])} </div> </div> ` })}`;
}, "/home/user/FixPorto/src/layouts/MarkdownLayout.astro", void 0);

export { $$MarkdownLayout as $ };
