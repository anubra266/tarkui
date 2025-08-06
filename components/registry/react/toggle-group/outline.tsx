"use client";

import { ToggleGroup } from "@ark-ui/react/toggle-group";

export default function ToggleGroupOutline() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <ToggleGroup.Root className="inline-flex border border-gray-200 dark:border-gray-600 rounded-lg">
        <ToggleGroup.Item
          value="day"
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-600 first:rounded-l-lg last:rounded-r-lg last:border-r-0 hover:bg-gray-50 dark:hover:bg-gray-700 data-[state=on]:bg-blue-50 dark:data-[state=on]:bg-blue-900/20 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300 data-[state=on]:border-blue-200 dark:data-[state=on]:border-blue-600 transition-all"
        >
          Day
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="week"
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-600 first:rounded-l-lg last:rounded-r-lg last:border-r-0 hover:bg-gray-50 dark:hover:bg-gray-700 data-[state=on]:bg-blue-50 dark:data-[state=on]:bg-blue-900/20 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300 data-[state=on]:border-blue-200 dark:data-[state=on]:border-blue-600 transition-all"
        >
          Week
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="month"
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-600 first:rounded-l-lg last:rounded-r-lg last:border-r-0 hover:bg-gray-50 dark:hover:bg-gray-700 data-[state=on]:bg-blue-50 dark:data-[state=on]:bg-blue-900/20 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300 data-[state=on]:border-blue-200 dark:data-[state=on]:border-blue-600 transition-all"
        >
          Month
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="year"
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-600 first:rounded-l-lg last:rounded-r-lg last:border-r-0 hover:bg-gray-50 dark:hover:bg-gray-700 data-[state=on]:bg-blue-50 dark:data-[state=on]:bg-blue-900/20 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300 data-[state=on]:border-blue-200 dark:data-[state=on]:border-blue-600 transition-all"
        >
          Year
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  );
}
