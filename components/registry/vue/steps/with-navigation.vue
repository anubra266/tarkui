<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"
  >
    <Steps.Root :count="4" :defaultStep="2" class="w-full max-w-2xl space-y-6">
      <Steps.List class="flex justify-between items-center">
        <Steps.Item
          v-for="(step, index) in steps"
          :key="step"
          :index="index"
          class="relative flex not-last:flex-1 items-center"
        >
          <Steps.Trigger
            class="flex items-center gap-3 text-left rounded-md group cursor-default"
            disabled
          >
            <Steps.Indicator
              class="flex justify-center items-center shrink-0 rounded-full font-semibold w-8 h-8 text-sm border-2 data-complete:bg-blue-600 data-complete:text-white data-complete:border-blue-600 data-current:bg-blue-600 data-current:text-white data-current:border-blue-600 data-incomplete:bg-gray-100 data-incomplete:text-gray-500 data-incomplete:border-gray-200 dark:data-incomplete:bg-gray-700 dark:data-incomplete:text-gray-300 dark:data-incomplete:border-gray-600 relative"
            >
              <span class="group-data-complete:hidden">{{ step }}</span>
              <Check class="w-4 h-4 group-data-complete:block hidden" />
            </Steps.Indicator>
          </Steps.Trigger>
          <Steps.Separator
            :hidden="index === steps.length - 1"
            class="flex-1 bg-gray-200 dark:bg-gray-700 h-0.5 mx-3 data-complete:bg-blue-600"
          />
        </Steps.Item>
      </Steps.List>

      <div class="flex justify-center gap-3 mt-8">
        <Steps.PrevTrigger
          class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700"
        >
          Prev step
        </Steps.PrevTrigger>
        <Steps.NextTrigger
          class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700"
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
