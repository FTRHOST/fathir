import { a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate, c as createAstro, d as renderSlot, g as addAttribute } from '../chunks/astro/server_N-6LtxwP.mjs';
import 'kleur/colors';
import { d as defaultSiteConfig, $ as $$DefaultLayout } from '../chunks/DefaultLayout_BvB_jNW1.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
/* empty css                                 */
import { a as $$Icon, b as $$Accordion, c as $$AccordionItem } from '../chunks/Icon_CHtIz3X9.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const FadeContent = ({
  children,
  blur = false,
  duration = 1e3,
  easing = "ease-out",
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = ""
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(element);
          setTimeout(() => {
            setInView(true);
          }, delay);
        }
      },
      { threshold }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, delay]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className,
      style: {
        opacity: inView ? 1 : initialOpacity,
        transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
        filter: blur ? inView ? "blur(0px)" : "blur(10px)" : "none"
      },
      children
    }
  );
};

function DecryptedText({
  text,
  speed = 60,
  maxIterations = 10,
  sequential = true,
  revealDirection = "start",
  useOriginalCharsOnly = true,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "view",
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(/* @__PURE__ */ new Set());
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    let interval;
    let currentIteration = 0;
    const getNextIndex = (revealedSet) => {
      const textLength = text.length;
      switch (revealDirection) {
        case "start":
          return revealedSet.size;
        case "end":
          return textLength - 1 - revealedSet.size;
        case "center": {
          const middle = Math.floor(textLength / 2);
          const offset = Math.floor(revealedSet.size / 2);
          const nextIndex = revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;
          if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
            return nextIndex;
          }
          for (let i = 0; i < textLength; i++) {
            if (!revealedSet.has(i)) return i;
          }
          return 0;
        }
        default:
          return revealedSet.size;
      }
    };
    const availableChars = useOriginalCharsOnly ? Array.from(new Set(text.split(""))).filter((char) => char !== " ") : characters.split("");
    const shuffleText = (originalText, currentRevealed) => {
      if (useOriginalCharsOnly) {
        const positions = originalText.split("").map((char, i) => ({
          char,
          isSpace: char === " ",
          index: i,
          isRevealed: currentRevealed.has(i)
        }));
        const nonSpaceChars = positions.filter((p) => !p.isSpace && !p.isRevealed).map((p) => p.char);
        for (let i = nonSpaceChars.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]];
        }
        let charIndex = 0;
        return positions.map((p) => {
          if (p.isSpace) return " ";
          if (p.isRevealed) return originalText[p.index];
          return nonSpaceChars[charIndex++];
        }).join("");
      } else {
        return originalText.split("").map((char, i) => {
          if (char === " ") return " ";
          if (currentRevealed.has(i)) return originalText[i];
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        }).join("");
      }
    };
    if (isHovering) {
      setIsScrambling(true);
      interval = setInterval(() => {
        setRevealedIndices((prevRevealed) => {
          if (sequential) {
            if (prevRevealed.size < text.length) {
              const nextIndex = getNextIndex(prevRevealed);
              const newRevealed = new Set(prevRevealed);
              newRevealed.add(nextIndex);
              setDisplayText(shuffleText(text, newRevealed));
              return newRevealed;
            } else {
              clearInterval(interval);
              setIsScrambling(false);
              return prevRevealed;
            }
          } else {
            setDisplayText(shuffleText(text, prevRevealed));
            currentIteration++;
            if (currentIteration >= maxIterations) {
              clearInterval(interval);
              setIsScrambling(false);
              setDisplayText(text);
            }
            return prevRevealed;
          }
        });
      }, speed);
    } else {
      setDisplayText(text);
      setRevealedIndices(/* @__PURE__ */ new Set());
      setIsScrambling(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovering, text, speed, maxIterations, sequential, revealDirection, characters, useOriginalCharsOnly]);
  useEffect(() => {
    if (animateOn !== "view") return;
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsHovering(true);
          setHasAnimated(true);
        }
      });
    };
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [animateOn, hasAnimated]);
  const hoverProps = animateOn === "hover" ? {
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false)
  } : {};
  return /* @__PURE__ */ jsxs(
    motion.span,
    {
      ref: containerRef,
      className: `inline-block whitespace-pre-wrap ${parentClassName}`,
      ...hoverProps,
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: displayText }),
        /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: displayText.split("").map((char, index) => {
          const isRevealedOrDone = revealedIndices.has(index) || !isScrambling || !isHovering;
          return /* @__PURE__ */ jsx("span", { className: isRevealedOrDone ? className : encryptedClassName, children: char }, index);
        }) })
      ]
    }
  );
}

