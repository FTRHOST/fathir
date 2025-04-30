import { c as createAstro, a as createComponent, g as addAttribute, f as renderScript, b as renderTemplate, r as renderComponent, m as maybeRenderHead, d as renderSlot, s as renderHead, t as renderTransition } from './astro/server_N-6LtxwP.mjs';
import 'kleur/colors';
/* empty css                                 */
import 'clsx';
/* empty css                         */
import { j as $$DarkMode, s as $$SkipLink, a as $$Icon } from './Icon_CHtIz3X9.mjs';
import { $ as $$Image } from './_astro_assets_s-QfdN4Z.mjs';
/* empty css                                   */

const $$Astro$3 = createAstro("https://accessible-astro.netlify.app");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/user/FixPorto/node_modules/.pnpm/astro@5.6.2_@types+node@22.14.1_jiti@1.21.7_lightningcss@1.29.3_rollup@4.40.0_sass@1.86_5cde3bf8b15593e61bb20e39f3e99683/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/FixPorto/node_modules/.pnpm/astro@5.6.2_@types+node@22.14.1_jiti@1.21.7_lightningcss@1.29.3_rollup@4.40.0_sass@1.86_5cde3bf8b15593e61bb20e39f3e99683/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$2 = createAstro("https://accessible-astro.netlify.app");
const $$SiteMeta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SiteMeta;
  const { title, description, url, image, author } = Astro2.props;
  let subtitle = "Fathir";
  return renderTemplate`<!-- general meta --><meta name="title"${addAttribute(`${title} - ${subtitle}`, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(author, "content")}><!-- open graph --><meta property="og:title"${addAttribute(`${title} - ${subtitle}`, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(url, "content")}><meta property="og:image"${addAttribute(`${Astro2.site}${image}`, "content")}><!-- twitter card --><!-- page title --><title>${title} - ${subtitle}</title>${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}`;
}, "/home/user/FixPorto/src/components/SiteMeta.astro", void 0);

const $$ResponsiveToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="responsive-toggle" aria-expanded="false" aria-label="Open menu navigation" data-astro-cid-3qc6hvr2> <svg width="26" height="21" aria-hidden="true" fill="var(--action-color)" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3qc6hvr2><path d="M2 1.667h24m-24 8h24m-24 8h24" stroke="var(--action-color)" stroke-width="2.667" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3qc6hvr2></path></svg> </button> ${renderScript($$result, "/home/user/FixPorto/src/components/ResponsiveToggle.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/user/FixPorto/src/components/ResponsiveToggle.astro", void 0);

const logo = new Proxy({"src":"/_astro/logo.BKirt3i6.jpg","width":288,"height":288,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/FixPorto/src/assets/img/logo.jpg";
							}
							
							return target[name];
						}
					});

const defaultSiteConfig = {
  name: "Fathir",
  title: "Fathir - Personal Website",
  description: "Welcome to my personal website where I share my thoughts and projects.",
  logo: "/assets/img/logo.jpg",
  email: "contact@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  heroTitle: "Welcome to My Website",
  heroDescription: "I am a passionate developer and writer.",
  footerText: "© 2024 Fathir. All rights reserved.",
  author: "Fathir"
};

