<template>
  <div class="w-full max-w-sm mx-auto space-y-6">
    <!-- Small -->
    <ProgressRoot :value="65" class="w-full space-y-2">
      <ProgressTrack
        class="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
      >
        <ProgressRange
          class="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out rounded-full"
        />
      </ProgressTrack>
      <span class="text-xs text-gray-500 dark:text-gray-400">Small (4px)</span>
    </ProgressRoot>

    <!-- Medium -->
    <ProgressRoot :value="65" class="w-full space-y-2">
      <ProgressTrack
        class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
      >
        <ProgressRange
          class="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out rounded-full"
        />
      </ProgressTrack>
      <span class="text-xs text-gray-500 dark:text-gray-400">Medium (8px)</span>
    </ProgressRoot>

    <!-- Large -->
    <ProgressRoot :value="65" class="w-full space-y-2">
      <ProgressTrack
        class="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
      >
        <ProgressRange
          class="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out rounded-full"
        />
      </ProgressTrack>
      <span class="text-xs text-gray-500 dark:text-gray-400">Large (12px)</span>
    </ProgressRoot>
  </div>
</template>

<script setup lang="ts">
import {
  Progress as ProgressRoot,
  ProgressTrack,
  ProgressRange,
} from "@ark-ui/vue/progress";
</script>
