<script>
    // @ts-nocheck
	import Sidebar from "../../../Components/partner/Sidebar.svelte";
	import ManagementContainer from "../../../ManagementContainer.svelte";
	import Navbar from "../../../Navbar.svelte";
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Button } from 'flowbite-svelte';
    import { onMount } from "svelte";
    import { api_host } from "$lib/vars";

    let orders = [];

    let total = 0;

    onMount(async () => {
        fetch(api_host + "/api/v1/orders?status=DELIVERING")
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

    async function cancelOrder(_orderId) {
        const res = await fetch(api_host + '/api/v1/acps/' + _orderId, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "status": "CANCELLED"
            })
        })
        
        const json = await res.json()
        result = JSON.stringify(json)
    
        window.location.href = '/admin/allpartners';
    }
</script>


<ManagementContainer>

    <div class="text-5xl mb-4">
        In transportation
    </div>
    <Table striped={true} >
    <TableHead class="text-xs text-gray-700 uppercase bg-red-200 dark:bg-gray-700 dark:text-gray-400">
        <TableHeadCell>Order ID</TableHeadCell>
        <TableHeadCell>Created At</TableHeadCell>
        <TableHeadCell>eStore</TableHeadCell>
        <TableHeadCell>Product</TableHeadCell>
        <TableHeadCell>Buyer</TableHeadCell>
        <TableHeadCell></TableHeadCell>
    </TableHead>
    <TableBody>
        {#each orders as order}
        <TableBodyRow>
            <TableBodyCell>{order.id}</TableBodyCell>
            <TableBodyCell>{order.approvedDateTime}</TableBodyCell>
            <TableBodyCell>{order.store}</TableBodyCell>
            <TableBodyCell>{order.product}</TableBodyCell>
            <TableBodyCell>{order.buyer}</TableBodyCell>
            <TableBodyCell>
                <Button color="blue"  on:click={() => cancelOrder(order.id)}>Cancel</Button>
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