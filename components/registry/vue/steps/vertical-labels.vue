<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"
  >
    <Steps.Root
      :count="4"
      :defaultStep="1"
      orientation="vertical"
      class="w-full max-w-md"
    >
      <Steps.List class="flex flex-col gap-4">
        <Steps.Item
          v-for="(step, index) in steps"
          :key="index"
          :index="index"
          class="relative flex items-start"
        >
          <Steps.Trigger
            class="flex items-center gap-3 text-left rounded-md group"
          >
            <Steps.Indicator
              class="flex justify-center items-center shrink-0 rounded-full font-semibold w-8 h-8 text-sm border-2 data-complete:bg-blue-600 data-complete:text-white data-complete:border-blue-600 data-current:bg-blue-600 data-current:text-white data-current:border-blue-600 data-incomplete:bg-gray-100 data-incomplete:text-gray-500 data-incomplete:border-gray-200 dark:data-incomplete:bg-gray-700 dark:data-incomplete:text-gray-300 dark:data-incomplete:border-gray-600 relative"
            >
              <span
                class="group-data-complete:hidden group-data-current:block"
              >
                {{ index + 1 }}
              </span>
              <Check class="w-4 h-4 group-data-complete:block hidden" />
            </Steps.Indicator>
            <span class="text-sm font-medium text-gray-900 dark:text-gray-100">
              {{ step }}
            </span>
          </Steps.Trigger>
          <Steps.Separator
            :hidden="index === steps.length - 1"
            class="absolute top-8 left-4 w-0.5 h-8 bg-gray-200 dark:bg-gray-700 data-complete:bg-blue-600"
          />
        </Steps.Item>
      </Steps.List>
    </Steps.Root>
  </div>
</template>

<script setup>
import { Steps } from "@ark-ui/vue/steps";
import { Check } from "lucide-vue-next";

const steps = ["Step One", "Step Two", "Step Three", "Step Four"];
</script>
