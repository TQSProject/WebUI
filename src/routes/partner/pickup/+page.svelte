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

    let result = null;

    onMount(async () => {
        fetch(api_host + "/api/v1/orders?status=DELIVERED_AND_WAITING_FOR_PICKUP")
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

    async function markAsDelivered(_orderId) {
        const res = await fetch(api_host + '/api/v1/orders/' + _orderId, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "status": "PICKED_UP"
            })
        })
        
        const json = await res.json()
        result = JSON.stringify(json)

        window.location.href = '/partner/dashboard';
    }

    async function returnToStore(_orderId) {
        const res = await fetch(api_host + '/api/v1/orders/' + _orderId, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "status": "RETURNED"
            })
        })
        
        const json = await res.json()
        result = JSON.stringify(json)

        window.location.href = '/partner/dashboard';
    }
</script>


<ManagementContainer>

    <div class="text-5xl mb-4">
        Waiting for Client
    </div>
    <Table striped={true} >
    <TableHead class="text-xs text-gray-700 uppercase bg-red-200 dark:bg-gray-700 dark:text-gray-400">
        <TableHeadCell>Order ID</TableHeadCell>
        <TableHeadCell>Approved At</TableHeadCell>
        <TableHeadCell>eStore</TableHeadCell>
        <TableHeadCell>Product</TableHeadCell>
        <TableHeadCell>Buyer</TableHeadCell>
        <TableHeadCell></TableHeadCell>
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
                <Button color="blue"  on:click={() => markAsDelivered(order.id)}>Delivered to client</Button>
            </TableBodyCell>
            <TableBodyCell>
                <Button color="red" on:click={() => returnToStore(order.id)}>Return to Store</Button>
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
            <td class="py-3 px-6">{total}</td>
        </tr>
        </tfoot>
    </Table>
</ManagementContainer>
<Navbar loggedIn={true}/>
<Sidebar />

<style>
</style>