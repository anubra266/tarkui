<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"
  >
    <Steps.Root :count="4" :defaultStep="0" class="w-full max-w-2xl space-y-6">
      <Steps.List class="flex justify-between items-start">
        <Steps.Item
          v-for="(step, index) in steps"
          :key="step"
          :index="index"
          class="relative flex flex-col items-center flex-1"
        >
          <Steps.Trigger
            class="w-full flex flex-col items-start gap-2 text-left group cursor-default"
            disabled
          >
            <Steps.Indicator
              class="w-full shrink-0 h-1 data-complete:bg-blue-600 data-current:bg-blue-600 data-incomplete:bg-gray-300 dark:data-incomplete:bg-gray-600"
            />
          </Steps.Trigger>
        </Steps.Item>
      </Steps.List>

      <div class="text-center text-gray-600 dark:text-gray-400 text-sm">
        Step 1 of 4
      </div>

      <div class="flex justify-center gap-3">
        <Steps.PrevTrigger
          class="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700"
        >
          Prev step
        </Steps.PrevTrigger>
        <Steps.NextTrigger
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700"
        >
          Next step
        </Steps.NextTrigger>
      </div>
    </Steps.Root>
  </div>
</template>

<script setup>
import { Steps } from "@ark-ui/vue/steps";
import { Check } from "lucide-vue-next";

const steps = [1, 2, 3, 4];
</script>
