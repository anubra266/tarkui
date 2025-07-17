<script setup>
import { Checkbox } from "@ark-ui/vue";
import { CheckIcon } from "lucide-vue-next";
import { ref } from "vue";

const completed = ref(true);

function handleCheckedChange(details) {
  completed.value = details.checked === true;
}
</script>

<template>
  <div class="max-w-md">
    <Checkbox.Root
      :checked="completed"
      @checked-change="handleCheckedChange"
      class="flex items-center gap-3 cursor-pointer"
    >
      <Checkbox.Control
        class="w-5 h-5 bg-white border-2 border-gray-300 rounded data-[state=checked]:bg-slate-700 data-[state=checked]:border-slate-700 data-[hover]:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-slate-400 dark:data-[state=checked]:border-slate-400 dark:data-[hover]:border-gray-400 transition-all duration-200 flex items-center justify-center"
      >
        <Checkbox.Indicator>
          <CheckIcon class="w-3.5 h-3.5 text-white dark:text-slate-800" />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Label
        :class="`text-base cursor-pointer transition-all duration-200 ${
          completed
            ? 'text-gray-500 line-through dark:text-gray-400'
            : 'text-gray-900 dark:text-gray-100'
        }`"
      >
        Simple todo item
      </Checkbox.Label>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  </div>
</template>
