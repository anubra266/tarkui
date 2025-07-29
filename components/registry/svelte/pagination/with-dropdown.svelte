<script lang="ts">
  import { Pagination } from "@ark-ui/svelte/pagination";
  import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
  } from "lucide-svelte";
</script>

<Pagination.Root
  count={100}
  pageSize={10}
  siblingCount={1}
  class="flex items-center gap-4 w-full justify-between"
>
  <Pagination.Context>
    {#snippet render(pagination)}
      <div class="text-sm text-gray-600 dark:text-gray-400">
        Page {pagination.page} of {pagination.totalPages}
      </div>
    {/snippet}
  </Pagination.Context>

  <div class="flex items-center gap-1">
    <Pagination.Context>
      {#snippet render(pagination)}
        <button
          onclick={() => pagination.goToFirstPage()}
          disabled={pagination.page === 1}
          class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
        >
          <ChevronsLeft class="w-4 h-4" />
        </button>
      {/snippet}
    </Pagination.Context>

    <Pagination.PrevTrigger class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:pointer-events-none">
      <ChevronLeft class="w-4 h-4" />
    </Pagination.PrevTrigger>

    <Pagination.Context>
      {#snippet render(pagination)}
        <select
          value={pagination.page}
          on:change={(e) => pagination.setPage(Number(e.target.value))}
          class="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 min-w-20"
        >
          {#each Array.from({ length: pagination.totalPages }, (_, i) => i + 1) as page (page)}
            <option value={page}>
              Page {page}
            </option>
          {/each}
        </select>
      {/snippet}
    </Pagination.Context>

    <Pagination.NextTrigger class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:pointer-events-none">
      <ChevronRight class="w-4 h-4" />
    </Pagination.NextTrigger>

    <Pagination.Context>
      {#snippet render(pagination)}
        <button
          onclick={() => pagination.goToLastPage()}
          disabled={pagination.page === pagination.totalPages}
          class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
        >
          <ChevronsRight class="w-4 h-4" />
        </button>
      {/snippet}
    </Pagination.Context>
  </div>
</Pagination.Root> 