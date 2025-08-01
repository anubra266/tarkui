<template>
  <ProgressRoot class="w-full max-w-sm mx-auto">
    <ProgressTrack
      class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
    >
      <ProgressRange
        class="h-full bg-blue-600 dark:bg-blue-500 rounded-full animate-pulse"
      />
    </ProgressTrack>
  </ProgressRoot>
</template>

<script setup lang="ts">
import {
  Progress as ProgressRoot,
  ProgressTrack,
  ProgressRange,
} from "@ark-ui/vue/progress";
</script>
