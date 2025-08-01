"use client";

import { Progress } from "@ark-ui/react/progress";

export default function CircularWithLabel() {
  return (
    <Progress.Root
      defaultValue={65}
      className="flex flex-col items-center space-y-4"
    >
      <div className="relative">
        <Progress.Circle className="w-20 h-20 [--size:80px] [--thickness:4px]">
          <Progress.CircleTrack
            className="stroke-gray-200 dark:stroke-gray-700"
            strokeWidth="4"
            fill="none"
          />
          <Progress.CircleRange
            className="stroke-blue-600 dark:stroke-blue-500 transition-all duration-300 ease-out"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </Progress.Circle>
        <div className="absolute inset-0 flex items-center justify-center">
          <Progress.ValueText className="text-sm font-medium text-gray-700 dark:text-gray-300" />
        </div>
      </div>
      <Progress.Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Loading progress
      </Progress.Label>
    </Progress.Root>
  );
}
