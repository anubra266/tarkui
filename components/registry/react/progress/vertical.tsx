"use client";

import { Progress } from "@ark-ui/react/progress";

export default function Vertical() {
  return (
    <div className="flex items-center justify-center gap-8 h-48">
      {/* With Label */}
      <div className="flex flex-col items-center space-y-3">
        <Progress.Root
          defaultValue={65}
          orientation="vertical"
          className="h-32"
        >
          <Progress.Track className="w-2 h-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden flex flex-col justify-end">
            <Progress.Range className="w-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out rounded-full" />
          </Progress.Track>
        </Progress.Root>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          65%
        </span>
      </div>

      {/* Different Heights */}
      <div className="flex items-end gap-4 h-32">
        <Progress.Root
          defaultValue={40}
          orientation="vertical"
          className="h-20"
        >
          <Progress.Track className="w-2 h-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden flex flex-col justify-end">
            <Progress.Range className="w-full bg-green-600 dark:bg-green-500 transition-all duration-300 ease-out rounded-full" />
          </Progress.Track>
        </Progress.Root>

        <Progress.Root
          defaultValue={75}
          orientation="vertical"
          className="h-28"
        >
          <Progress.Track className="w-2 h-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden flex flex-col justify-end">
            <Progress.Range className="w-full bg-orange-600 dark:bg-orange-500 transition-all duration-300 ease-out rounded-full" />
          </Progress.Track>
        </Progress.Root>

        <Progress.Root
          defaultValue={90}
          orientation="vertical"
          className="h-32"
        >
          <Progress.Track className="w-2 h-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden flex flex-col justify-end">
            <Progress.Range className="w-full bg-red-600 dark:bg-red-500 transition-all duration-300 ease-out rounded-full" />
          </Progress.Track>
        </Progress.Root>
      </div>
    </div>
  );
}
