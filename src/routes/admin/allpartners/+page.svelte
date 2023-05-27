<script>
// @ts-nocheck

	import Sidebar from "../../../Components/admin/Sidebar.svelte";
	import ManagementContainer from "../../../ManagementContainer.svelte";
	import Navbar from "../../../Navbar.svelte";
	import Table from "../../../Table.svelte";
    import { onMount } from "svelte";
    import { writable, derived } from 'svelte/store';

    const old_partners = [
        { id: 1, date: '10-5-2023 12:56', source: 'Worten Viseu', destination: "User 1" },
        { id: 2, date: '10-5-2023 12:56', source: 'Worten Viseu', destination: "User 1" },
        { id: 3, date: '10-5-2023 12:56', source: 'Worten Aveiro', destination: "User 1" },
        { id: 4, date: '10-5-2023 12:56', source: 'Worten Viseu', destination: "User 1" }
    ];

    let partners = [
        { date: '10-5-2023 12:56', name: 'Worten Aveiro', city: "Aveiro" },
        { date: '10-5-2023 12:56', name: 'Worten Viseu', city: "Viseu" },
        { date: '10-5-2023 12:56', name: 'Fnac Aveiro', city: "Aveiro" },
        { date: '10-5-2023 12:56', name: 'Worten Porto', city: "Porto" }
    ];

    const apiData = writable([]);

    const drinkNames = derived(apiData, ($apiData) => {
        if ($apiData.drinks){
            return $apiData.drinks.map(drink => drink.strDrink);
        }
        return [];
    });

    onMount(async () => {
        fetch("http://localhost:8080/api/v1/acps")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            apiData.set(data);
            partners = data;
        }).catch(error => {
            console.log(error);
            return [];
    });
});
</script>


<ManagementContainer>
	<Table title={"All Partners"} items={partners} accept_refuse={false}></Table>

    <h1>Whiskey Drinks Menu</h1>
	<ul>
	{#each partners as p}
		<li>{p.name}</li>
	{/each}
	</ul>
</ManagementContainer>
<Navbar loggedIn={true}/>
<Sidebar />

<style>
</style>