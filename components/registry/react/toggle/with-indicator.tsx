"use client";

import { Toggle } from "@ark-ui/react/toggle";
import { Volume, VolumeX } from "lucide-react";

export default function ToggleWithIndicator() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <Toggle.Root className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 data-[state=on]:bg-green-100 dark:data-[state=on]:bg-green-900/30 data-[state=on]:text-green-700 dark:data-[state=on]:text-green-300 data-[state=on]:border-green-300 dark:data-[state=on]:border-green-600 transition-all text-sm font-medium">
        <Toggle.Indicator fallback={<Volume className="w-4 h-4" />}>
          <VolumeX className="w-4 h-4" />
        </Toggle.Indicator>
        <Toggle.Indicator fallback="Unmuted">Muted</Toggle.Indicator>
      </Toggle.Root>
    </div>
  );
}
