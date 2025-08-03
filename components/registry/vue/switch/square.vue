<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"
  >
    <Switch.Root class="flex items-center gap-3">
      <Switch.Control
        class="relative inline-flex w-11 p-0.5 items-center rounded-md bg-gray-300 transition-colors duration-200 ease-in-out data-[state=checked]:bg-blue-500 data-[focus-visible]:ring-2 data-[focus-visible]:ring-gray-300/50 data-[state=checked]:data-[focus-visible]:ring-blue-500/50 dark:bg-gray-600 dark:data-[state=checked]:bg-blue-500"
      >
        <Switch.Thumb
          class="w-5 h-5 rounded-sm bg-white shadow-sm transition-transform duration-200 ease-in-out data-[state=checked]:translate-x-full"
        />
      </Switch.Control>
      <Switch.HiddenInput />
    </Switch.Root>
  </div>
</template>

<script setup>
import { Switch } from "@ark-ui/vue/switch";
</script>
