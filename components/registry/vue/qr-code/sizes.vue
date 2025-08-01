<template>
  <div class="flex items-end justify-center space-x-8">
    <div
      v-for="{ size, padding, label, pixelSize } in sizes"
      :key="label"
      class="flex flex-col items-center space-y-3"
    >
      <QrCodeRoot value="https://tarkui.com" :pixelSize="pixelSize">
        <QrCodeFrame
          :class="`${size} bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg ${padding}`"
        >
          <QrCodePattern class="fill-gray-900 dark:fill-white" />
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

const sizes = [
  { size: "w-20 h-20", padding: "p-2", label: "Small", pixelSize: 2 },
  { size: "w-32 h-32", padding: "p-3", label: "Medium", pixelSize: 3 },
  { size: "w-40 h-40", padding: "p-4", label: "Large", pixelSize: 4 },
];
</script>
