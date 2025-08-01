import { Progress } from "@ark-ui/solid/progress";

export default function CircularSizes() {
  return (
    <div class="flex items-center justify-center space-x-8">
      {/* Small */}
      <Progress.Root value={65} class="flex flex-col items-center space-y-2">
        <Progress.Circle class="w-12 h-12 [--size:48px] [--thickness:3px]">
          <Progress.CircleTrack
            class="stroke-gray-200 dark:stroke-gray-700"
            stroke-width="3"
            fill="none"
          />
          <Progress.CircleRange
            class="stroke-blue-600 dark:stroke-blue-500 transition-all duration-300 ease-out"
            stroke-width="3"
            fill="none"
            stroke-linecap="round"
          />
        </Progress.Circle>
        <span class="text-xs text-gray-500 dark:text-gray-400">Small</span>
      </Progress.Root>

      {/* Medium */}
      <Progress.Root value={65} class="flex flex-col items-center space-y-2">
        <Progress.Circle class="w-16 h-16 [--size:64px] [--thickness:4px]">
          <Progress.CircleTrack
            class="stroke-gray-200 dark:stroke-gray-700"
            stroke-width="4"
            fill="none"
          />
          <Progress.CircleRange
            class="stroke-blue-600 dark:stroke-blue-500 transition-all duration-300 ease-out"
            stroke-width="4"
            fill="none"
            stroke-linecap="round"
          />
        </Progress.Circle>
        <span class="text-xs text-gray-500 dark:text-gray-400">Medium</span>
      </Progress.Root>

      {/* Large */}
      <Progress.Root value={65} class="flex flex-col items-center space-y-2">
        <Progress.Circle class="w-20 h-20 [--size:80px] [--thickness:5px]">
          <Progress.CircleTrack
            class="stroke-gray-200 dark:stroke-gray-700"
            stroke-width="5"
            fill="none"
          />
          <Progress.CircleRange
            class="stroke-blue-600 dark:stroke-blue-500 transition-all duration-300 ease-out"
            stroke-width="5"
            fill="none"
            stroke-linecap="round"
          />
        </Progress.Circle>
        <span class="text-xs text-gray-500 dark:text-gray-400">Large</span>
      </Progress.Root>
    </div>
  );
}
