import { Progress } from "@ark-ui/solid/progress";

export default function Vertical() {
  return (
    <div class="flex items-center space-x-4">
      <Progress.Root value={65} orientation="vertical" class="h-32">
        <Progress.Track class="w-2 h-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden flex flex-col justify-end">
          <Progress.Range class="w-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out rounded-full" />
        </Progress.Track>
      </Progress.Root>
      <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
        65%
      </span>
    </div>
  );
}
