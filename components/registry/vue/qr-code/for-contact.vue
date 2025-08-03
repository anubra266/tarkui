<template>
  <div class="flex flex-col items-center space-y-6 max-w-sm mx-auto">
    <div class="text-center space-y-2">
      <User class="w-8 h-8 text-green-600 mx-auto" />
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Contact Card
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Scan to save contact information
      </p>
    </div>

    <QrCodeRoot :value="vCardData" :encoding="{ ecc: 'M' }">
      <QrCodeFrame
        class="w-48 h-48 bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 border border-green-200 dark:border-green-700 rounded-xl p-4 shadow-lg"
      >
        <QrCodePattern class="fill-green-700 dark:fill-green-300" />
      </QrCodeFrame>
    </QrCodeRoot>

    <div
      class="w-full bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 space-y-2"
    >
      <div class="flex items-center gap-3">
        <User class="w-4 h-4 text-gray-400" />
        <span class="text-sm text-gray-900 dark:text-gray-100">John Doe</span>
      </div>
      <div class="flex items-center gap-3">
        <Phone class="w-4 h-4 text-gray-400" />
        <span class="text-sm text-gray-600 dark:text-gray-400"
          >+1-555-123-4567</span
        >
      </div>
      <div class="flex items-center gap-3">
        <Mail class="w-4 h-4 text-gray-400" />
        <span class="text-sm text-gray-600 dark:text-gray-400"
          >john.doe@tarkui.com</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  QrCode as QrCodeRoot,
  QrCodeFrame,
  QrCodePattern,
} from "@ark-ui/vue/qr-code";
import { User, Phone, Mail } from "lucide-vue-next";

// vCard format for contact information
const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:John Doe
ORG:TarkUI
TITLE:Frontend Developer
TEL:+1-555-123-4567
EMAIL:john.doe@tarkui.com
URL:https://tarkui.com
END:VCARD`;
</script>
