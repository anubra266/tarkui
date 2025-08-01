<template>
  <QrCodeRoot
    value="https://tarkui.com"
    :encoding="{ ecc: 'H' }"
    class="flex items-center justify-center"
  >
    <QrCodeFrame
      class="relative w-40 h-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3"
    >
      <QrCodePattern class="fill-gray-900 dark:fill-white" />
    </QrCodeFrame>
    <QrCodeOverlay class="absolute inset-0 flex items-center justify-center">
      <div
        class="w-8 h-8 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center"
      >
        <div class="w-4 h-4 bg-white rounded-full"></div>
      </div>
    </QrCodeOverlay>
  </QrCodeRoot>
</template>

<script setup lang="ts">
import {
  QrCode as QrCodeRoot,
  QrCodeFrame,
  QrCodePattern,
  QrCodeOverlay,
} from "@ark-ui/vue/qr-code";
</script>
