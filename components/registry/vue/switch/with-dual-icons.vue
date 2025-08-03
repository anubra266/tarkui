<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"
  >
    <Switch.Root class="flex items-center gap-2">
      <Switch.Context v-slot="{ api }">
        <Moon
          :data-checked="api.checked ? '' : undefined"
          class="w-4 h-4 transition-colors duration-200 text-gray-900 dark:text-gray-100 data-[checked]:text-gray-400 dark:data-[checked]:text-gray-500"
        />
        <Switch.Control
          class="relative inline-flex w-11 p-0.5 items-center rounded-full bg-gray-300 transition-colors duration-200 ease-in-out data-[state=checked]:bg-blue-500 data-[focus-visible]:ring-2 data-[focus-visible]:ring-gray-300/50 data-[state=checked]:data-[focus-visible]:ring-blue-500/50 dark:bg-gray-600 dark:data-[state=checked]:bg-blue-500"
        >
          <Switch.Thumb
            class="w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out data-[state=checked]:translate-x-full"
          />
        </Switch.Control>
        <Sun
          :data-checked="api.checked ? '' : undefined"
          class="w-4 h-4 transition-colors duration-200 text-gray-400 dark:text-gray-500 data-[checked]:text-gray-900 dark:data-[checked]:text-gray-100"
        />
      </Switch.Context>
      <Switch.HiddenInput />
    </Switch.Root>
  </div>
</template>

<script setup>
import { Switch } from "@ark-ui/vue/switch";
import { Moon, Sun } from "lucide-vue-next";
</script>