const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  let currentConfig = defaultSiteConfig;
  try {
    const config = await import('../chunks/site_HsS9EckJ.mjs');
    currentConfig = { ...defaultSiteConfig, ...config.default };
  } catch (error) {
  }
  return renderTemplate`${maybeRenderHead()}<section class="py-24 lg:py-48" data-astro-cid-bbe6dxrz> <!-- Section with padding top and bottom (responsive) --> <div class="container w-full sm:max-w-5xl sm:flex-1 flex flex-col gap-8 sm:items-center pt-32 lg:pt-16 z-10 opacity-0" style="opacity: 1;" data-astro-cid-bbe6dxrz> <!-- Container to center content --> ${renderComponent($$result, "FadeContent", FadeContent, { "blur": true, "duration": 250, "easing": "ease-out", "initialOpacity": 0, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/FixPorto/src/components/FadeContent/FadeContent", "client:component-export": "default", "data-astro-cid-bbe6dxrz": true }, { "default": async ($$result2) => renderTemplate` <div class="relative flex flex-col justify-center items-center sm:text-center pt-8 z-10 overflow-x-clip" data-astro-cid-bbe6dxrz> <!-- Flex container with column direction, center alignment, responsive start alignment --> <h1 class="text-center text-7xl font-display sm:text-7xl lg:text-8xl inline-block  mb-7 leading-[0.99] tracking-[-1.44px] lg:tracking-[-3.72px] max-w-sm sm:max-w-lg lg:max-w-4xl" data-astro-cid-bbe6dxrz> <!-- Heading 1 with center alignment, large text size, responsive alignment and size --> <span class="text-gradient" data-astro-cid-bbe6dxrz>Hi there,</span> ${renderComponent($$result2, "DecryptedText", DecryptedText, { "text": `I'm ${currentConfig.name}!`, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/FixPorto/src/components/DecryptedText/DecryptedText", "client:component-export": "default", "data-astro-cid-bbe6dxrz": true })} </h1> <div class="flex flex-col items-center gap-5 text-center lg:gap-10" data-astro-cid-bbe6dxrz> <p class="max-w-xl text-lg leading-relaxed" data-astro-cid-bbe6dxrz> <!-- Paragraph with large text size and center alignment --> ${currentConfig.heroDescription} </p> </div> </div>  ` })} </div> <!-- End of container --> </section> <!-- End of section --> `;
}, "/home/user/FixPorto/src/components/Hero.astro", void 0);

const $$Astro$1 = createAstro("https://accessible-astro.netlify.app");
const $$Feature = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Feature;
  const { icon = "mdi:rocket", title = "Title" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="feature flex flex-col gap-4 items-center justify-center" data-astro-cid-ezsi7upz> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "data-astro-cid-ezsi7upz": true })} <div class="content flex flex-col items-center gap-5" data-astro-cid-ezsi7upz> <h3 data-astro-cid-ezsi7upz>${title}</h3> <p class="text-justify" data-astro-cid-ezsi7upz> ${renderSlot($$result, $$slots["default"], renderTemplate`Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis.`)} </p> </div> </div> `;
}, "/home/user/FixPorto/src/components/Feature.astro", void 0);

const $$Astro = createAstro("https://accessible-astro.netlify.app");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let currentConfig = defaultSiteConfig;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "FadeContent", FadeContent, { "blur": true, "duration": 250, "easing": "ease-out", "initialOpacity": 0, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/FixPorto/src/components/FadeContent/FadeContent", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="py-12 lg:py-48"> <div class="container"> <h2 class="mb-16 text-6xl text-center">My Skils</h2> <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"> ${renderComponent($$result3, "Feature", $$Feature, { "icon": "mdi:gear", "title": "Linux OS" }, { "default": ($$result4) => renderTemplate`
Saya memiliki ketertarikan dan keahlian pada bidang linux sepertihalnya pada instalasi server website atau aplikasi yang akan digunakan.
` })} ${renderComponent($$result3, "Feature", $$Feature, { "icon": "gemini", "title": "Gemini AI" }, { "default": ($$result4) => renderTemplate`
Saya pernah mengintegrasikan chatbot custom dengan Gemini API dari Google Generative AI.
` })} ${renderComponent($$result3, "Feature", $$Feature, { "icon": "js", "title": "Javascript" }, { "default": ($$result4) => renderTemplate`
Saya memiliki ketertarikan pada bahasa pemrograman javascript dan memiliki keinginan untuk terus mengembangkan keahlian pada bahasa pemrograman tersebut.
` })} </div> </div> </section>  <section class="py-12 lg:py-24"> <div class="container grid grid-cols-1 gap-12 md:grid-cols-1 lg:grid-cols-2"> <div class="flex flex-col items-start gap-4"> <h2 class="text-6xl md:text-center">Pertanyaan?</h2> <p class="text-2xl">
Silahkan kalau ada yang mau bertanya bisa langsung kirim email pribadi saya.
</p> <a class="button"${addAttribute(`mailto:${currentConfig.email}`, "href")}>Contact me</a> </div> <div class="space-content"> ${renderComponent($$result3, "Accordion", $$Accordion, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "AccordionItem", $$AccordionItem, { "name": "exclusive", "title": "Apa kegiatan yang membuatmu tertarik?", "open": true }, { "default": ($$result5) => renderTemplate` <p>
Saat ini saya tertarik dengan building chatbot ai dan juga framework javascript.
</p> ` })} ${renderComponent($$result4, "AccordionItem", $$AccordionItem, { "name": "exclusive", "title": "Apa statusmu?" }, { "default": ($$result5) => renderTemplate` <p>
Status saya saat ini adalah seorang pelajar, saya merupakan seorang siswa kelas 12 jurusan Matematika dan Ilmu Pengetahuan Alam 1 di sekolah MA NU 01 Banyuputih.
</p> ` })} ` })} </div> </div> </section>  ` })} ` })}`;
}, "/home/user/FixPorto/src/pages/index.astro", void 0);

const $$file = "/home/user/FixPorto/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