const $$Astro$1 = createAstro("https://accessible-astro.netlify.app");
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  let currentConfig = defaultSiteConfig;
  try {
    const config = await import('./site_HsS9EckJ.mjs');
    currentConfig = { ...defaultSiteConfig, ...config.default };
  } catch (error) {
  }
  return renderTemplate`<!-- // Main navigation container.  It's desktop by default and includes padding. -->${maybeRenderHead()}<div id="main-navigation" class="is-desktop py-8"> <div class="container"> <!-- {/* Logo and site title */} --> <a href="/" class="flex items-center gap-2 !no-underline"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "Your Logo", "width": "37", "height": "27", "class": "circular-image" })} <span class="font-bold">${currentConfig.name}</span> </a> <!-- {/* Wrapper for desktop menu, dark mode toggle, and responsive toggle */} --> <div class="wrapper"> <!-- {/* Desktop navigation menu */} --> <nav class="desktop-menu" aria-label="Main navigation desktop"> <ul class="menu"> <!-- {/* Menu items will be injected here via a slot */} --> ${renderSlot($$result, $$slots["default"])} </ul> </nav> <!-- {/* Dark mode toggle button */} --> ${renderComponent($$result, "DarkMode", $$DarkMode, {})} <!-- {/* Responsive menu toggle button (only visible on mobile) */} --> ${renderComponent($$result, "ResponsiveToggle", $$ResponsiveToggle, {})} </div> <!-- {/* Mobile navigation menu (hidden by default, shown by JavaScript) */} --> <nav class="mobile-menu" aria-label="Main navigation mobile"> <ul class="menu"> <!-- {/* Menu items will be injected here via a slot */} --> ${renderSlot($$result, $$slots["default"])} </ul> </nav> </div> </div> <!-- {/* JavaScript for handling menu behavior */} --> ${renderScript($$result, "/home/user/FixPorto/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/user/FixPorto/src/components/Navigation.astro", void 0);

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  let currentConfig = defaultSiteConfig;
  try {
    const config = await import('./site_HsS9EckJ.mjs');
    currentConfig = { ...defaultSiteConfig, ...config.default };
  } catch (error) {
  }
  return renderTemplate`${maybeRenderHead()}<header> ${renderComponent($$result, "SkipLink", $$SkipLink, {})} ${renderComponent($$result, "Navigation", $$Navigation, {}, { "default": async ($$result2) => renderTemplate` <li class="menu-item"> <a href="/">Home</a> </li>  <li class="menu-item"> <a href="/portfolio/">Project</a> </li>  <li class="menu-item type-icon"> <a href="https://g.dev/fathiralfaruq" title="Go to the Google Developer"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:google" })} </a> </li> <li class="menu-item type-icon"> <a${addAttribute(currentConfig.github, "href")} title="Go to the GitHub page"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ion:logo-github" })} </a> </li> <li class="menu-item type-icon"> <a${addAttribute(currentConfig.linkedin, "href")} title="Go to the LinkedIn page"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:linkedin" })} </a> </li> ` })} </header> `;
}, "/home/user/FixPorto/src/components/Header.astro", void 0);

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  let currentConfig = defaultSiteConfig;
  try {
    const config = await import('./site_HsS9EckJ.mjs');
    currentConfig = { ...defaultSiteConfig, ...config.default };
  } catch (error) {
  }
  return renderTemplate`${maybeRenderHead()}<section class="container py-24 md:py-48"> <footer class="w-[calc(100%-32px)] md:w-[calc(100%-80px)] text-sm relative text-gray-500 bg-black p-6 md:p-12 rounded-3xl m-4 md:m-10 max-w-[1600px] xl:mx-auto"> <div class="container py-24 md:py-48"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> <div class="col-span-1"> <a href="/" class="text-xl font-bold"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": currentConfig.name, "width": "37", "height": "27", "class": "circular-image" })} <span class="font-bold">${currentConfig.name}</span> </a> <p class="text-gray-400 text-justify"> ${currentConfig.description} </p> </div> <div class="col-span-1"> <h4 class="font-bold mb-4">Quick Links</h4> <ul> <li class="mb-2"><a href="/" class="hover:text-gray-300">Home</a></li> <li class="mb-2"><a href="/portfolio/" class="hover:text-gray-300">Project</a></li> <!-- <li class="mb-2"><a href="#" class="hover:text-gray-300">Contact</a></li> --> </ul> </div> <div class="col-span-1"> <h4 class="font-bold mb-4">Social</h4> <ul> <li class="mb-2"> <a${addAttribute(currentConfig.github, "href")} class="hover:text-gray-300 flex items-center gap-2">${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:github", "class": "h-5 w-5" })} GitHub</a> </li> <li class="mb-2"> <a href="https://g.dev/fathiralfaruq" class="hover:text-gray-300 flex items-center gap-2">${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:google", "class": "h-5 w-5" })} Google Dev</a> </li> <li class="mb-2"> <a${addAttribute(currentConfig.linkedin, "href")} class="hover:text-gray-300 flex items-center gap-2">${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:linkedin", "class": "h-5 w-5" })} Linkedin</a> </li> <li class="mb-2"> <a${addAttribute(`mailto:${currentConfig.email}`, "href")} class="hover:text-gray-300 flex items-center gap-2">${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:email", "class": "h-5 w-5" })} Email</a> </li> </ul> </div> <div class="col-span-1"> <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4FEKEr1K6NR3ws5DhJQorM?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
      </iframe> </div> </div> </div> <div class="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center"> <p class="text-gray-400 text-sm"> ${currentConfig.footerText} </p> </div> </footer> </section>`;
}, "/home/user/FixPorto/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://accessible-astro.netlify.app");
const $$DefaultLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DefaultLayout;
  const {
    title = "Astro",
    description = "Fathir Website",
    url = Astro2.site,
    image = "social-preview-image.png",
    author = "Fathir"
  } = Astro2.props;
  return renderTemplate`<html lang="en" dir="ltr"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><!-- favicon --><!-- <link rel="icon" type="image/svg+xml" href="/favicon.ico" /> --><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">${renderComponent($$result, "SiteMeta", $$SiteMeta, { "title": title, "description": description.substring(0, 100), "url": url, "image": image, "author": author })}${renderHead()}</head> <body> <!-- <FadeContent blur={true} duration={100} easing="ease-out" initialOpacity={0} client:load> --> <!-- <AnimatedContent
      distance={150}
      direction="horizontal"
      reverse={false}
      config={{ tension: 80, friction: 20 }}
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
      client:load
    > --> ${renderComponent($$result, "Header", $$Header, {})} <main id="main-content"${addAttribute(renderTransition($$result, "o3d252m2"), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} <!-- </FadeContent> --> <!-- </AnimatedContent> -->  </body> </html>`;
}, "/home/user/FixPorto/src/layouts/DefaultLayout.astro", "self");

export { $$DefaultLayout as $, defaultSiteConfig as d, logo as l };
