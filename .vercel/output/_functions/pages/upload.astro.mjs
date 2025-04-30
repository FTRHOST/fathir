import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_N-6LtxwP.mjs';
import 'kleur/colors';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Upload = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ng-template", "ng-template", { "#emptyblog": true, "data-astro-cid-gyrmc7w2": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="spinner-container" data-astro-cid-gyrmc7w2> ${renderComponent($$result, "mat-spinner", "mat-spinner", { "data-astro-cid-gyrmc7w2": true })} </div> ` })} ${renderComponent($$result, "ng-container", "ng-container", { "*ngIf": "blogPost && blogPost.length>0; else emptyblog", "data-astro-cid-gyrmc7w2": true }, { "default": () => renderTemplate` <div *ngFor="let post of blogPost" data-astro-cid-gyrmc7w2> ${renderComponent($$result, "mat-card", "mat-card", { "class": "blog-card mat-elevation-z2", "data-astro-cid-gyrmc7w2": true }, { "default": () => renderTemplate` ${renderComponent($$result, "mat-card-content", "mat-card-content", { "data-astro-cid-gyrmc7w2": true }, { "default": () => renderTemplate` <a class="blog-title" [routerLink]="['/blog/', post.postId, post.title | slug]" data-astro-cid-gyrmc7w2> <h2 data-astro-cid-gyrmc7w2>Hahay </h2> </a> ` })} ${renderComponent($$result, "mat-card-content", "mat-card-content", { "data-astro-cid-gyrmc7w2": true }, { "default": () => renderTemplate` <div [innerHTML]="post.content | excerpt" data-astro-cid-gyrmc7w2></div> ` })} ${renderComponent($$result, "mat-divider", "mat-divider", { "data-astro-cid-gyrmc7w2": true })} ${renderComponent($$result, "mat-card-actions", "mat-card-actions", { "align": "end", "data-astro-cid-gyrmc7w2": true }, { "default": () => renderTemplate` ${renderComponent($$result, "ng-container", "ng-container", { "data-astro-cid-gyrmc7w2": true }, { "default": () => renderTemplate` <button mat-raised-button color="accent" [routerLink]="['/editpost',post.postId]" data-astro-cid-gyrmc7w2>Edit</button> <button mat-raised-button color="warn" (click)="delete(post.postId)" data-astro-cid-gyrmc7w2>Delete</button> ` })} <span class="spacer" data-astro-cid-gyrmc7w2></span> <button mat-raised-button color="primary" [routerLink]="['/blog/', post.postId, post.title | slug]" data-astro-cid-gyrmc7w2>Read
                    More</button> ` })} ` })} </div> ` })} `;
}, "/home/user/FixPorto/src/pages/upload.astro", void 0);

const $$file = "/home/user/FixPorto/src/pages/upload.astro";
const $$url = "/upload";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Upload,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
