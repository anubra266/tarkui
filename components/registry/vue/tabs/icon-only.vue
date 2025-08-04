<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"
  >
    <Tabs.Root default-value="tab1" class="w-full flex flex-col items-center">
      <Tabs.List
        class="flex gap-1 p-1 bg-gray-100 rounded-lg dark:bg-gray-700 w-fit mb-8"
      >
        <Tabs.Trigger
          v-for="tab in tabs"
          :key="tab.value"
          :value="tab.value"
          class="p-3 text-gray-600 rounded-md transition-all data-selected:bg-white data-selected:text-gray-900 data-selected:shadow-sm dark:text-gray-300 dark:data-selected:bg-gray-800 dark:data-selected:text-gray-100"
        >
          <component :is="tab.icon" :size="20" />
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
import { BarChart3, Users, Settings } from "lucide-vue-next";

const tabs = [
  {
    value: "tab1",
    icon: BarChart3,
    content: "View charts and business metrics.",
  },
  {
    value: "tab2",
    icon: Users,
    content: "Manage team members and roles.",
  },
  {
    value: "tab3",
    icon: Settings,
    content: "Configure system preferences.",
  },
];
</script>
