import { c as create_ssr_component, v as validate_component, d as each } from "../../../../chunks/index3.js";
import { S as Sidebar } from "../../../../chunks/Sidebar.js";
import { N as Navbar } from "../../../../chunks/Navbar.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dashboard.svelte-dihhdt{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;background-color:black}.my-table.svelte-dihhdt{margin-top:120px;margin-left:400px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cats = [
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    {
      id: "OUtn3pvWmpg",
      name: "Henri The Existential Cat"
    }
  ];
  $$result.css.add(css);
  return `<div class="dashboard svelte-dihhdt"></div>
${validate_component(Navbar, "Navbar").$$render($$result, { loggedIn: true }, {}, {})}
${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}

<table class="table my-table svelte-dihhdt"><thead><tr><th><abbr title="Position">Pos</abbr></th>
			<th>Team</th>
			<th><abbr title="Played">Pld</abbr></th>
			<th><abbr title="Won">W</abbr></th>
			<th><abbr title="Drawn">D</abbr></th>
			<th><abbr title="Lost">L</abbr></th>
			<th><abbr title="Goals for">GF</abbr></th>
			<th><abbr title="Goals against">GA</abbr></th>
			<th><abbr title="Goal difference">GD</abbr></th>
			<th><abbr title="Points">Pts</abbr></th>
			<th>Qualification or relegation</th></tr></thead>
	<tfoot><tr><th><abbr title="Position">Pos</abbr></th>
			<th>Team</th>
			<th><abbr title="Played">Pld</abbr></th>
			<th><abbr title="Won">W</abbr></th>
			<th><abbr title="Drawn">D</abbr></th>
			<th><abbr title="Lost">L</abbr></th>
			<th><abbr title="Goals for">GF</abbr></th>
			<th><abbr title="Goals against">GA</abbr></th>
			<th><abbr title="Goal difference">GD</abbr></th>
			<th><abbr title="Points">Pts</abbr></th>
			<th>Qualification or relegation</th></tr></tfoot>
	<tbody>${each(cats, (cat) => {
    return `<tr><th>1</th>
			<td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong></td>
			<td>putas</td>
			<td>23</td>
			<td>12</td>
			<td>3</td>
			<td>68</td>
			<td>36</td>
			<td>+32</td>
			<td>81</td>
			<td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
		</tr>`;
  })}</tbody>
</table>`;
});
export {
  Page as default
};
