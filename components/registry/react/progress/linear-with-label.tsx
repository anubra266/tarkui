"use client";

import { Progress } from "@ark-ui/react/progress";

export default function LinearWithLabel() {
  return (
    <Progress.Root
      defaultValue={65}
      className="w-full max-w-sm mx-auto space-y-2"
    >
      <div className="flex justify-between items-center">
        <Progress.Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Loading progress
        </Progress.Label>
        <Progress.ValueText className="text-sm text-gray-500 dark:text-gray-400" />
      </div>
      <Progress.Track className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <Progress.Range className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out rounded-full" />
      </Progress.Track>
    </Progress.Root>
  );
}
