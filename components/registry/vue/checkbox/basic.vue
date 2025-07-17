<script setup>
import { Checkbox } from "@ark-ui/vue";
import { CheckIcon } from "lucide-vue-next";
</script>

<template>
  <Checkbox.Root class="flex items-center gap-3 cursor-pointer">
    <Checkbox.Control
      class="w-5 h-5 bg-white border-2 border-gray-300 rounded data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-[hover]:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-[hover]:border-gray-400 transition-all duration-200 flex items-center justify-center"
    >
      <Checkbox.Indicator>
        <CheckIcon class="w-3.5 h-3.5 text-white" />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.Label
      class="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer"
    >
      Accept terms and conditions
    </Checkbox.Label>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
</template>
