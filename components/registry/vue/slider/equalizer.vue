<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"
  >
    <div class="max-w-md w-full">
      <div class="flex items-end justify-between space-x-2 h-48">
        <div
          v-for="(freq, index) in frequencies"
          :key="freq"
          class="flex flex-col items-center space-y-2"
        >
          <Slider.Root
            :default-value="[defaultValues[index]]"
            orientation="vertical"
            class="h-32"
          >
            <Slider.Control
              class="relative flex flex-col items-center h-full w-4"
            >
              <Slider.Track
                class="relative flex-1 w-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
              >
                <Slider.Range
                  class="absolute w-full bg-blue-600 dark:bg-blue-500 rounded-full"
                />
              </Slider.Track>
              <Slider.Thumb
                :index="0"
                class="group relative w-4 h-4 bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-500 rounded-full shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 z-10"
              >
                <Slider.HiddenInput />
                <Slider.ValueText
                  class="absolute -right-10 top-1/2 transform -translate-y-1/2 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 px-2 py-1 rounded-md shadow-sm opacity-0 group-data-[dragging]:opacity-100 transition-opacity"
                />
              </Slider.Thumb>
            </Slider.Control>
          </Slider.Root>
          <span class="text-xs text-gray-500 dark:text-gray-400 font-mono">
            {{ freq >= 1000 ? `${freq / 1000}k` : freq }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Slider } from "@ark-ui/vue/slider";

const frequencies = [60, 170, 310, 600, 1000, 3000, 6000, 12000, 14000, 16000];
const defaultValues = [45, 60, 30, 75, 50, 40, 65, 35, 55, 25];
</script>
