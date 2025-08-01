<template>
  <div class="w-full max-w-sm mx-auto space-y-6">
    <!-- Blue -->
    <ProgressRoot :value="75" class="w-full space-y-2">
      <ProgressTrack
        class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
      >
        <ProgressRange
          class="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out rounded-full"
        />
      </ProgressTrack>
      <span class="text-xs text-gray-500 dark:text-gray-400">Blue</span>
    </ProgressRoot>

    <!-- Green -->
    <ProgressRoot :value="60" class="w-full space-y-2">
      <ProgressTrack
        class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
      >
        <ProgressRange
          class="h-full bg-green-600 dark:bg-green-500 transition-all duration-300 ease-out rounded-full"
        />
      </ProgressTrack>
      <span class="text-xs text-gray-500 dark:text-gray-400">Green</span>
    </ProgressRoot>

    <!-- Orange -->
    <ProgressRoot :value="45" class="w-full space-y-2">
      <ProgressTrack
        class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
      >
        <ProgressRange
          class="h-full bg-orange-600 dark:bg-orange-500 transition-all duration-300 ease-out rounded-full"
        />
      </ProgressTrack>
      <span class="text-xs text-gray-500 dark:text-gray-400">Orange</span>
    </ProgressRoot>

    <!-- Red -->
    <ProgressRoot :value="30" class="w-full space-y-2">
      <ProgressTrack
        class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
      >
        <ProgressRange
          class="h-full bg-red-600 dark:bg-red-500 transition-all duration-300 ease-out rounded-full"
        />
      </ProgressTrack>
      <span class="text-xs text-gray-500 dark:text-gray-400">Red</span>
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
