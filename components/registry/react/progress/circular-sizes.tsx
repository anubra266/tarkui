"use client";

import { Progress } from "@ark-ui/react/progress";

export default function CircularSizes() {
  return (
    <div className="flex items-center justify-center gap-8">
      {/* Small */}
      <Progress.Root
        defaultValue={65}
        className="flex flex-col items-center space-y-2"
      >
        <Progress.Circle className="w-12 h-12 [--size:48px] [--thickness:3px]">
          <Progress.CircleTrack
            className="stroke-gray-200 dark:stroke-gray-700"
            strokeWidth="3"
            fill="none"
          />
          <Progress.CircleRange
            className="stroke-blue-600 dark:stroke-blue-500 transition-all duration-300 ease-out"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </Progress.Circle>
        <span className="text-xs text-gray-500 dark:text-gray-400">Small</span>
      </Progress.Root>

      {/* Medium */}
      <Progress.Root
        defaultValue={65}
        className="flex flex-col items-center space-y-2"
      >
        <Progress.Circle className="w-16 h-16 [--size:64px] [--thickness:4px]">
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
        <span className="text-xs text-gray-500 dark:text-gray-400">Medium</span>
      </Progress.Root>

      {/* Large */}
      <Progress.Root
        defaultValue={65}
        className="flex flex-col items-center space-y-2"
      >
        <Progress.Circle className="w-20 h-20 [--size:80px] [--thickness:5px]">
          <Progress.CircleTrack
            className="stroke-gray-200 dark:stroke-gray-700"
            strokeWidth="5"
            fill="none"
          />
          <Progress.CircleRange
            className="stroke-blue-600 dark:stroke-blue-500 transition-all duration-300 ease-out"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
        </Progress.Circle>
        <span className="text-xs text-gray-500 dark:text-gray-400">Large</span>
      </Progress.Root>
    </div>
  );
}
