import { Progress } from "@ark-ui/solid/progress";

export default function CircularColors() {
  return (
    <div class="flex items-center justify-center space-x-8">
      {/* Blue */}
      <Progress.Root value={75} class="flex flex-col items-center space-y-2">
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
        <span class="text-xs text-gray-500 dark:text-gray-400">Blue</span>
      </Progress.Root>

      {/* Green */}
      <Progress.Root value={60} class="flex flex-col items-center space-y-2">
        <Progress.Circle class="w-16 h-16 [--size:64px] [--thickness:4px]">
          <Progress.CircleTrack
            class="stroke-gray-200 dark:stroke-gray-700"
            stroke-width="4"
            fill="none"
          />
          <Progress.CircleRange
            class="stroke-green-600 dark:stroke-green-500 transition-all duration-300 ease-out"
            stroke-width="4"
            fill="none"
            stroke-linecap="round"
          />
        </Progress.Circle>
        <span class="text-xs text-gray-500 dark:text-gray-400">Green</span>
      </Progress.Root>

      {/* Orange */}
      <Progress.Root value={45} class="flex flex-col items-center space-y-2">
        <Progress.Circle class="w-16 h-16 [--size:64px] [--thickness:4px]">
          <Progress.CircleTrack
            class="stroke-gray-200 dark:stroke-gray-700"
            stroke-width="4"
            fill="none"
          />
          <Progress.CircleRange
            class="stroke-orange-600 dark:stroke-orange-500 transition-all duration-300 ease-out"
            stroke-width="4"
            fill="none"
            stroke-linecap="round"
          />
        </Progress.Circle>
        <span class="text-xs text-gray-500 dark:text-gray-400">Orange</span>
      </Progress.Root>

      {/* Red */}
      <Progress.Root value={30} class="flex flex-col items-center space-y-2">
        <Progress.Circle class="w-16 h-16 [--size:64px] [--thickness:4px]">
          <Progress.CircleTrack
            class="stroke-gray-200 dark:stroke-gray-700"
            stroke-width="4"
            fill="none"
          />
          <Progress.CircleRange
            class="stroke-red-600 dark:stroke-red-500 transition-all duration-300 ease-out"
            stroke-width="4"
            fill="none"
            stroke-linecap="round"
          />
        </Progress.Circle>
        <span class="text-xs text-gray-500 dark:text-gray-400">Red</span>
      </Progress.Root>
    </div>
  );
}
