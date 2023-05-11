import { c as create_ssr_component, e as escape } from "./index3.js";
const Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: ".smaller.svelte-5b0yli{margin-left:250px}.my-height.svelte-5b0yli{height:80px}.my-bg-red.svelte-5b0yli{background-color:#C41E3A}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { loggedIn = false } = $$props;
  if ($$props.loggedIn === void 0 && $$bindings.loggedIn && loggedIn !== void 0)
    $$bindings.loggedIn(loggedIn);
  $$result.css.add(css);
  return `<nav class="${"navbar my-height my-bg-red " + escape(loggedIn === true ? "smaller" : "", true) + " svelte-5b0yli"}" aria-label="main navigation"><div class="navbar-brand"><a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="https://bulma.io"><span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span></a></div>

	<div id="navbarBasicExample" class="navbar-menu"><div class="navbar-start"><a class="navbar-item" href="/">Home </a>

			<a class="navbar-item" href="https://bulma.io">Documentation </a>

			<a class="navbar-item" href="https://bulma.io">About </a>
			
			<a class="navbar-item" href="https://bulma.io">Jobs </a>
			
			<a class="navbar-item" href="https://bulma.io">Contact </a></div></div>
</nav>`;
});
export {
  Navbar as N
};
