"use client";

import { Progress } from "@ark-ui/react/progress";

export default function LinearIndeterminate() {
  return (
    <Progress.Root value={null} className="w-full max-w-sm mx-auto space-y-2">
      <Progress.Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Loading...
      </Progress.Label>
      <Progress.Track className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
        <Progress.Range className="h-full bg-blue-600 dark:bg-blue-500 rounded-full absolute inset-0 animate-pulse" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-blue-600/20 to-transparent animate-[shimmer_2s_infinite] transform -translate-x-full" />
      </Progress.Track>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </Progress.Root>
  );
}
