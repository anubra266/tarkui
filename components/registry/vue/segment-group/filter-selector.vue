<template>
  <div
    class="max-w-sm w-full bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
  >
    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
      <h3 class="text-sm font-semibold text-gray-900 dark:text-white">
        Task Filters
      </h3>
      <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
        Filter your tasks by status
      </p>
    </div>

    <div class="p-4">
      <SegmentGroup.Root
        :value="filter"
        @value-change="handleFilterChange"
        orientation="vertical"
        class="flex items-start flex-col gap-1 border-l border-gray-200 dark:border-gray-700"
      >
        <SegmentGroup.Indicator
          class="border-blue-500 border-l-2 transform -translate-x-px h-[var(--height)] transition-all duration-200"
        />
        <SegmentGroup.Item
          v-for="filterOption in filters"
          :key="filterOption.value"
          :value="filterOption.value"
          :disabled="filterOption.disabled"
          class="text-gray-600 dark:text-gray-400 cursor-pointer font-medium transition-colors duration-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 data-[state=checked]:font-semibold data-[state=checked]:text-gray-900 dark:data-[state=checked]:text-white data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40"
        >
          <SegmentGroup.ItemText class="flex items-center space-x-2">
            <span>{{ filterOption.label }}</span>
            <span
              class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-1.5 py-0.5 rounded"
            >
              {{ filterOption.count }}
            </span>
          </SegmentGroup.ItemText>
          <SegmentGroup.ItemControl />
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      </SegmentGroup.Root>
    </div>

    <div class="p-4 border-t border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between">
        <span class="text-xs text-gray-600 dark:text-gray-400">
          Showing:
          <span class="font-medium capitalize">{{ filter }}</span> tasks
        </span>
        <button
          class="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          Clear filters
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SegmentGroup } from "@ark-ui/vue";

const filter = ref("all");

const filters = [
  { value: "all", label: "All", count: 156 },
  { value: "active", label: "Active", count: 89 },
  { value: "completed", label: "Completed", count: 67 },
  { value: "archived", label: "Archived", count: 0, disabled: true },
];

function handleFilterChange(details) {
  filter.value = details.value || "all";
}
</script>
