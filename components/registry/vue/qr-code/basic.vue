<template>
  <QrCodeRoot
    value="https://tarkui.com"
    class="flex items-center justify-center"
  >
    <QrCodeFrame
      class="w-32 h-32 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-2"
    >
      <QrCodePattern class="fill-gray-900 dark:fill-white" />
    </QrCodeFrame>
  </QrCodeRoot>
</template>

<script setup lang="ts">
import {
  QrCode as QrCodeRoot,
  QrCodeFrame,
  QrCodePattern,
} from "@ark-ui/vue/qr-code";
</script>
