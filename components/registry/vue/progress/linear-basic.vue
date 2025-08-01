<script setup lang="ts">
import {
  Progress as ProgressRoot,
  ProgressTrack,
  ProgressRange,
} from "@ark-ui/vue/progress";
</script>

<template>
  <ProgressRoot :value="65" class="w-full max-w-sm mx-auto">
    <ProgressTrack
      class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
    >
      <ProgressRange
        class="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out rounded-full"
      />
    </ProgressTrack>
  </ProgressRoot>
</template>
