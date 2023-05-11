import { c as create_ssr_component } from "./index3.js";
const ManagementContainer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".my-container.svelte-1ehtil0{position:absolute;top:0;left:0px;width:500%;height:100vh;z-index:-1;background-color:black;color:white;overflow:visible}.my-container-content.svelte-1ehtil0{width:80vw;max-height:600px;margin-top:130px;margin-left:300px}",
  map: null
};
const ManagementContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="my-container svelte-1ehtil0"><div class="my-container-content svelte-1ehtil0">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
export {
  ManagementContainer as M
};
