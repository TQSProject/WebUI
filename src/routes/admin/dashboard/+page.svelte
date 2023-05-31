<script>
	import Sidebar from "../../../Components/admin/Sidebar.svelte";
	import ManagementContainer from "../../../ManagementContainer.svelte";
	import Navbar from "../../../Navbar.svelte";
	import Table from "../../../Table.svelte";

    const orders = [
        {
        "id": 1,
        "store": "eStore",
        "buyer": "Ricardo",
        "product": "Toothpaste Nax Pro",
        "count": 3,
        "acp": {
            "id": 1,
            "name": "Worten Lisboa",
            "city": "Lisboa",
            "registed_time": "28/05/2023 00:07:37",
            "status": "REFUSED"
        },
        "status": "DELIVERING",
        "createdDateTime": "2023-05-28T00:07:39.158152",
        "approvedDateTime": "2023-05-28T00:07:41.973758",
        "estimatedDeliveryDateTime": "2023-05-28T00:08:09.974752",
        "deliveredDateTime": null,
        "pickedUpDateTime": null
    }
    ];
</script>


<ManagementContainer>
	<Table title={"Dashboard"} items={orders} accept_refuse={true}></Table>
</ManagementContainer>
<Navbar loggedIn={true}/>
<Sidebar />

<style>
</style>