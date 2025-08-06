"use client";

import { ToggleGroup } from "@ark-ui/solid/toggle-group";
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Link,
} from "lucide-solid";

export default function ToggleGroupToolbar() {
  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <div class="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
        {/* Text Formatting */}
        <ToggleGroup.Root
          multiple
          class="inline-flex border-r border-gray-200 dark:border-gray-600 pr-3"
        >
          <ToggleGroup.Item
            value="bold"
            class="p-2 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-600 data-[state=on]:bg-blue-100 dark:data-[state=on]:bg-blue-900/30 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300 transition-all"
          >
            <Bold class="w-4 h-4" />
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="italic"
            class="p-2 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-600 data-[state=on]:bg-blue-100 dark:data-[state=on]:bg-blue-900/30 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300 transition-all"
          >
            <Italic class="w-4 h-4" />
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="underline"
            class="p-2 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-600 data-[state=on]:bg-blue-100 dark:data-[state=on]:bg-blue-900/30 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300 transition-all"
          >
            <Underline class="w-4 h-4" />
          </ToggleGroup.Item>
        </ToggleGroup.Root>

        {/* Text Alignment */}
        <ToggleGroup.Root
          defaultValue={["left"]}
          class="inline-flex border-r border-gray-200 dark:border-gray-600 pr-3"
        >
          <ToggleGroup.Item
            value="left"
            class="p-2 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-600 data-[state=on]:bg-blue-100 dark:data-[state=on]:bg-blue-900/30 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300 transition-all"
          >
            <AlignLeft class="w-4 h-4" />
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="center"
            class="p-2 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-600 data-[state=on]:bg-blue-100 dark:data-[state=on]:bg-blue-900/30 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300 transition-all"
          >
            <AlignCenter class="w-4 h-4" />
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="right"
            class="p-2 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-600 data-[state=on]:bg-blue-100 dark:data-[state=on]:bg-blue-900/30 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300 transition-all"
          >
            <AlignRight class="w-4 h-4" />
          </ToggleGroup.Item>
        </ToggleGroup.Root>

        {/* Insert Options */}
        <ToggleGroup.Root multiple class="inline-flex">
          <ToggleGroup.Item
            value="link"
            class="p-2 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-600 data-[state=on]:bg-blue-100 dark:data-[state=on]:bg-blue-900/30 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300 transition-all"
          >
            <Link class="w-4 h-4" />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
    </div>
  );
}
