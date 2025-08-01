<script setup lang="ts">
import { RadioGroup } from "@ark-ui/vue/radio-group";
import { Palette, Paintbrush, Eraser, Scissors } from "lucide-vue-next";

const tools = [
  { value: "palette", label: "Palette", icon: Palette },
  { value: "brush", label: "Brush", icon: Paintbrush },
  { value: "eraser", label: "Eraser", icon: Eraser },
  { value: "cut", label: "Cut", icon: Scissors },
];
</script>

<template>
  <RadioGroup.Root
    class="grid grid-cols-2 gap-3 w-full max-w-sm"
    default-value="eraser"
  >
    <RadioGroup.Item
      v-for="tool in tools"
      :key="tool.value"
      :value="tool.value"
      class="relative flex flex-col items-start gap-3 p-4 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 hover:bg-gray-50 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-50 dark:bg-gray-800 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700 dark:data-[state=checked]:border-blue-500 dark:data-[state=checked]:bg-blue-950/50 transition-all duration-200"
    >
      <div class="flex w-full justify-between items-start">
        <component
          :is="tool.icon"
          class="w-4 h-4 text-gray-600 dark:text-gray-400"
        />
        <RadioGroup.ItemControl
          class="group size-4 bg-white border-2 border-gray-300 rounded-full data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-hover:border-gray-400 data-focus:ring-2 data-focus:ring-blue-500/50 transition-all duration-200 flex items-center justify-center text-white"
        >
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            class="opacity-0 group-data-[state=checked]:opacity-100 transition-opacity"
          >
            <circle cx="3" cy="3" r="3"></circle>
          </svg>
        </RadioGroup.ItemControl>
      </div>

      <RadioGroup.ItemText
        class="text-sm font-medium text-gray-900 dark:text-gray-100"
      >
        {{ tool.label }}
      </RadioGroup.ItemText>

      <RadioGroup.ItemHiddenInput />
    </RadioGroup.Item>
  </RadioGroup.Root>
</template>
