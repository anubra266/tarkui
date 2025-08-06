"use client";

import { Toggle } from "@ark-ui/solid/toggle";
import { Star } from "lucide-solid";

export default function ToggleWithText() {
  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <Toggle.Root class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 data-[state=on]:bg-blue-100 dark:data-[state=on]:bg-blue-900/30 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300 data-[state=on]:border-blue-300 dark:data-[state=on]:border-blue-600 transition-all text-sm font-medium">
        <Star class="w-4 h-4" />
        Favorite
      </Toggle.Root>
    </div>
  );
}
