<template>
  <div class="flex items-center space-x-4">
    <ProgressRoot :value="65" orientation="vertical" class="h-32">
      <ProgressTrack
        class="w-2 h-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden flex flex-col justify-end"
      >
        <ProgressRange
          class="w-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out rounded-full"
        />
      </ProgressTrack>
    </ProgressRoot>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-300"
      >65%</span
    >
  </div>
</template>

<script setup lang="ts">
import {
  Progress as ProgressRoot,
  ProgressTrack,
  ProgressRange,
} from "@ark-ui/vue/progress";
</script>
