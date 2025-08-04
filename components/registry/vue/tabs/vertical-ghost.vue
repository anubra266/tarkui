<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-start justify-center"
  >
    <Tabs.Root default-value="tab1" class="flex gap-4 w-full">
      <Tabs.List class="flex flex-col gap-2 w-fit">
        <Tabs.Trigger
          v-for="tab in tabs"
          :key="tab.value"
          :value="tab.value"
          class="text-left px-2.5 py-2 text-sm font-medium text-gray-600 rounded-md transition-all data-selected:bg-gray-200 data-selected:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:data-selected:bg-gray-700 dark:data-selected:text-gray-100 dark:hover:bg-gray-700"
        >
          {{ tab.label }}
        </Tabs.Trigger>
      </Tabs.List>

      <div
        class="flex-1 border border-gray-200 rounded-lg p-4 dark:border-gray-700"
      >
        <Tabs.Content
          v-for="tab in tabs"
          :key="tab.value"
          :value="tab.value"
          class="text-gray-600 dark:text-gray-300"
        >
          {{ tab.content }}
        </Tabs.Content>
      </div>
    </Tabs.Root>
  </div>
</template>

<script setup>
import { Tabs } from "@ark-ui/vue/tabs";

const tabs = [
  {
    value: "tab1",
    label: "Overview",
    content: "Main dashboard with system overview.",
  },
  {
    value: "tab2",
    label: "Projects",
    content: "Browse active projects and repositories.",
  },
  {
    value: "tab3",
    label: "Packages",
    content: "Manage dependencies and libraries.",
  },
];
</script>
