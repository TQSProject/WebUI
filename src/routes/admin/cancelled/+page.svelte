<script>
    // @ts-nocheck

	import Sidebar from "../../../Components/admin/Sidebar.svelte";
	import ManagementContainer from "../../../ManagementContainer.svelte";
	import Navbar from "../../../Navbar.svelte";
	import Table from "../../../Table.svelte";
    import { onMount } from "svelte";

    let orders = [];

    let total = 0;

    onMount(async () => {
        fetch("http://localhost:8080/api/v1/orders?status=DELIVERING")
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
	<Table title={"Cancelled"} items={orders} accept_refuse={false}></Table>
</ManagementContainer>
<Navbar loggedIn={true}/>
<Sidebar />

<style>
</style>