<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"
  >
    <Tabs.Root
      default-value="tab1"
      class="w-full flex flex-col items-center max-w-md"
    >
      <Tabs.List
        class="w-full flex justify-center gap-0.5 mb-0 before:bg-gray-200 dark:before:bg-gray-600 relative before:absolute before:inset-x-0 before:bottom-0 before:h-px"
      >
        <Tabs.Trigger
          v-for="tab in tabs"
          :key="tab.value"
          :value="tab.value"
          class="bg-gray-100 rounded-t-lg border border-gray-200 border-b-0 py-2 px-6 text-sm font-medium text-gray-600 hover:text-gray-700 transition-colors data-selected:text-gray-900 data-selected:bg-white data-selected:border-b-0 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:text-gray-200 dark:data-selected:text-gray-100 dark:data-selected:bg-gray-800 data-selected:z-10"
        >
          {{ tab.label }}
        </Tabs.Trigger>
      </Tabs.List>

      <div class="w-full">
        <Tabs.Content
          v-for="tab in tabs"
          :key="tab.value"
          :value="tab.value"
          class="p-4 text-center text-gray-600 dark:text-gray-300 text-sm"
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
    label: "Profile",
    content: "Update your personal information and avatar.",
  },
  {
    value: "tab2",
    label: "Billing",
    content: "Manage subscriptions and payment methods.",
  },
  {
    value: "tab3",
    label: "Privacy",
    content: "Configure data protection and security.",
  },
];
</script>
