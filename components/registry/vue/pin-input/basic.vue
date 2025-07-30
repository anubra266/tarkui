<script setup lang="ts">
import { PinInput } from "@ark-ui/vue/pin-input";
</script>

<template>
  <div class="flex items-center justify-center min-h-32">
    <div class="w-80">
      <PinInput.Root @value-complete="(e) => console.log(e.valueAsString)">
        <PinInput.Label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
          Enter PIN
        </PinInput.Label>
        <PinInput.Control class="flex gap-2">
          <PinInput.Input
            v-for="(_, index) in [0, 1, 2, 3]"
            :key="index"
            :index="index"
            class="w-12 h-12 text-center text-lg font-medium border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400 transition-all"
          />
        </PinInput.Control>
        <PinInput.HiddenInput />
      </PinInput.Root>
    </div>
  </div>
</template> 