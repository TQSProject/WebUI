<script>
// @ts-nocheck

    import ManagementContainer from "../../../ManagementContainer.svelte";
	import Navbar from "../../../Navbar.svelte";
	import Table from "../../../Table.svelte";
	import Sidebar from "../../../Components/admin/Sidebar.svelte";
    import { Button, Search } from 'flowbite-svelte';
    import { onMount } from "svelte";
    import { writable, derived } from 'svelte/store';


    let partners = [];
    
    let search = false;
    
    function handleClick() {
		alert('clicked')
        search = true;
    }

    const apiData = writable([]);

    const drinkNames = derived(apiData, ($apiData) => {
        if ($apiData.drinks){
            return $apiData.drinks.map(drink => drink.strDrink);
        }
        return [];
    });

    onMount(async () => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Bourbon")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            apiData.set(data);
        }).catch(error => {
            console.log(error);
            return [];
        });
    }); 

</script>

<Navbar loggedIn={true}/>
<Sidebar />
<ManagementContainer>
	<Search>
        <Button on:click={handleClick}>Search</Button>
    </Search>

    {#if search}
        <Table title={"All Partners"} items={deliveries} accept_refuse={false}></Table>
    {/if}

    <h1>Whiskey Drinks Menu</h1>
	<ul>
	{#each partners as p}
		<li>{p.name}</li>
	{/each}
	</ul>
</ManagementContainer>