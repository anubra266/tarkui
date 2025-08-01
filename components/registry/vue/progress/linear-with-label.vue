<template>
  <ProgressRoot :value="65" class="w-full max-w-sm mx-auto space-y-2">
    <div class="flex justify-between items-center">
      <ProgressLabel
        class="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Loading progress
      </ProgressLabel>
      <ProgressValueText class="text-sm text-gray-500 dark:text-gray-400" />
    </div>
    <ProgressTrack
      class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
    >
      <ProgressRange
        class="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out rounded-full"
      />
    </ProgressTrack>
  </ProgressRoot>
</template>

<script setup lang="ts">
import {
  Progress as ProgressRoot,
  ProgressLabel,
  ProgressValueText,
  ProgressTrack,
  ProgressRange,
} from "@ark-ui/vue/progress";
</script>
