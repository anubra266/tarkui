import { Progress } from "@ark-ui/solid/progress";

export default function LinearColors() {
  return (
    <div class="w-full max-w-sm mx-auto space-y-6">
      {/* Blue */}
      <Progress.Root value={75} class="w-full space-y-2">
        <Progress.Track class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <Progress.Range class="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out rounded-full" />
        </Progress.Track>
        <span class="text-xs text-gray-500 dark:text-gray-400">Blue</span>
      </Progress.Root>

      {/* Green */}
      <Progress.Root value={60} class="w-full space-y-2">
        <Progress.Track class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <Progress.Range class="h-full bg-green-600 dark:bg-green-500 transition-all duration-300 ease-out rounded-full" />
        </Progress.Track>
        <span class="text-xs text-gray-500 dark:text-gray-400">Green</span>
      </Progress.Root>

      {/* Orange */}
      <Progress.Root value={45} class="w-full space-y-2">
        <Progress.Track class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <Progress.Range class="h-full bg-orange-600 dark:bg-orange-500 transition-all duration-300 ease-out rounded-full" />
        </Progress.Track>
        <span class="text-xs text-gray-500 dark:text-gray-400">Orange</span>
      </Progress.Root>

      {/* Red */}
      <Progress.Root value={30} class="w-full space-y-2">
        <Progress.Track class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <Progress.Range class="h-full bg-red-600 dark:bg-red-500 transition-all duration-300 ease-out rounded-full" />
        </Progress.Track>
        <span class="text-xs text-gray-500 dark:text-gray-400">Red</span>
      </Progress.Root>
    </div>
  );
}
