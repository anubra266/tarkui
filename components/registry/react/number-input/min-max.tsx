"use client";

import { NumberInput } from "@ark-ui/react/number-input";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function MinMax() {
  return (
    <div className="flex items-center justify-center min-h-32">
      <NumberInput.Root
        defaultValue="5"
        min={0}
        max={10}
        step={1}
        clampValueOnBlur={true}
        className="w-64"
      >
        <NumberInput.Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
          Rating (0-10)
        </NumberInput.Label>
        <NumberInput.Control className="border border-gray-200 dark:border-gray-700 rounded-lg h-9 overflow-hidden grid grid-cols-[1fr_24px] grid-rows-2 focus-within:ring-2 focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500/50 dark:focus-within:border-blue-400/50 transition-all">
          <NumberInput.Input className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-medium px-3 py-1 row-span-2 border-none outline-none focus:outline-none focus-visible:outline-none" />
          <NumberInput.IncrementTrigger className="flex items-center justify-center bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer border-l border-gray-200 dark:border-gray-700 data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed">
            <ChevronUp className="w-3 h-3" />
          </NumberInput.IncrementTrigger>
          <NumberInput.DecrementTrigger className="flex items-center justify-center bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer border-l border-t border-gray-200 dark:border-gray-700 data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed">
            <ChevronDown className="w-3 h-3" />
          </NumberInput.DecrementTrigger>
        </NumberInput.Control>
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-3">
          <span>Min: 0</span>
          <span>Max: 10</span>
        </div>
      </NumberInput.Root>
    </div>
  );
}
