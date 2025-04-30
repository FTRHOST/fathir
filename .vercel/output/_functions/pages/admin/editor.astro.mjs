import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_N-6LtxwP.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from '../../chunks/DefaultLayout_BvB_jNW1.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

function MarkdownEditor({ initialValue = "", onChange }) {
  const [content, setContent] = useState(initialValue);
  const [activeTab, setActiveTab] = useState("write");
  const handleChange = (e) => {
    const newValue = e.target.value;
    setContent(newValue);
    onChange?.(newValue);
  };
  return /* @__PURE__ */ jsxs("div", { className: "markdown-editor", children: [
    /* @__PURE__ */ jsxs("div", { className: "markdown-editor-tabs", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `tab ${activeTab === "write" ? "active" : ""}`,
          onClick: () => setActiveTab("write"),
          children: "Write"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `tab ${activeTab === "preview" ? "active" : ""}`,
          onClick: () => setActiveTab("preview"),
          children: "Preview"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "markdown-editor-content", children: activeTab === "write" ? /* @__PURE__ */ jsx(
      "textarea",
      {
        value: content,
        onChange: handleChange,
        placeholder: "Write your markdown content here...",
        className: "markdown-textarea"
      }
    ) : /* @__PURE__ */ jsx("div", { className: "markdown-preview", children: /* @__PURE__ */ jsx(ReactMarkdown, { children: content }) }) })
  ] });
}

const prerender = false;
const $$Editor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$DefaultLayout, { "title": "Markdown Editor", "data-astro-cid-wtxkghai": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-wtxkghai> <h1 data-astro-cid-wtxkghai>Markdown Editor</h1> <div class="editor-container" data-astro-cid-wtxkghai> ${renderComponent($$result2, "MarkdownEditor", MarkdownEditor, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/FixPorto/src/components/MarkdownEditor", "client:component-export": "default", "data-astro-cid-wtxkghai": true })} </div> </div> ` })} `;
}, "/home/user/FixPorto/src/pages/admin/editor.astro", void 0);

const $$file = "/home/user/FixPorto/src/pages/admin/editor.astro";
const $$url = "/admin/editor";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Editor,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
