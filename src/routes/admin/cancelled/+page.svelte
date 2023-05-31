<script>
    // @ts-nocheck
	import Sidebar from "../../../Components/admin/Sidebar.svelte";
	import ManagementContainer from "../../../ManagementContainer.svelte";
	import Navbar from "../../../Navbar.svelte";
	import Table from "../../../Table.svelte";
    import { onMount } from "svelte";
    import { api_host } from "$lib/vars";

    let orders = [];

    let total = 0;

    onMount(async () => {
        fetch(api_host + "/api/v1/orders?status=CANCELLED")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            orders = data;
            total = orders.length
        }).catch(error => {
            console.log(error);
            return [];
        });
    });
</script>


<ManagementContainer>
	<Table title={"Cancelled Orders"} items={orders} accept_refuse={false}></Table>
</ManagementContainer>
<Navbar loggedIn={true}/>
<Sidebar />

<style>
</style>