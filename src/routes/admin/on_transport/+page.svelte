<script>
	import Sidebar from '../../../Components/admin/Sidebar.svelte';
	import Navbar from '../../../Navbar.svelte';

  let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
</script>

<div class="dashboard" />
<Navbar loggedIn={true}/>
<Sidebar />

<table class="table my-table">
	<thead>
		<tr>
			<th><abbr title="Position">Pos</abbr></th>
			<th>Team</th>
			<th><abbr title="Played">Pld</abbr></th>
			<th><abbr title="Won">W</abbr></th>
			<th><abbr title="Drawn">D</abbr></th>
			<th><abbr title="Lost">L</abbr></th>
			<th><abbr title="Goals for">GF</abbr></th>
			<th><abbr title="Goals against">GA</abbr></th>
			<th><abbr title="Goal difference">GD</abbr></th>
			<th><abbr title="Points">Pts</abbr></th>
			<th>Qualification or relegation</th>
		</tr>
	</thead>
	<tfoot>
		<tr>
			<th><abbr title="Position">Pos</abbr></th>
			<th>Team</th>
			<th><abbr title="Played">Pld</abbr></th>
			<th><abbr title="Won">W</abbr></th>
			<th><abbr title="Drawn">D</abbr></th>
			<th><abbr title="Lost">L</abbr></th>
			<th><abbr title="Goals for">GF</abbr></th>
			<th><abbr title="Goals against">GA</abbr></th>
			<th><abbr title="Goal difference">GD</abbr></th>
			<th><abbr title="Points">Pts</abbr></th>
			<th>Qualification or relegation</th>
		</tr>
	</tfoot>
	<tbody>
    {#each cats as cat}
		<tr>
			<th>1</th>
			<td
				><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C."
					>Leicester City</a
				> <strong>(C)</strong>
			</td>
			<td>putas</td>
			<td>23</td>
			<td>12</td>
			<td>3</td>
			<td>68</td>
			<td>36</td>
			<td>+32</td>
			<td>81</td>
			<td
				>Qualification for the <a
					href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
					title="2016–17 UEFA Champions League">Champions League group stage</a
				></td
			>
		</tr>
    {/each}
	</tbody>
</table>

<style>
	.dashboard {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background-color: black;
	}
  .my-table {
    margin-top: 120px;
    margin-left: 400px;
  }
</style>
