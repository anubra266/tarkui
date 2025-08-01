<script lang="ts">
  import { Progress } from "@ark-ui/svelte/progress";
</script>

<Progress.Root class="flex flex-col items-center space-y-4">
  <Progress.Circle
    class="w-16 h-16 animate-spin [--size:64px] [--thickness:4px]"
  >
    <Progress.CircleTrack
      class="stroke-gray-200 dark:stroke-gray-700"
      stroke-width="4"
      fill="none"
    />
    <Progress.CircleRange
      class="stroke-blue-600 dark:stroke-blue-500"
      stroke-width="4"
      fill="none"
      stroke-linecap="round"
      stroke-dasharray="1, 200"
      stroke-dashoffset="0"
    />
  </Progress.Circle>
  <span class="text-sm text-gray-500 dark:text-gray-400">Loading...</span>
</Progress.Root>
