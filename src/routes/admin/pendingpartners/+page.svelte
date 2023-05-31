<script>
// @ts-nocheck
    import Sidebar from "../../../Components/admin/Sidebar.svelte";
	import ManagementContainer from "../../../ManagementContainer.svelte";
	import Navbar from "../../../Navbar.svelte";
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { Button } from 'flowbite-svelte';
    import { onMount } from "svelte";
    import { api_host } from "$lib/vars";

    let partners = [];

    let total = 0;

    onMount(async () => {
        fetch(api_host + "/api/v1/acps?status=WAITING_ADMIN_APPROVAL")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            partners = data;
            total = partners.length
        }).catch(error => {
            console.log(error);
            return [];
        });
    });


	let result = null;
	
	async function acceptACP(_apcId) {
        const res = await fetch(api_host + '/api/v1/acps/' + _apcId, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "status": "APPROVED"
            })
        })
        
        const json = await res.json()
        result = JSON.stringify(json)

        window.location.href = '/admin/allpartners';
    }

	async function refuseACP(_apcId) {
        const res = await fetch(api_host + '/api/v1/acps/' + _apcId, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "status": "REFUSED"
            })
        })
        
        const json = await res.json()
        result = JSON.stringify(json)
    
        window.location.href = '/admin/allpartners';
    }
</script>


<ManagementContainer>
    <div class="text-5xl mb-4">
        Pendind Pick Up Points
      </div>
      <Table striped={true} >
        <TableHead class="text-xs text-gray-700 uppercase bg-red-200 dark:bg-gray-700 dark:text-gray-400">
          <TableHeadCell>Pick Up Point ID</TableHeadCell>
          <TableHeadCell>Enrolled Date</TableHeadCell>
          <TableHeadCell>PickUp Point Name</TableHeadCell>
          <TableHeadCell>City</TableHeadCell>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell></TableHeadCell>
        </TableHead>
        <TableBody>
            {#each partners as acp}
            <TableBodyRow>
                <TableBodyCell>{acp.id}</TableBodyCell>
                <TableBodyCell>{acp.registed_time}</TableBodyCell>
                <TableBodyCell>{acp.name}</TableBodyCell>
                <TableBodyCell>{acp.city}</TableBodyCell>
                <TableBodyCell>
                    <Button color="blue"  on:click={() => acceptACP(acp.id)}>Accept</Button>
                </TableBodyCell>
                <TableBodyCell>
                    <Button color="red" on:click={() => refuseACP(acp.id)}>Refuse</Button>
                </TableBodyCell>
            </TableBodyRow>
            {/each} 
        </TableBody>
        <tfoot>
            <tr class="font-semibold text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <th scope="row" class="py-3 px-6 text-base">Total</th>
              <td class="py-3 px-6">{total}</td>
              <td class="py-3 px-6">{total}</td>
              <td class="py-3 px-6">{total}</td>
              <td class="py-3 px-6">{total}</td>
              <td class="py-3 px-6">{total}</td>
            </tr>
          </tfoot>
      </Table>

</ManagementContainer>
<Navbar loggedIn={true}/>
<Sidebar />

<style>
</style>