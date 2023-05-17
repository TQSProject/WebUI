<script>
	import ManagementContainer from "../../../ManagementContainer.svelte";
	import Navbar from "../../../Navbar.svelte";
	import Sidebar from "../../../Components/partner/Sidebar.svelte";
	import Table from "../../../Table.svelte";

</script>


<ManagementContainer>
	<Table></Table>
</ManagementContainer>
<Navbar loggedIn={true}/>
<Sidebar />

<style>
</style>