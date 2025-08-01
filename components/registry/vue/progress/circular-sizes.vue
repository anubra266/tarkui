<template>
  <div class="flex items-center justify-center space-x-8">
    <!-- Small -->
    <ProgressRoot :value="65" class="flex flex-col items-center space-y-2">
      <ProgressCircle class="w-12 h-12 [--size:48px] [--thickness:3px]">
        <ProgressCircleTrack
          class="stroke-gray-200 dark:stroke-gray-700"
          stroke-width="3"
          fill="none"
        />
        <ProgressCircleRange
          class="stroke-blue-600 dark:stroke-blue-500 transition-all duration-300 ease-out"
          stroke-width="3"
          fill="none"
          stroke-linecap="round"
        />
      </ProgressCircle>
      <span class="text-xs text-gray-500 dark:text-gray-400">Small</span>
    </ProgressRoot>

    <!-- Medium -->
    <ProgressRoot :value="65" class="flex flex-col items-center space-y-2">
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
      <span class="text-xs text-gray-500 dark:text-gray-400">Medium</span>
    </ProgressRoot>

    <!-- Large -->
    <ProgressRoot :value="65" class="flex flex-col items-center space-y-2">
      <ProgressCircle class="w-20 h-20 [--size:80px] [--thickness:5px]">
        <ProgressCircleTrack
          class="stroke-gray-200 dark:stroke-gray-700"
          stroke-width="5"
          fill="none"
        />
        <ProgressCircleRange
          class="stroke-blue-600 dark:stroke-blue-500 transition-all duration-300 ease-out"
          stroke-width="5"
          fill="none"
          stroke-linecap="round"
        />
      </ProgressCircle>
      <span class="text-xs text-gray-500 dark:text-gray-400">Large</span>
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
