"use client";

import { Editable } from "@ark-ui/react/editable";
import { MousePointer2 } from "lucide-react";

export default function DoubleClick() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <Editable.Root
        placeholder="Double-click to edit..."
        defaultValue="Double-click me to edit"
        activationMode="dblclick"
      >
        <div className="flex items-center space-x-2 mb-2">
          <MousePointer2 className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Editable.Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Double-Click to Edit
          </Editable.Label>
        </div>
        <Editable.Area className="relative">
          <Editable.Input className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors min-h-10" />
          <Editable.Preview className="w-full px-3 py-2 text-sm border border-dashed border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer transition-colors min-h-10" />
        </Editable.Area>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          💡 Double-click the text above to start editing
        </p>
      </Editable.Root>
    </div>
  );
}
