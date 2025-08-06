<script setup lang="ts">
import { ToggleGroup } from "@ark-ui/vue/toggle-group";
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"
  >
    <ToggleGroup.Root class="inline-flex gap-1">
      <ToggleGroup.Item
        value="sm"
        class="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 data-[state=on]:bg-gray-900 dark:data-[state=on]:bg-gray-100 data-[state=on]:text-white dark:data-[state=on]:text-gray-900 transition-all"
      >
        S
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="md"
        class="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 data-[state=on]:bg-gray-900 dark:data-[state=on]:bg-gray-100 data-[state=on]:text-white dark:data-[state=on]:text-gray-900 transition-all"
      >
        M
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="lg"
        class="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 data-[state=on]:bg-gray-900 dark:data-[state=on]:bg-gray-100 data-[state=on]:text-white dark:data-[state=on]:text-gray-900 transition-all"
      >
        L
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="xl"
        class="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 data-[state=on]:bg-gray-900 dark:data-[state=on]:bg-gray-100 data-[state=on]:text-white dark:data-[state=on]:text-gray-900 transition-all"
      >
        XL
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  </div>
</template>
