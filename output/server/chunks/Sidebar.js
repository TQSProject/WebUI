import { c as create_ssr_component } from "./index3.js";
const Sidebar_svelte_svelte_type_style_lang = "";
const css = {
  code: "aside.svelte-77y8fj.svelte-77y8fj{position:absolute;height:100%;top:0;width:250px;background-color:#202020}li.svelte-77y8fj a.svelte-77y8fj{color:white}.menu-list.svelte-77y8fj a.svelte-77y8fj:hover{background-color:unset}.my-link.svelte-77y8fj a.svelte-77y8fj{height:50px}.my-link.svelte-77y8fj.svelte-77y8fj:hover{color:#202020;background-color:#C41E3A}.my-space-50.svelte-77y8fj.svelte-77y8fj{height:50px}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<aside class="menu svelte-77y8fj"><ul class="menu-list"><li class="my-space-50 svelte-77y8fj"></li></ul>
	<ul class="menu-list svelte-77y8fj"><li class="my-link svelte-77y8fj"><a href="/admin/dashboard" class="svelte-77y8fj">Dashboard</a></li>
		<li class="my-link svelte-77y8fj"><a href="/admin/deliveries" class="svelte-77y8fj">Deliveries</a></li></ul>
	<ul class="menu-list svelte-77y8fj"><li class="svelte-77y8fj"><a class="my-link svelte-77y8fj" href="/">Manage Deliveries</a>
			<ul><li class="my-link svelte-77y8fj"><a href="/admin" class="svelte-77y8fj">New</a></li>
				<li class="my-link svelte-77y8fj"><a href="/admin/cancelled" class="svelte-77y8fj">Canceled</a></li>
				<li class="my-link svelte-77y8fj"><a href="/admin/" class="svelte-77y8fj">In progress</a></li>
				<li class="my-link svelte-77y8fj"><a href="/admin/on_transport" class="svelte-77y8fj">In transportation</a></li>
				<li class="my-link svelte-77y8fj"><a href="/admin/" class="svelte-77y8fj">Delivered</a></li></ul></li>
		<li class="svelte-77y8fj"><a class="my-link svelte-77y8fj" href="/">Manage PickUp Points</a>
			<ul><li class="my-link svelte-77y8fj"><a href="/admin/allpartners" class="svelte-77y8fj">See All</a></li>
				<li class="my-link svelte-77y8fj"><a href="/admin/pendingpartners" class="svelte-77y8fj">Pending requests</a></li></ul></li>
		<li class="my-link svelte-77y8fj"><a href="/admin/dashboard" class="svelte-77y8fj">...Something...</a></li>
		<li class="my-link svelte-77y8fj"><a href="/admin/dashboard" class="svelte-77y8fj">...Something...</a></li>
		<li class="my-link svelte-77y8fj"><a href="/admin/dashboard" class="svelte-77y8fj">Statistics</a></li></ul>
</aside>`;
});
export {
  Sidebar as S
};
