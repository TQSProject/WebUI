<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { Button } from 'flowbite-svelte';
    export let items = [
      {
        "id" : 1,
        "store" : "eStore",
        "buyer" : "Ricardo",
        "product" : "Toothpaste Nax Pro",
        "count" : 3,
        "acp" : {
          "id" : 1,
          "name" : "Worten Lisboa",
          "city" : "Lisboa",
          "registed_time" : "28/05/2023 00:07:37",
          "status" : "REFUSED"
        },
        "status" : "DELIVERING",
        "createdDateTime" : "2023-05-28T00:07:39.158152",
        "approvedDateTime" : "2023-05-28T00:07:41.973758",
        "estimatedDeliveryDateTime" : "2023-05-28T00:08:09.974752",
        "deliveredDateTime" : null,
        "pickedUpDateTime" : null
      }
    ];
    export let accept_refuse = false;
    export let title = '';
  </script>
  

  <div class="text-5xl mb-4">
    {title}
  </div>
  <Table striped={true} >
    <TableHead class="text-xs text-gray-700 uppercase bg-red-200 dark:bg-gray-700 dark:text-gray-400">
      <TableHeadCell>Product id</TableHeadCell>
      <TableHeadCell>PickUp Point</TableHeadCell>
      <TableHeadCell>Date</TableHeadCell>
      <TableHeadCell>Deliver To</TableHeadCell>
      <TableHeadCell>Store</TableHeadCell>
      <TableHeadCell>
        <span class="sr-only"> Edit </span>
      </TableHeadCell>
      {#if accept_refuse}
      <TableHeadCell>
        <span class="sr-only"> Edit </span>
      </TableHeadCell>
      {/if}
    </TableHead>
    <TableBody>
        {#each items as item}
        <TableBodyRow>
            <TableBodyCell>{item.id}</TableBodyCell>
            <TableBodyCell>{item.acp.name}</TableBodyCell>
            <TableBodyCell>{item.createdDateTime}</TableBodyCell>
            <TableBodyCell>{item.buyer}</TableBodyCell>
            <TableBodyCell>{item.store}</TableBodyCell>
            {#if accept_refuse}
                <TableBodyCell>
                    <Button color="blue">Accept</Button>
                </TableBodyCell>
                <TableBodyCell>
                    <Button color="red">Refuse</Button>
                </TableBodyCell>
                {:else}
                <TableBodyCell>
                <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Edit
                </a>
                </TableBodyCell>
            {/if}
        </TableBodyRow>
        {/each} 
    </TableBody>
    <tfoot>
        <tr class="font-semibold text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <th scope="row" class="py-3 px-6 text-base">Total</th>
          <td class="py-3 px-6">3</td>
          <td class="py-3 px-6">3</td>
          <td class="py-3 px-6">3</td>
          <td class="py-3 px-6">3</td>
          <td class="py-3 px-6">3</td>
          {#if accept_refuse}
            <td class="py-3 px-6">3</td>
          {/if}
        </tr>
      </tfoot>
  </Table>
