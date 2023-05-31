<script>
    // @ts-nocheck

	import Sidebar from "../../../Components/partner/Sidebar.svelte";
	import ManagementContainer from "../../../ManagementContainer.svelte";
	import Navbar from "../../../Navbar.svelte";
	import Table from "../../../Table.svelte";
    import { onMount } from "svelte";
    import { api_host } from "$lib/vars";

    let orders = [];

    let total = 0;

    onMount(async () => {
        fetch(api_host + "/api/v1/orders?status=PICKED_UP")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //apiData.set(data);
            orders = data;
            total = orders.length
        }).catch(error => {
            console.log(error);
            return [];
        });
    });
</script>


<ManagementContainer>
	<Table title={"Delivered"} items={orders} accept_refuse={false}></Table>
</ManagementContainer>
<Navbar loggedIn={true}/>
<Sidebar />

<style>
</style>