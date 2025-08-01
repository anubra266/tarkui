"use client";

import { Progress } from "@ark-ui/react/progress";

export default function CircularBasic() {
  return (
    <Progress.Root
      defaultValue={65}
      className="flex items-center justify-center"
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
    </Progress.Root>
  );
}
