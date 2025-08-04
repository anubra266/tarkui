<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"
  >
    <Tabs.Root
      default-value="packages"
      class="w-full flex flex-col items-center"
    >
      <Tabs.List class="flex gap-2 mb-8">
        <Tabs.Trigger
          v-for="tab in tabs"
          :key="tab.value"
          :value="tab.value"
          class="flex flex-col items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 rounded-md transition-all data-selected:bg-gray-200 data-selected:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:data-selected:bg-gray-700 dark:data-selected:text-gray-100 dark:hover:bg-gray-700 w-20"
        >
          <div
            :class="`flex items-center justify-center w-6 h-6 rounded-full text-white font-semibold text-xs ${
              tab.isSelected
                ? 'bg-gray-900 dark:bg-gray-100 dark:text-gray-900'
                : 'bg-gray-400 dark:bg-gray-500'
            }`"
          >
            {{ tab.badge }}
          </div>
          {{ tab.label }}
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content
        v-for="tab in tabs"
        :key="tab.value"
        :value="tab.value"
        class="text-center text-gray-600 dark:text-gray-300"
      >
        {{ tab.content }}
      </Tabs.Content>
    </Tabs.Root>
  </div>
</template>

<script setup>
import { Tabs } from "@ark-ui/vue/tabs";

const tabs = [
  {
    value: "overview",
    label: "Tasks",
    badge: 8,
    isSelected: false,
    content: "Manage your daily tasks and assignments.",
  },
  {
    value: "projects",
    label: "Messages",
    badge: 5,
    isSelected: false,
    content: "View conversations and notifications.",
  },
  {
    value: "packages",
    label: "Alerts",
    badge: 2,
    isSelected: true,
    content: "Monitor system alerts and warnings.",
  },
];
</script>
