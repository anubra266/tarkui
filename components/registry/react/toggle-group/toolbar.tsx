"use client";

import { ToggleGroup } from "@ark-ui/react/toggle-group";
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Link,
} from "lucide-react";

export default function ToggleGroupToolbar() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
        {/* Text Formatting */}
        <ToggleGroup.Root
          multiple
          className="inline-flex border-r border-gray-200 dark:border-gray-600 pr-3 gap-1"
        >
          <ToggleGroup.Item
            value="bold"
            className="p-2 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-600 data-[state=on]:bg-blue-100 dark:data-[state=on]:bg-blue-900/30 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300 transition-all"
          >
            <Bold className="w-4 h-4" />
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="italic"
            className="p-2 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-600 data-[state=on]:bg-blue-100 dark:data-[state=on]:bg-blue-900/30 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300 transition-all"
          >
            <Italic className="w-4 h-4" />
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="underline"
            className="p-2 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-600 data-[state=on]:bg-blue-100 dark:data-[state=on]:bg-blue-900/30 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300 transition-all"
          >
            <Underline className="w-4 h-4" />
          </ToggleGroup.Item>
        </ToggleGroup.Root>

        {/* Text Alignment */}
        <ToggleGroup.Root
          defaultValue={["left"]}
          className="inline-flex border-r border-gray-200 dark:border-gray-600 pr-3 gap-0.5"
        >
          <ToggleGroup.Item
            value="left"
            className="p-2 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-600 data-[state=on]:bg-blue-100 dark:data-[state=on]:bg-blue-900/30 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300 transition-all"
          >
            <AlignLeft className="w-4 h-4" />
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="center"
            className="p-2 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-600 data-[state=on]:bg-blue-100 dark:data-[state=on]:bg-blue-900/30 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300 transition-all"
          >
            <AlignCenter className="w-4 h-4" />
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="right"
            className="p-2 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-600 data-[state=on]:bg-blue-100 dark:data-[state=on]:bg-blue-900/30 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300 transition-all"
          >
            <AlignRight className="w-4 h-4" />
          </ToggleGroup.Item>
        </ToggleGroup.Root>

        {/* Insert Options */}
        <ToggleGroup.Root multiple className="inline-flex">
          <ToggleGroup.Item
            value="link"
            className="p-2 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-600 data-[state=on]:bg-blue-100 dark:data-[state=on]:bg-blue-900/30 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300 transition-all"
          >
            <Link className="w-4 h-4" />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
    </div>
  );
}
