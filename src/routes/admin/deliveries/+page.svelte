<script>
    import ManagementContainer from "../../../ManagementContainer.svelte";
	import Navbar from "../../../Navbar.svelte";
	import Table from "../../../Table.svelte";
	import Sidebar from "../../../Components/admin/Sidebar.svelte";

	let deliveries = [
        { id: 1, date: '10-5-2023 12:56', source: 'Worten Viseu', destination: "Rua dos Arcos, 2400-897, Aveiro" },
        { id: 2, date: '10-5-2023 12:56', source: 'Fnac', destination: "Rua dos Arcos, 2400-897, Aveiro" },
        { id: 3, date: '10-5-2023 12:56', source: 'Worten Aveiro', destination: "Rua dos Arcos, 2400-897, Aveiro" },
        { id: 4, date: '10-5-2023 12:56', source: 'Worten Viseu', destination: "Rua dos Arcos, 2400-897, Aveiro" }
    ];

</script>

<Navbar loggedIn={true}/>
<Sidebar />
<ManagementContainer>
	<Table title={"Deliveries"} items={deliveries} accept_refuse={true}></Table>
</ManagementContainer>