<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-start justify-center"
  >
    <Tabs.Root default-value="tab2" class="flex gap-4 w-full">
      <Tabs.List
        class="flex flex-col gap-1 p-1 bg-gray-100 rounded-lg dark:bg-gray-700 w-fit"
      >
        <Tabs.Trigger
          v-for="tab in tabs"
          :key="tab.value"
          :value="tab.value"
          class="relative p-3 text-gray-600 rounded-md transition-all data-selected:bg-white data-selected:text-gray-900 data-selected:shadow-sm dark:text-gray-300 dark:data-selected:bg-gray-800 dark:data-selected:text-gray-100"
        >
          <component :is="tab.icon" :size="20" />
          <span
            v-if="tab.badge"
            class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-xs font-medium text-white dark:bg-gray-400 dark:text-gray-900"
          >
            {{ tab.badge }}
          </span>
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
import { Home, FolderOpen, Package } from "lucide-vue-next";

const tabs = [
  {
    value: "tab1",
    icon: Home,
    content: "Main dashboard with system overview.",
  },
  {
    value: "tab2",
    icon: FolderOpen,
    badge: 3,
    content: "Browse and manage project files.",
  },
  {
    value: "tab3",
    icon: Package,
    content: "View package dependencies and libraries.",
  },
];
</script>
