<template>
  <ProgressRoot :value="65" class="flex flex-col items-center space-y-4">
    <div class="relative">
      <ProgressCircle class="w-20 h-20 [--size:80px] [--thickness:4px]">
        <ProgressCircleTrack
          class="stroke-gray-200 dark:stroke-gray-700"
          stroke-width="4"
          fill="none"
        />
        <ProgressCircleRange
          class="stroke-blue-600 dark:stroke-blue-500 transition-all duration-300 ease-out"
          stroke-width="4"
          fill="none"
          stroke-linecap="round"
        />
      </ProgressCircle>
      <div class="absolute inset-0 flex items-center justify-center">
        <ProgressValueText
          class="text-sm font-medium text-gray-900 dark:text-gray-100"
        />
      </div>
    </div>
    <ProgressLabel class="text-sm font-medium text-gray-700 dark:text-gray-300">
      Upload progress
    </ProgressLabel>
  </ProgressRoot>
</template>

<script setup lang="ts">
import {
  Progress as ProgressRoot,
  ProgressLabel,
  ProgressValueText,
  ProgressCircle,
  ProgressCircleTrack,
  ProgressCircleRange,
} from "@ark-ui/vue/progress";
</script>
