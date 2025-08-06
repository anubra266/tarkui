"use client";

import { Toggle } from "@ark-ui/react/toggle";
import { Bold, Italic } from "lucide-react";

export default function ToggleDisabled() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center space-y-8">
      {/* Disabled in off state */}
      <div className="flex flex-col items-center gap-2">
        <label className="text-xs font-medium text-gray-600 dark:text-gray-400">
          Disabled (Off)
        </label>
        <Toggle.Root
          disabled
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed opacity-50 text-sm font-medium"
        >
          <Bold className="w-4 h-4" />
          Bold
        </Toggle.Root>
      </div>

      {/* Disabled in on state */}
      <div className="flex flex-col items-center gap-2">
        <label className="text-xs font-medium text-gray-600 dark:text-gray-400">
          Disabled (On)
        </label>
        <Toggle.Root
          disabled
          defaultPressed
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-blue-300 dark:border-blue-600 bg-blue-100 dark:bg-blue-900/30 text-blue-400 dark:text-blue-400 cursor-not-allowed opacity-50 text-sm font-medium"
        >
          <Italic className="w-4 h-4" />
          Italic
        </Toggle.Root>
      </div>
    </div>
  );
}
