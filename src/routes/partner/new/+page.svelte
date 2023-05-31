<script>
    // @ts-nocheck

	import { onMount } from "svelte";
	import Sidebar from "../../../Components/partner/Sidebar.svelte";
	import ManagementContainer from "../../../ManagementContainer.svelte";
	import Navbar from "../../../Navbar.svelte";
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Button } from 'flowbite-svelte';
    import { api_host } from "$lib/vars";

    let orders = [];

    let total = 0;

    onMount(async () => {
        fetch(api_host + "/api/v1/orders?status=WAITING_ADMIN_APPROVAL")
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

    <div class="text-5xl mb-4">
        New deliveries
    </div>
    <Table striped={true} >
    <TableHead class="text-xs text-gray-700 uppercase bg-red-200 dark:bg-gray-700 dark:text-gray-400">
        <TableHeadCell>Order ID</TableHeadCell>
        <TableHeadCell>Created At</TableHeadCell>
        <TableHeadCell>eStore</TableHeadCell>
        <TableHeadCell>Product</TableHeadCell>
        <TableHeadCell>Buyer</TableHeadCell>
    </TableHead>
    <TableBody>
        {#each orders as order}
        <TableBodyRow>
            <TableBodyCell>{order.id}</TableBodyCell>
            <TableBodyCell>{order.createdDateTime}</TableBodyCell>
            <TableBodyCell>{order.store}</TableBodyCell>
            <TableBodyCell>{order.product}</TableBodyCell>
            <TableBodyCell>{order.buyer}</TableBodyCell>
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