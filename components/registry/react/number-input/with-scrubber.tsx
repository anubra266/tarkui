"use client";

import { NumberInput } from "@ark-ui/react/number-input";
import { ChevronUp, ChevronDown, Move } from "lucide-react";

export default function WithScrubber() {
  return (
    <div className="flex items-center justify-center min-h-32">
      <NumberInput.Root defaultValue="42" step={1} className="w-72">
        <NumberInput.Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
          Interactive Value
        </NumberInput.Label>
        <NumberInput.Control className="border border-gray-200 dark:border-gray-700 rounded-lg h-9 overflow-hidden grid grid-cols-[1fr_24px] grid-rows-2 focus-within:ring-2 focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500 dark:focus-within:border-blue-400 transition-all">
          <div className="relative row-span-2">
            <NumberInput.Scrubber className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 cursor-ew-resize">
              <Move className="w-4 h-4" />
            </NumberInput.Scrubber>
            <NumberInput.Input className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-medium pl-10 pr-3 py-1 border-none outline-none focus:outline-none focus-visible:outline-none" />
          </div>
          <NumberInput.IncrementTrigger className="flex items-center justify-center bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer border-l border-gray-200 dark:border-gray-700">
            <ChevronUp className="w-3 h-3" />
          </NumberInput.IncrementTrigger>
          <NumberInput.DecrementTrigger className="flex items-center justify-center bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer border-l border-t border-gray-200 dark:border-gray-700">
            <ChevronDown className="w-3 h-3" />
          </NumberInput.DecrementTrigger>
        </NumberInput.Control>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-3">
          Drag the <Move className="w-3 h-3 inline mx-1" /> icon to scrub the
          value
        </div>
      </NumberInput.Root>
    </div>
  );
}
