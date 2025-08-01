<script lang="ts">
  import { Progress } from "@ark-ui/svelte/progress";
</script>

<Progress.Root value={65} class="flex flex-col items-center space-y-4">
  <div class="relative">
    <Progress.Circle class="w-20 h-20 [--size:80px] [--thickness:4px]">
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
    <div class="absolute inset-0 flex items-center justify-center">
      <Progress.ValueText
        class="text-sm font-medium text-gray-900 dark:text-gray-100"
      />
    </div>
  </div>
  <Progress.Label class="text-sm font-medium text-gray-700 dark:text-gray-300">
    Upload progress
  </Progress.Label>
</Progress.Root>
