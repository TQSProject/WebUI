<script>
	import Sidebar from "../../../Components/admin/Sidebar.svelte";
	import ManagementContainer from "../../../ManagementContainer.svelte";
	import Navbar from "../../../Navbar.svelte";
	import Table from "../../../Table.svelte";

    const partners = [
        { id: 1, date: '10-5-2023 12:56', source: 'Worten Viseu', destination: "User 1" },
        { id: 2, date: '10-5-2023 12:56', source: 'Worten Viseu', destination: "User 1" },
        { id: 3, date: '10-5-2023 12:56', source: 'Worten Aveiro', destination: "User 1" },
        { id: 4, date: '10-5-2023 12:56', source: 'Worten Viseu', destination: "User 1" }
    ];
</script>


<ManagementContainer>
	<Table title={"Pending Partners"} items={partners} accept_refuse={true}></Table>
</ManagementContainer>
<Navbar loggedIn={true}/>
<Sidebar />

<style>
</style>