"use client";

import { ToggleGroup } from "@ark-ui/solid/toggle-group";
import { Grid, List, Calendar } from "lucide-solid";

export default function ToggleGroupWithIcons() {
  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <ToggleGroup.Root
        defaultValue={["grid"]}
        class="inline-flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1"
      >
        <ToggleGroup.Item
          value="grid"
          class="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-white dark:hover:bg-gray-600 data-[state=on]:bg-white dark:data-[state=on]:bg-gray-600 data-[state=on]:text-gray-900 dark:data-[state=on]:text-white data-[state=on]:shadow-sm transition-all"
        >
          <Grid class="w-4 h-4" />
          Grid
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="list"
          class="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-white dark:hover:bg-gray-600 data-[state=on]:bg-white dark:data-[state=on]:bg-gray-600 data-[state=on]:text-gray-900 dark:data-[state=on]:text-white data-[state=on]:shadow-sm transition-all"
        >
          <List class="w-4 h-4" />
          List
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="calendar"
          class="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-white dark:hover:bg-gray-600 data-[state=on]:bg-white dark:data-[state=on]:bg-gray-600 data-[state=on]:text-gray-900 dark:data-[state=on]:text-white data-[state=on]:shadow-sm transition-all"
        >
          <Calendar class="w-4 h-4" />
          Calendar
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  );
}
