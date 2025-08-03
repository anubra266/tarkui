<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"
  >
    <div class="max-w-md w-full flex justify-center">
      <Slider.Root :default-value="[50]" orientation="vertical" class="h-64">
        <Slider.Control class="relative flex flex-col items-center h-full w-5">
          <Slider.Track
            class="relative flex-1 w-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
          >
            <Slider.Range
              class="absolute w-full bg-blue-600 dark:bg-blue-500 rounded-full"
            />
          </Slider.Track>
          <Slider.Thumb
            :index="0"
            class="relative w-5 h-5 bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-500 rounded-full shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 z-10"
          >
            <Slider.HiddenInput />
          </Slider.Thumb>
        </Slider.Control>
      </Slider.Root>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Slider } from "@ark-ui/vue/slider";
</script>
