import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import { M as ManagementContainer } from "../../../../chunks/ManagementContainer.js";
import { N as Navbar } from "../../../../chunks/Navbar.js";
import { T as Table_1 } from "../../../../chunks/Table.js";
const Sidebar_svelte_svelte_type_style_lang = "";
const css = {
  code: "aside.svelte-77y8fj.svelte-77y8fj{position:absolute;height:100%;top:0;width:250px;background-color:#202020}li.svelte-77y8fj a.svelte-77y8fj{color:white}.menu-list.svelte-77y8fj a.svelte-77y8fj:hover{background-color:unset}.my-link.svelte-77y8fj a.svelte-77y8fj{height:50px}.my-link.svelte-77y8fj.svelte-77y8fj:hover{color:#202020;background-color:#C41E3A}.my-space-50.svelte-77y8fj.svelte-77y8fj{height:50px}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<aside class="menu svelte-77y8fj"><ul class="menu-list"><li class="my-space-50 svelte-77y8fj"></li></ul>
	<ul class="menu-list svelte-77y8fj"><li class="my-link svelte-77y8fj"><a href="/partner/dashboard" class="svelte-77y8fj">Dashboard</a></li>
		<li class="my-link svelte-77y8fj"><a href="/partner/deliveries" class="svelte-77y8fj">Deliveries</a></li></ul>
	<ul class="menu-list svelte-77y8fj"><li class="svelte-77y8fj"><a class="my-link svelte-77y8fj" href="/">Manage Deliveries</a>
			<ul><li class="my-link svelte-77y8fj"><a href="/partner" class="svelte-77y8fj">New</a></li>
				<li class="my-link svelte-77y8fj"><a href="/partner/cancelled" class="svelte-77y8fj">Canceled</a></li>
				<li class="my-link svelte-77y8fj"><a href="/partner/" class="svelte-77y8fj">In progress</a></li>
				<li class="my-link svelte-77y8fj"><a href="/partner/on_transport" class="svelte-77y8fj">In transportation</a></li>
				<li class="my-link svelte-77y8fj"><a href="/partner" class="svelte-77y8fj">Delivered</a></li></ul></li>
		<li class="my-link svelte-77y8fj"><a href="partner/dashboard" class="svelte-77y8fj">Analysis</a></li></ul>
</aside>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ManagementContainer, "ManagementContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Table_1, "Table").$$render($$result, {}, {}, {})}`;
    }
  })}
${validate_component(Navbar, "Navbar").$$render($$result, { loggedIn: true }, {}, {})}
${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
