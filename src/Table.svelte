<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { Button } from 'flowbite-svelte';
    export let items = [
        { id: 1, date: '10-5-2023 12:56', source: 'Worten Viseu', destination: "User 1" },
        { id: 2, date: '10-5-2023 12:56', source: 'Worten Viseu', destination: "User 1" },
        { id: 3, date: '10-5-2023 12:56', source: 'Worten Aveiro', destination: "User 1" },
        { id: 4, date: '10-5-2023 12:56', source: 'Worten Viseu', destination: "User 1" }
    ];
    export let accept_refuse = false;
    export let title = '';
  </script>
  

  <div class="text-5xl mb-4">
    {title}
  </div>
  <Table striped={true} shadow>
    <TableHead class="text-xs text-gray-700 uppercase bg-red-200 dark:bg-gray-700 dark:text-gray-400">
      <TableHeadCell>Product id</TableHeadCell>
      <TableHeadCell>Date</TableHeadCell>
      <TableHeadCell>PickUp Point</TableHeadCell>
      <TableHeadCell>Deliver To</TableHeadCell>
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
            <TableBodyCell>{item.date}</TableBodyCell>
            <TableBodyCell>{item.source}</TableBodyCell>
            <TableBodyCell>{item.destination}</TableBodyCell>
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
          {#if accept_refuse}
            <td class="py-3 px-6">3</td>
          {/if}
        </tr>
      </tfoot>
  </Table>
