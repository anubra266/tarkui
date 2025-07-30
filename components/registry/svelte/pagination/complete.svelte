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
  count={500}
  pageSize={10}
  siblingCount={1}
  class="flex items-center gap-1"
>
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

  <Pagination.PrevTrigger class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:pointer-events-none">
    <ChevronLeft class="w-4 h-4" />
  </Pagination.PrevTrigger>

  <Pagination.Context>
    {#snippet render(pagination)}
      {#each pagination.pages as page, index (index)}
        {#if page.type === "page"}
          <Pagination.Item
            {...page}
            class="inline-flex items-center justify-center w-8 h-8 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-selected:bg-blue-500 data-selected:text-white data-selected:hover:bg-blue-600"
          >
            {page.value}
          </Pagination.Item>
        {:else}
          <Pagination.Ellipsis
            {index}
            class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400"
          >
            &#8230;
          </Pagination.Ellipsis>
        {/if}
      {/each}
    {/snippet}
  </Pagination.Context>

  <Pagination.NextTrigger class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:pointer-events-none">
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
</Pagination.Root> 