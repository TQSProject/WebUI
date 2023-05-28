<script>
// @ts-nocheck

	import Sidebar from "../../../Components/admin/Sidebar.svelte";
	import ManagementContainer from "../../../ManagementContainer.svelte";
	import Navbar from "../../../Navbar.svelte";
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { Button } from 'flowbite-svelte';
    import { onMount } from "svelte";

    let partners = [];

    let total = 0;

    onMount(async () => {
        fetch("http://localhost:8080/api/v1/acps?status=APPROVED")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //apiData.set(data);
            partners = data;
            total = partners.length
        }).catch(error => {
            console.log(error);
            return [];
    });
});
</script>


<ManagementContainer>
    <div class="text-5xl mb-4">
        All Partners
      </div>
      <Table striped={true} >
        <TableHead class="text-xs text-gray-700 uppercase bg-red-200 dark:bg-gray-700 dark:text-gray-400">
          <TableHeadCell>Product id</TableHeadCell>
          <TableHeadCell>Enrolled Date</TableHeadCell>
          <TableHeadCell>PickUp Point Name</TableHeadCell>
          <TableHeadCell>City</TableHeadCell>
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
                        <Button color="red">Refuse</Button>
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
            </tr>
          </tfoot>
      </Table>

</ManagementContainer>
<Navbar loggedIn={true}/>
<Sidebar />

<style>
</style>