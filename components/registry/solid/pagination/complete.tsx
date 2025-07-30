"use client";

import { Pagination } from "@ark-ui/solid/pagination";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-solid";

export default function Complete() {
  return (
    <Pagination.Root
      count={500}
      pageSize={10}
      siblingCount={1}
      class="flex items-center gap-1"
    >
      <Pagination.Context>
        {(pagination) => (
          <button
            onClick={() => pagination().goToFirstPage()}
            disabled={pagination().page === 1}
            class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
          >
            <ChevronsLeft class="w-4 h-4" />
          </button>
        )}
      </Pagination.Context>

      <Pagination.PrevTrigger class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:pointer-events-none">
        <ChevronLeft class="w-4 h-4" />
      </Pagination.PrevTrigger>

      <Pagination.Context>
        {(pagination) =>
          pagination().pages.map((page, index) =>
            page.type === "page" ? (
              <Pagination.Item
                key={index}
                {...page}
                class="inline-flex items-center justify-center w-8 h-8 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-selected:bg-blue-500 data-selected:text-white data-selected:hover:bg-blue-600"
              >
                {page.value}
              </Pagination.Item>
            ) : (
              <Pagination.Ellipsis
                key={index}
                index={index}
                class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400"
              >
                &#8230;
              </Pagination.Ellipsis>
            )
          )
        }
      </Pagination.Context>

      <Pagination.NextTrigger class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:pointer-events-none">
        <ChevronRight class="w-4 h-4" />
      </Pagination.NextTrigger>

      <Pagination.Context>
        {(pagination) => (
          <button
            onClick={() => pagination().goToLastPage()}
            disabled={pagination().page === pagination().totalPages}
            class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
          >
            <ChevronsRight class="w-4 h-4" />
          </button>
        )}
      </Pagination.Context>
    </Pagination.Root>
  );
}
