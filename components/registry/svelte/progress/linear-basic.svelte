<script lang="ts">
  import { Progress } from "@ark-ui/svelte/progress";
</script>

<Progress.Root value={65} class="w-full max-w-sm mx-auto">
  <Progress.Track
    class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
  >
    <Progress.Range
      class="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out rounded-full"
    />
  </Progress.Track>
</Progress.Root>
