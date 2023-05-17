<script>
    import ManagementContainer from "../../../ManagementContainer.svelte";
	import Navbar from "../../../Navbar.svelte";
	import Table from "../../../Table.svelte";
	import Sidebar from "../../../Components/admin/Sidebar.svelte";

    import { Button, Search } from 'flowbite-svelte'


	let deliveries = [
        { id: 1, date: '10-5-2023 12:56', source: 'Worten Viseu', destination: "User 1" },
        { id: 2, date: '10-5-2023 12:56', source: 'Fnac', destination: "User 1" },
        { id: 3, date: '10-5-2023 12:56', source: 'Worten Aveiro', destination: "User 1" },
        { id: 4, date: '10-5-2023 12:56', source: 'Worten Viseu', destination: "User 1" }
    ];

</script>

<Navbar loggedIn={true}/>
<Sidebar />
<ManagementContainer>
	<Search >
        <Button>Search</Button>
    </Search>
</ManagementContainer>