"use client";

import { Pagination } from "@ark-ui/solid/pagination";
import { ChevronLeft, ChevronRight } from "lucide-solid";

export default function Basic() {
  return (
    <Pagination.Root
      count={100}
      pageSize={10}
      siblingCount={2}
      class="w-full border flex items-center justify-between"
    >
      <Pagination.PrevTrigger class="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:ring-offset-2 transition-colors data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:pointer-events-none">
        <ChevronLeft class="w-4 h-4" />
        Previous
      </Pagination.PrevTrigger>
      <Pagination.NextTrigger class="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:ring-offset-2 transition-colors data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:pointer-events-none">
        Next
        <ChevronRight class="w-4 h-4" />
      </Pagination.NextTrigger>
    </Pagination.Root>
  );
}
