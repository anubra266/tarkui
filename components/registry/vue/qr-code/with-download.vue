<template>
  <div class="flex flex-col items-center space-y-4">
    <QrCodeRoot value="https://tarkui.com">
      <QrCodeFrame
        class="w-40 h-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3"
      >
        <QrCodePattern class="fill-gray-900 dark:fill-white" />
      </QrCodeFrame>

      <QrCodeDownloadTrigger
        fileName="qr-code.png"
        mimeType="image/png"
        class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
      >
        <Download class="w-4 h-4" />
        Download QR Code
      </QrCodeDownloadTrigger>
    </QrCodeRoot>
  </div>
</template>

<script setup lang="ts">
import {
  QrCode as QrCodeRoot,
  QrCodeFrame,
  QrCodePattern,
  QrCodeDownloadTrigger,
} from "@ark-ui/vue/qr-code";
import { Download } from "lucide-vue-next";
</script>
