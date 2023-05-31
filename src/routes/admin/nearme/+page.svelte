<script>
// @ts-nocheck

    import ManagementContainer from "../../../ManagementContainer.svelte";
	import Navbar from "../../../Navbar.svelte";
	import Sidebar from "../../../Components/admin/Sidebar.svelte";
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { Button } from 'flowbite-svelte';

    let partners = [];    
    let search = false;
    let total = 0;
    let city_name = '';
    
    async function searchACP() {
        fetch("http://localhost:8080/api/v1/acps?city=" + city_name)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //apiData.set(data);
            partners = data;
            total = partners.length;
        }).catch(error => {
            console.log(error);
            return [];
        });

        search = true;
    }
</script>

<Navbar loggedIn={true}/>
<Sidebar />
<ManagementContainer>

    <form>   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" bind:value={city_name} class="block w-full py-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search City..." required>
            <button type="submit" on:click={searchACP} class="w-36 text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-m px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
    </form>

    
    {#if search}
    <div class="text-5xl mb-4 mt-50">
        All Pick Up Points in {city_name}
      </div>
      <Table striped={true} >
        <TableHead class="text-xs text-gray-700 uppercase bg-red-200 dark:bg-gray-700 dark:text-gray-400">
          <TableHeadCell>Pick Up Point ID</TableHeadCell>
          <TableHeadCell>Enrolled Date</TableHeadCell>
          <TableHeadCell>PickUp Point Name</TableHeadCell>
          <TableHeadCell>City</TableHeadCell>
        </TableHead>
        <TableBody>
            {#each partners as acp}
            <TableBodyRow>
                <TableBodyCell>{acp.id}</TableBodyCell>
                <TableBodyCell>{acp.registed_time}</TableBodyCell>
                <TableBodyCell>{acp.name}</TableBodyCell>
                <TableBodyCell>{acp.city}</TableBodyCell>
            </TableBodyRow>
            {/each} 
        </TableBody>
        <tfoot>
            <tr class="font-semibold text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <th scope="row" class="py-3 px-6 text-base">Total</th>
              <td class="py-3 px-6">{total}</td>
              <td class="py-3 px-6">{total}</td>
              <td class="py-3 px-6">{total}</td>
            </tr>
          </tfoot>
      </Table>
    {/if}
</ManagementContainer>


<style>
    .mt-50 {
        margin-top: 80px;
    }
</style>