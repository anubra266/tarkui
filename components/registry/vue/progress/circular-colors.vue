<template>
  <div class="flex items-center justify-center space-x-8">
    <!-- Blue -->
    <ProgressRoot :value="75" class="flex flex-col items-center space-y-2">
      <ProgressCircle class="w-16 h-16 [--size:64px] [--thickness:4px]">
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
      <span class="text-xs text-gray-500 dark:text-gray-400">Blue</span>
    </ProgressRoot>

    <!-- Green -->
    <ProgressRoot :value="60" class="flex flex-col items-center space-y-2">
      <ProgressCircle class="w-16 h-16 [--size:64px] [--thickness:4px]">
        <ProgressCircleTrack
          class="stroke-gray-200 dark:stroke-gray-700"
          stroke-width="4"
          fill="none"
        />
        <ProgressCircleRange
          class="stroke-green-600 dark:stroke-green-500 transition-all duration-300 ease-out"
          stroke-width="4"
          fill="none"
          stroke-linecap="round"
        />
      </ProgressCircle>
      <span class="text-xs text-gray-500 dark:text-gray-400">Green</span>
    </ProgressRoot>

    <!-- Orange -->
    <ProgressRoot :value="45" class="flex flex-col items-center space-y-2">
      <ProgressCircle class="w-16 h-16 [--size:64px] [--thickness:4px]">
        <ProgressCircleTrack
          class="stroke-gray-200 dark:stroke-gray-700"
          stroke-width="4"
          fill="none"
        />
        <ProgressCircleRange
          class="stroke-orange-600 dark:stroke-orange-500 transition-all duration-300 ease-out"
          stroke-width="4"
          fill="none"
          stroke-linecap="round"
        />
      </ProgressCircle>
      <span class="text-xs text-gray-500 dark:text-gray-400">Orange</span>
    </ProgressRoot>

    <!-- Red -->
    <ProgressRoot :value="30" class="flex flex-col items-center space-y-2">
      <ProgressCircle class="w-16 h-16 [--size:64px] [--thickness:4px]">
        <ProgressCircleTrack
          class="stroke-gray-200 dark:stroke-gray-700"
          stroke-width="4"
          fill="none"
        />
        <ProgressCircleRange
          class="stroke-red-600 dark:stroke-red-500 transition-all duration-300 ease-out"
          stroke-width="4"
          fill="none"
          stroke-linecap="round"
        />
      </ProgressCircle>
      <span class="text-xs text-gray-500 dark:text-gray-400">Red</span>
    </ProgressRoot>
  </div>
</template>

<script setup lang="ts">
import {
  Progress as ProgressRoot,
  ProgressCircle,
  ProgressCircleTrack,
  ProgressCircleRange,
} from "@ark-ui/vue/progress";
</script>
