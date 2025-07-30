"use client";

import { NumberInput } from "@ark-ui/solid/number-input";
import { Plus, Minus } from "lucide-solid";

export default function Quantity() {
  return (
    <div class="flex items-center justify-center min-h-32">
      <NumberInput.Root class="">
        <NumberInput.Label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
          Amount
        </NumberInput.Label>
        <NumberInput.Control class="relative inline-flex h-9 w-full items-center overflow-hidden rounded-md border border-gray-200 dark:border-gray-700 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-hidden data-disabled:opacity-50 focus-within:ring-[3px] focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500 dark:focus-within:border-blue-400">
          <NumberInput.DecrementTrigger class="-ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
            <Minus class="w-4 h-4" />
          </NumberInput.DecrementTrigger>
          <NumberInput.Input class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 w-full grow px-3 py-2 text-center tabular-nums border-none outline-hidden focus:outline-hidden focus-visible:outline-hidden" />
          <NumberInput.IncrementTrigger class="-me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
            <Plus class="w-4 h-4" />
          </NumberInput.IncrementTrigger>
        </NumberInput.Control>
        <div class="text-xs text-gray-500 dark:text-gray-400 mt-3">
          Enter number of items
        </div>
      </NumberInput.Root>
    </div>
  );
}
