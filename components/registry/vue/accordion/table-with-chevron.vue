<template>
  <Accordion.Root
    :defaultValue="['financial-planning']"
    collapsible
    class="w-full max-w-md mx-auto border border-gray-300/50 dark:border-gray-700/50 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm"
  >
    <Accordion.Item
      v-for="item in items"
      :key="item.id"
      :value="item.id"
      class="group"
    >
      <Accordion.ItemTrigger
        class="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200 border-b border-gray-200/50 dark:border-gray-700/50"
      >
        <span class="font-medium text-gray-900 dark:text-white text-sm">
          {{ item.title }}
        </span>
        <Accordion.ItemIndicator
          class="ml-2 transition-transform duration-200 data-[state=open]:rotate-180"
        >
          <ChevronDownIcon class="w-4 h-4 text-gray-600 dark:text-gray-400" />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent
        class="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-gradient-to-r from-transparent via-gray-50/30 dark:via-gray-800/30 to-transparent border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0"
      >
        {{ item.content }}
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
</template>

<script setup>
import { Accordion } from "@ark-ui/vue/accordion";
import { ChevronDownIcon } from "lucide-vue-next";

const items = [
  {
    id: "music-production",
    title: "Explore modern music production",
    content:
      "Create professional-quality tracks using digital audio workstations, synthesizers, and mixing techniques that bring your musical ideas to life.",
  },
  {
    id: "visual-graphics",
    title: "Design stunning visual graphics",
    content:
      "Master color theory, typography, and composition principles to create compelling visuals that communicate effectively and inspire audiences.",
  },
  {
    id: "financial-planning",
    title: "Master financial planning basics",
    content:
      "Build a secure financial future through budgeting, investing, and strategic planning that grows your wealth and protects your assets.",
  },
  {
    id: "foreign-language",
    title: "Learn foreign language fluency",
    content:
      "Achieve conversational fluency through immersive practice, cultural understanding, and proven language learning techniques that stick.",
  },
];
</script>
