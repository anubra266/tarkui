<script setup lang="ts">
import { Toggle } from "@ark-ui/vue/toggle";
import { Heart } from "lucide-vue-next";
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"
  >
    <Toggle.Root
      class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 data-[state=on]:bg-red-100 dark:data-[state=on]:bg-red-900/20 data-[state=on]:text-red-700 dark:data-[state=on]:text-red-300 transition-all text-sm font-medium"
    >
      <Heart class="w-4 h-4" />
      Like
    </Toggle.Root>
  </div>
</template>
