<script setup lang="ts">
import { Pagination } from "@ark-ui/vue/pagination";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
</script>

<template>
  <Pagination.Root
    :count="60"
    :page-size="20"
    :sibling-count="1"
    class="flex items-center gap-4 w-full"
  >
    <Pagination.PrevTrigger
      class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:pointer-events-none"
    >
      <ChevronLeft class="w-4 h-4" />
    </Pagination.PrevTrigger>

    <Pagination.Context v-slot="pagination">
      <template v-for="(page, index) in pagination.pages" :key="index">
        <Pagination.Item
          v-if="page.type === 'page'"
          v-bind="page"
          class="inline-flex items-center justify-center w-8 h-8 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-[selected]:bg-blue-500 data-[selected]:text-white data-[selected]:hover:bg-blue-600"
        >
          {{ page.value }}
        </Pagination.Item>
        <Pagination.Ellipsis
          v-else
          :index="index"
          class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400"
        >
          &#8230;
        </Pagination.Ellipsis>
      </template>
    </Pagination.Context>

    <Pagination.NextTrigger
      class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:pointer-events-none"
    >
      <ChevronRight class="w-4 h-4" />
    </Pagination.NextTrigger>

    <div class="flex items-center gap-2 ml-auto">
      <span class="text-sm text-gray-600 dark:text-gray-400"> Go to page </span>
      <Pagination.Context v-slot="pagination">
        <input
          type="number"
          :min="1"
          :max="pagination.totalPages"
          @keydown="
            (e) => {
              if (e.key === 'Enter') {
                pagination.setPage(Number(e.currentTarget.value));
              }
            }
          "
          class="w-16 px-2 py-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-100 text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50"
          placeholder="1"
        />
      </Pagination.Context>
    </div>
  </Pagination.Root>
</template>
