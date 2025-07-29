"use client";

import { Pagination } from "@ark-ui/react/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WithInfo() {
  return (
    <Pagination.Root
      count={100}
      pageSize={10}
      siblingCount={2}
      className="flex items-center justify-between w-full"
    >
      <Pagination.PrevTrigger className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:ring-offset-1 transition-colors data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:pointer-events-none">
        <ChevronLeft className="w-4 h-4" />
        Previous
      </Pagination.PrevTrigger>

      <Pagination.Context>
        {(pagination) => (
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Page {pagination.page} of {pagination.totalPages}
          </div>
        )}
      </Pagination.Context>

      <Pagination.NextTrigger className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:ring-offset-1 transition-colors data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:pointer-events-none">
        Next
        <ChevronRight className="w-4 h-4" />
      </Pagination.NextTrigger>
    </Pagination.Root>
  );
}
