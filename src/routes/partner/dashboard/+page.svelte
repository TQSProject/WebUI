<script>
	import ManagementContainer from "../../../ManagementContainer.svelte";
	import Navbar from "../../../Navbar.svelte";
	import Sidebar from "../../../Components/partner/Sidebar.svelte";
	import Table from "../../../Table.svelte";
	import { onMount } from "svelte";
	import { api_host, acp_name } from "$lib/vars";

    onMount(async () => {
        // fetch(api_host + "/api/v1/orders?status=PICKED_UP")
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        //     //apiData.set(data);
        //     orders = data;
        //     total = orders.length
        // }).catch(error => {
        //     console.log(error);
        //     return [];
        // });
    });
    
    console.log("acp_name", $acp_name);
</script>


<ManagementContainer>
	<div>oi {$acp_name.name}</div>
</ManagementContainer>
<Navbar loggedIn={true}/>
<Sidebar />

<style>
</style>