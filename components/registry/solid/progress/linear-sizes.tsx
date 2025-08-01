import { Progress } from "@ark-ui/solid/progress";

export default function LinearSizes() {
  return (
    <div class="w-full max-w-sm mx-auto space-y-6">
      {/* Small */}
      <Progress.Root value={65} class="w-full space-y-2">
        <Progress.Track class="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <Progress.Range class="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out rounded-full" />
        </Progress.Track>
        <span class="text-xs text-gray-500 dark:text-gray-400">
          Small (4px)
        </span>
      </Progress.Root>

      {/* Medium */}
      <Progress.Root value={65} class="w-full space-y-2">
        <Progress.Track class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <Progress.Range class="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out rounded-full" />
        </Progress.Track>
        <span class="text-xs text-gray-500 dark:text-gray-400">
          Medium (8px)
        </span>
      </Progress.Root>

      {/* Large */}
      <Progress.Root value={65} class="w-full space-y-2">
        <Progress.Track class="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <Progress.Range class="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out rounded-full" />
        </Progress.Track>
        <span class="text-xs text-gray-500 dark:text-gray-400">
          Large (12px)
        </span>
      </Progress.Root>
    </div>
  );
}
