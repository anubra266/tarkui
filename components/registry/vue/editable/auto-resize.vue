<script setup>
import { Editable } from "@ark-ui/vue/editable";
import { AlignLeft } from "lucide-vue-next";
</script>

<template>
  <div class="w-full max-w-lg space-y-3">
    <Editable.Root
      placeholder="Type a longer message and watch it grow..."
      value="Short text"
      auto-resize
    >
      <div class="flex items-center space-x-2 mb-2">
        <AlignLeft class="h-4 w-4 text-gray-500 dark:text-gray-400" />
        <Editable.Label
          class="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Auto-Resizing Text Area
        </Editable.Label>
      </div>
      <Editable.Area class="relative">
        <Editable.Input
          class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors resize-none min-h-10"
        />
        <Editable.Preview
          class="w-full px-3 py-2 text-sm border border-transparent rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white hover:border-gray-300 dark:hover:border-gray-600 cursor-text transition-colors min-h-10 whitespace-pre-wrap"
        />
      </Editable.Area>
      <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
        Click to edit • The text area will automatically resize as you type
      </p>
    </Editable.Root>
  </div>
</template>
