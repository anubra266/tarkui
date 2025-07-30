<script setup>
import { Checkbox } from "@ark-ui/vue";
import { CheckIcon } from "lucide-vue-next";

const colors = [
  { label: "Blue", value: "blue", color: "blue" },
  { label: "Green", value: "green", color: "green" },
  { label: "Purple", value: "purple", color: "purple" },
  { label: "Red", value: "red", color: "red" },
  { label: "Orange", value: "orange", color: "orange" },
  { label: "Pink", value: "pink", color: "pink" },
];

function getColorClasses(color) {
  const colorMap = {
    blue: "data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500",
    green:
      "data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500 dark:data-[state=checked]:bg-green-500 dark:data-[state=checked]:border-green-500",
    purple:
      "data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500 dark:data-[state=checked]:bg-purple-500 dark:data-[state=checked]:border-purple-500",
    red: "data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500 dark:data-[state=checked]:bg-red-500 dark:data-[state=checked]:border-red-500",
    orange:
      "data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500 dark:data-[state=checked]:bg-orange-500 dark:data-[state=checked]:border-orange-500",
    pink: "data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500 dark:data-[state=checked]:bg-pink-500 dark:data-[state=checked]:border-pink-500",
  };
  return colorMap[color] || colorMap.blue;
}
</script>

<template>
  <Checkbox.Group :defaultValue="['blue', 'green']" class="space-y-4">
    <Checkbox.Root
      v-for="color in colors"
      :key="color.value"
      :value="color.value"
      class="flex items-center gap-3 cursor-pointer"
    >
      <Checkbox.Control
        :class="`w-5 h-5 bg-white border-2 border-gray-300 rounded data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-hover:border-gray-400 transition-all duration-200 flex items-center justify-center ${getColorClasses(
          color.color
        )}`"
      >
        <Checkbox.Indicator>
          <CheckIcon class="w-3.5 h-3.5 text-white" />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Label
        class="text-sm text-gray-900 dark:text-gray-100 cursor-pointer"
      >
        {{ color.label }}
      </Checkbox.Label>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  </Checkbox.Group>
</template>
