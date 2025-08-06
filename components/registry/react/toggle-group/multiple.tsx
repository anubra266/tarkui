"use client";

import { ToggleGroup } from "@ark-ui/react/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";

export default function ToggleGroupMultiple() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <ToggleGroup.Root
        multiple
        defaultValue={["bold"]}
        className="inline-flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1 gap-1"
      >
        <ToggleGroup.Item
          value="bold"
          className="p-2 text-gray-700 dark:text-gray-300 rounded-md hover:bg-white dark:hover:bg-gray-600 data-[state=on]:bg-white dark:data-[state=on]:bg-gray-600 data-[state=on]:text-gray-900 dark:data-[state=on]:text-white data-[state=on]:shadow-sm transition-all"
        >
          <Bold className="w-4 h-4" />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="italic"
          className="p-2 text-gray-700 dark:text-gray-300 rounded-md hover:bg-white dark:hover:bg-gray-600 data-[state=on]:bg-white dark:data-[state=on]:bg-gray-600 data-[state=on]:text-gray-900 dark:data-[state=on]:text-white data-[state=on]:shadow-sm transition-all"
        >
          <Italic className="w-4 h-4" />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="underline"
          className="p-2 text-gray-700 dark:text-gray-300 rounded-md hover:bg-white dark:hover:bg-gray-600 data-[state=on]:bg-white dark:data-[state=on]:bg-gray-600 data-[state=on]:text-gray-900 dark:data-[state=on]:text-white data-[state=on]:shadow-sm transition-all"
        >
          <Underline className="w-4 h-4" />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  );
}
