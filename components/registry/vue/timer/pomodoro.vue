<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"
  >
    <Timer.Root countdown :startMs="25 * 60 * 1000" class="w-full max-w-sm">
      <div
        class="bg-red-50 dark:bg-red-950 border-2 border-red-200 dark:border-red-800 rounded-xl p-6"
      >
        <div class="flex items-center justify-center gap-2 mb-4">
          <div
            class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center"
          >
            <Coffee class="w-4 h-4 text-white" />
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100">
            Focus Time
          </h3>
        </div>

        <Timer.Area class="text-center mb-6">
          <div
            class="inline-flex text-4xl font-bold font-mono text-red-600 dark:text-red-400"
          >
            <Timer.Item type="minutes" class="min-w-[2ch] text-center" />
            <Timer.Separator>:</Timer.Separator>
            <Timer.Item type="seconds" class="min-w-[2ch] text-center" />
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            25 minutes of focused work
          </div>
        </Timer.Area>

        <Timer.Control class="flex justify-center gap-2">
          <Timer.ActionTrigger
            action="start"
            class="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
          >
            <Play class="w-4 h-4" />
            Start
          </Timer.ActionTrigger>
          <Timer.ActionTrigger
            action="pause"
            class="p-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <Pause class="w-4 h-4" />
          </Timer.ActionTrigger>
          <Timer.ActionTrigger
            action="reset"
            class="p-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <RotateCcw class="w-4 h-4" />
          </Timer.ActionTrigger>
        </Timer.Control>
      </div>
    </Timer.Root>
  </div>
</template>

<script setup>
import { Timer } from "@ark-ui/vue/timer";
import { Coffee, Pause, Play, RotateCcw } from "lucide-vue-next";
</script>
