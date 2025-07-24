"use client";

import { Editable } from "@ark-ui/react/editable";
import { AlignLeft } from "lucide-react";

export default function AutoResize() {
  return (
    <div className="w-full max-w-lg space-y-3">
      <Editable.Root
        placeholder="Type a longer message and watch it grow..."
        defaultValue="Short text"
        autoResize
      >
        <div className="flex items-center space-x-2 mb-2">
          <AlignLeft className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Editable.Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Auto-Resizing Text Area
          </Editable.Label>
        </div>
        <Editable.Area className="relative">
          <Editable.Input className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors resize-none min-h-[2.5rem]" />
          <Editable.Preview className="w-full px-3 py-2 text-sm border border-transparent rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white hover:border-gray-300 dark:hover:border-gray-600 cursor-text transition-colors min-h-[2.5rem] whitespace-pre-wrap" />
        </Editable.Area>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          Click to edit • The text area will automatically resize as you type
        </p>
      </Editable.Root>
    </div>
  );
}
