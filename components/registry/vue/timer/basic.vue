<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"
  >
    <Timer.Root
      :targetMs="60 * 60 * 1000"
      class="flex flex-col items-center gap-4"
    >
      <Timer.Area
        class="flex items-center gap-1 text-2xl font-mono text-gray-900 dark:text-gray-100"
      >
        <Timer.Item type="hours" class="min-w-[3ch] text-center" />
        <Timer.Separator>:</Timer.Separator>
        <Timer.Item type="minutes" class="min-w-[2ch] text-center" />
        <Timer.Separator>:</Timer.Separator>
        <Timer.Item type="seconds" class="min-w-[2ch] text-center" />
      </Timer.Area>

      <Timer.Control class="flex items-center gap-2">
        <Timer.ActionTrigger
          action="start"
          class="flex items-center gap-2 px-3 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm"
        >
          <Play class="w-3 h-3" />
          Start
        </Timer.ActionTrigger>
        <Timer.ActionTrigger
          action="pause"
          class="flex items-center gap-2 px-3 py-1.5 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors text-sm"
        >
          <Pause class="w-3 h-3" />
          Pause
        </Timer.ActionTrigger>
        <Timer.ActionTrigger
          action="reset"
          class="flex items-center gap-2 px-3 py-1.5 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
        >
          <RotateCcw class="w-3 h-3" />
          Reset
        </Timer.ActionTrigger>
      </Timer.Control>
    </Timer.Root>
  </div>
</template>

<script setup>
import { Timer } from "@ark-ui/vue/timer";
import { Pause, Play, RotateCcw } from "lucide-vue-next";
</script>
