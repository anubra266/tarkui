"use client";

import { Progress } from "@ark-ui/react/progress";

export default function LinearColors() {
  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      {/* Blue */}
      <Progress.Root defaultValue={75} className="w-full space-y-2">
        <Progress.Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Blue
        </Progress.Label>
        <Progress.Track className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <Progress.Range className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out rounded-full" />
        </Progress.Track>
      </Progress.Root>

      {/* Green */}
      <Progress.Root defaultValue={60} className="w-full space-y-2">
        <Progress.Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Green
        </Progress.Label>
        <Progress.Track className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <Progress.Range className="h-full bg-green-600 dark:bg-green-500 transition-all duration-300 ease-out rounded-full" />
        </Progress.Track>
      </Progress.Root>

      {/* Orange */}
      <Progress.Root defaultValue={45} className="w-full space-y-2">
        <Progress.Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Orange
        </Progress.Label>
        <Progress.Track className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <Progress.Range className="h-full bg-orange-600 dark:bg-orange-500 transition-all duration-300 ease-out rounded-full" />
        </Progress.Track>
      </Progress.Root>

      {/* Red */}
      <Progress.Root defaultValue={30} className="w-full space-y-2">
        <Progress.Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Red
        </Progress.Label>
        <Progress.Track className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <Progress.Range className="h-full bg-red-600 dark:bg-red-500 transition-all duration-300 ease-out rounded-full" />
        </Progress.Track>
      </Progress.Root>
    </div>
  );
}
