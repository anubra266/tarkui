<script setup lang="ts">
import { Toggle } from "@ark-ui/vue/toggle";
import { Bold, Italic } from "lucide-vue-next";
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center space-y-8"
  >
    <!-- Disabled in off state -->
    <div class="flex flex-col items-center gap-2">
      <label class="text-xs font-medium text-gray-600 dark:text-gray-400">
        Disabled (Off)
      </label>
      <Toggle.Root
        disabled
        class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed opacity-50 text-sm font-medium"
      >
        <Bold class="w-4 h-4" />
        Bold
      </Toggle.Root>
    </div>

    <!-- Disabled in on state -->
    <div class="flex flex-col items-center gap-2">
      <label class="text-xs font-medium text-gray-600 dark:text-gray-400">
        Disabled (On)
      </label>
      <Toggle.Root
        disabled
        defaultPressed
        class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-blue-300 dark:border-blue-600 bg-blue-100 dark:bg-blue-900/30 text-blue-400 dark:text-blue-400 cursor-not-allowed opacity-50 text-sm font-medium"
      >
        <Italic class="w-4 h-4" />
        Italic
      </Toggle.Root>
    </div>
  </div>
</template>
