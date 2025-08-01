"use client";

import { Progress } from "@ark-ui/react/progress";

export default function CircularColors() {
  return (
    <div className="flex items-center justify-center gap-6">
      {/* Blue */}
      <Progress.Root
        defaultValue={75}
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
        <span className="text-xs text-gray-500 dark:text-gray-400">Blue</span>
      </Progress.Root>

      {/* Green */}
      <Progress.Root
        defaultValue={60}
        className="flex flex-col items-center space-y-2"
      >
        <Progress.Circle className="w-16 h-16 [--size:64px] [--thickness:4px]">
          <Progress.CircleTrack
            className="stroke-gray-200 dark:stroke-gray-700"
            strokeWidth="4"
            fill="none"
          />
          <Progress.CircleRange
            className="stroke-green-600 dark:stroke-green-500 transition-all duration-300 ease-out"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </Progress.Circle>
        <span className="text-xs text-gray-500 dark:text-gray-400">Green</span>
      </Progress.Root>

      {/* Orange */}
      <Progress.Root
        defaultValue={45}
        className="flex flex-col items-center space-y-2"
      >
        <Progress.Circle className="w-16 h-16 [--size:64px] [--thickness:4px]">
          <Progress.CircleTrack
            className="stroke-gray-200 dark:stroke-gray-700"
            strokeWidth="4"
            fill="none"
          />
          <Progress.CircleRange
            className="stroke-orange-600 dark:stroke-orange-500 transition-all duration-300 ease-out"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </Progress.Circle>
        <span className="text-xs text-gray-500 dark:text-gray-400">Orange</span>
      </Progress.Root>

      {/* Red */}
      <Progress.Root
        defaultValue={30}
        className="flex flex-col items-center space-y-2"
      >
        <Progress.Circle className="w-16 h-16 [--size:64px] [--thickness:4px]">
          <Progress.CircleTrack
            className="stroke-gray-200 dark:stroke-gray-700"
            strokeWidth="4"
            fill="none"
          />
          <Progress.CircleRange
            className="stroke-red-600 dark:stroke-red-500 transition-all duration-300 ease-out"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </Progress.Circle>
        <span className="text-xs text-gray-500 dark:text-gray-400">Red</span>
      </Progress.Root>
    </div>
  );
}
