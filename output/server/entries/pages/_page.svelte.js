import { c as create_ssr_component, v as validate_component } from "../../chunks/index3.js";
import { W as Wallpaper } from "../../chunks/Wallpaper.js";
import { N as Navbar } from "../../chunks/Navbar.js";
const css = {
  code: ".my-form.svelte-1vig0px{width:60%;height:40%;margin:auto;margin-top:100px;padding:40px 60px;border:1px solid red;background-color:#202020}.my-full-parent-size.svelte-1vig0px{width:100%}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<form method="POST" action="/login" class="box my-form svelte-1vig0px"><div class="field"><label class="label">Name</label>
			<div class="control is-one-fifth"><input class="input" type="text" placeholder="Text input"></div></div>

		<div class="field"><label class="label" for="login_email">Email</label>
			<div class="control"><input id="login_email" class="input" type="email" placeholder="Email input" value="hello@"></div></div>

		<div class="field"><label class="label" for="password">Password</label>
			<div class="control"><input class="input" type="password"></div></div>

		<div class="field"><div class="control">Don&#39;t have an account? Click <a href="/signup">here</a></div></div>

		<div class="field is-grouped"><div class="control my-full-parent-size svelte-1vig0px"><button class="button is-link is-fullwidth">Log In</button></div></div>
	</form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, { loggedIn: false }, {}, {})}
${validate_component(Wallpaper, "Wallpaper").$$render($$result, {}, {}, {})}
${validate_component(Login, "Login").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
