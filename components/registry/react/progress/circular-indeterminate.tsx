"use client";

import { Progress } from "@ark-ui/react/progress";

export default function CircularIndeterminate() {
  return (
    <Progress.Root
      value={null}
      className="flex flex-col items-center space-y-4"
    >
      <Progress.Circle className="w-16 h-16 animate-spin [--size:64px] [--thickness:4px]">
        <Progress.CircleTrack
          className="stroke-gray-200 dark:stroke-gray-700"
          strokeWidth="4"
          fill="none"
        />
        <Progress.CircleRange
          className="stroke-blue-600 dark:stroke-blue-500"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="25 75"
        />
      </Progress.Circle>
      <Progress.Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Loading...
      </Progress.Label>
    </Progress.Root>
  );
}
