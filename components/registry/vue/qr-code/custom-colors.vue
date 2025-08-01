<template>
  <div class="grid grid-cols-2 gap-6">
    <div
      v-for="{ bg, pattern, label, border } in colorSchemes"
      :key="label"
      class="flex flex-col items-center space-y-3"
    >
      <QrCodeRoot value="https://tarkui.com">
        <QrCodeFrame :class="`w-32 h-32 ${bg} border ${border} rounded-lg p-3`">
          <QrCodePattern :class="pattern" />
        </QrCodeFrame>
      </QrCodeRoot>
      <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{
        label
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  QrCode as QrCodeRoot,
  QrCodeFrame,
  QrCodePattern,
} from "@ark-ui/vue/qr-code";

const colorSchemes = [
  {
    bg: "bg-white dark:bg-blue-900",
    pattern: "fill-blue-600 dark:fill-blue-300",
    label: "Blue",
    border: "border-blue-200 dark:border-blue-700",
  },
  {
    bg: "bg-green-50 dark:bg-green-900",
    pattern: "fill-green-700 dark:fill-green-300",
    label: "Green",
    border: "border-green-200 dark:border-green-700",
  },
  {
    bg: "bg-purple-50 dark:bg-purple-900",
    pattern: "fill-purple-700 dark:fill-purple-300",
    label: "Purple",
    border: "border-purple-200 dark:border-purple-700",
  },
  {
    bg: "bg-gray-900 dark:bg-gray-100",
    pattern: "fill-white dark:fill-gray-900",
    label: "Inverted",
    border: "border-gray-700 dark:border-gray-300",
  },
];
</script>
