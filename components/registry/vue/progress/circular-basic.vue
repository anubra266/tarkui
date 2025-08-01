<template>
  <ProgressRoot :value="65" class="flex items-center justify-center">
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
  </ProgressRoot>
</template>

<script setup lang="ts">
import {
  Progress as ProgressRoot,
  ProgressCircle,
  ProgressCircleTrack,
  ProgressCircleRange,
} from "@ark-ui/vue/progress";
</script>
