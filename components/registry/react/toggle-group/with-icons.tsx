"use client";

import { ToggleGroup } from "@ark-ui/react/toggle-group";
import { Grid, List, Calendar } from "lucide-react";

export default function ToggleGroupWithIcons() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <ToggleGroup.Root
        defaultValue={["grid"]}
        className="inline-flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1"
      >
        <ToggleGroup.Item
          value="grid"
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-white dark:hover:bg-gray-600 data-[state=on]:bg-white dark:data-[state=on]:bg-gray-600 data-[state=on]:text-gray-900 dark:data-[state=on]:text-white data-[state=on]:shadow-sm transition-all"
        >
          <Grid className="w-4 h-4" />
          Grid
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="list"
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-white dark:hover:bg-gray-600 data-[state=on]:bg-white dark:data-[state=on]:bg-gray-600 data-[state=on]:text-gray-900 dark:data-[state=on]:text-white data-[state=on]:shadow-sm transition-all"
        >
          <List className="w-4 h-4" />
          List
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="calendar"
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-white dark:hover:bg-gray-600 data-[state=on]:bg-white dark:data-[state=on]:bg-gray-600 data-[state=on]:text-gray-900 dark:data-[state=on]:text-white data-[state=on]:shadow-sm transition-all"
        >
          <Calendar className="w-4 h-4" />
          Calendar
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  );
}
