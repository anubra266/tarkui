"use client";

import { ToggleGroup } from "@ark-ui/react/toggle-group";

export default function ToggleGroupBasic() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <ToggleGroup.Root className="inline-flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
        <ToggleGroup.Item
          value="left"
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-white dark:hover:bg-gray-600 data-[state=on]:bg-white dark:data-[state=on]:bg-gray-600 data-[state=on]:text-gray-900 dark:data-[state=on]:text-white data-[state=on]:shadow-sm transition-all"
        >
          Left
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="center"
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-white dark:hover:bg-gray-600 data-[state=on]:bg-white dark:data-[state=on]:bg-gray-600 data-[state=on]:text-gray-900 dark:data-[state=on]:text-white data-[state=on]:shadow-sm transition-all"
        >
          Center
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="right"
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-white dark:hover:bg-gray-600 data-[state=on]:bg-white dark:data-[state=on]:bg-gray-600 data-[state=on]:text-gray-900 dark:data-[state=on]:text-white data-[state=on]:shadow-sm transition-all"
        >
          Right
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  );
}
