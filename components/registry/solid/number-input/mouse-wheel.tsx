"use client";

import { NumberInput } from "@ark-ui/solid/number-input";
import { ChevronUp, ChevronDown, MousePointer } from "lucide-solid";

export default function MouseWheel() {
  return (
    <div class="flex items-center justify-center min-h-32">
      <NumberInput.Root
        defaultValue="100"
        min={0}
        max={1000}
        step={10}
        allowMouseWheel={true}
        class="w-64"
      >
        <NumberInput.Label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
          Volume Level
        </NumberInput.Label>
        <NumberInput.Control class="border border-gray-200 dark:border-gray-700 rounded-lg h-9 overflow-hidden grid grid-cols-[1fr_24px] grid-rows-2 focus-within:ring-2 focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500 dark:focus-within:border-blue-400 transition-all">
          <NumberInput.Input class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-medium px-3 py-1 row-span-2 border-none outline-none focus:outline-none focus-visible:outline-none" />
          <NumberInput.IncrementTrigger class="flex items-center justify-center bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer border-l border-gray-200 dark:border-gray-700">
            <ChevronUp class="w-3 h-3" />
          </NumberInput.IncrementTrigger>
          <NumberInput.DecrementTrigger class="flex items-center justify-center bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer border-l border-t border-gray-200 dark:border-gray-700">
            <ChevronDown class="w-3 h-3" />
          </NumberInput.DecrementTrigger>
        </NumberInput.Control>
        <div class="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-3 gap-1">
          <MousePointer class="w-3 h-3" />
          <span>Focus and use mouse wheel to change</span>
        </div>
      </NumberInput.Root>
    </div>
  );
}
