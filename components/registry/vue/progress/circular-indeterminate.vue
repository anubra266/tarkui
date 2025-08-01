<template>
  <ProgressRoot class="flex flex-col items-center space-y-4">
    <ProgressCircle
      class="w-16 h-16 animate-spin [--size:64px] [--thickness:4px]"
    >
      <ProgressCircleTrack
        class="stroke-gray-200 dark:stroke-gray-700"
        stroke-width="4"
        fill="none"
      />
      <ProgressCircleRange
        class="stroke-blue-600 dark:stroke-blue-500"
        stroke-width="4"
        fill="none"
        stroke-linecap="round"
        stroke-dasharray="1, 200"
        stroke-dashoffset="0"
      />
    </ProgressCircle>
    <span class="text-sm text-gray-500 dark:text-gray-400">Loading...</span>
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
