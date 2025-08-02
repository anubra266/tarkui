<template>
  <div
    class="max-w-sm w-full bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
  >
    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
      <h3 class="text-sm font-semibold text-gray-900 dark:text-white">
        View Options
      </h3>
      <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
        Select your preferred layout
      </p>
    </div>

    <div class="p-4">
      <SegmentGroup.Root
        :value="viewMode"
        @value-change="handleViewModeChange"
        orientation="vertical"
        class="flex items-start flex-col gap-1 border-l border-gray-200 dark:border-gray-700"
      >
        <SegmentGroup.Indicator
          class="border-blue-500 border-l-2 transform -translate-x-px h-[var(--height)] transition-all duration-200"
        />
        <SegmentGroup.Item
          v-for="mode in viewModes"
          :key="mode.value"
          :value="mode.value"
          class="text-gray-600 dark:text-gray-400 cursor-pointer font-medium transition-colors duration-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 data-[state=checked]:font-semibold data-[state=checked]:text-gray-900 dark:data-[state=checked]:text-white data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40"
        >
          <SegmentGroup.ItemText class="flex items-center space-x-2">
            <component :is="mode.icon" class="w-4 h-4" />
            <span>{{ mode.label }}</span>
          </SegmentGroup.ItemText>
          <SegmentGroup.ItemControl />
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      </SegmentGroup.Root>
    </div>

    <div class="p-4 border-t border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between">
        <span class="text-xs text-gray-600 dark:text-gray-400">
          Current view:
          <span class="font-medium capitalize">{{ viewMode }}</span>
        </span>
        <button
          class="text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SegmentGroup } from "@ark-ui/vue";
import { GridIcon, ListIcon, ColumnsIcon } from "lucide-vue-next";

const viewMode = ref("grid");

const viewModes = [
  { value: "grid", label: "Grid", icon: GridIcon },
  { value: "list", label: "List", icon: ListIcon },
  { value: "columns", label: "Columns", icon: ColumnsIcon },
];

function handleViewModeChange(details) {
  viewMode.value = details.value || "grid";
}
</script>
