<script lang="ts">
  import { Progress } from "@ark-ui/svelte/progress";
</script>

<Progress.Root value={65} class="flex items-center justify-center">
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
</Progress.Root>
