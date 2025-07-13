<template>
  <Accordion.Root
    :default-value="['Master financial planning basics']"
    collapsible
    class="w-full max-w-md mx-auto border border-gray-300/50 dark:border-gray-700/50 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm"
  >
    <Accordion.Item
      v-for="(item, index) in items"
      :key="index"
      :value="item"
      class="group"
    >
      <Accordion.ItemTrigger
        class="w-full px-4 py-4 flex items-center text-left hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200 border-b border-gray-200/50 dark:border-gray-700/50"
      >
        <Accordion.ItemIndicator class="mr-3 transition-all duration-200 group">
          <Plus
            class="w-4 h-4 text-gray-600 dark:text-gray-400 group-data-[state=open]:hidden"
          />
          <Minus
            class="w-4 h-4 text-gray-600 dark:text-gray-400 group-data-[state=closed]:hidden"
          />
        </Accordion.ItemIndicator>
        <span class="font-medium text-gray-900 dark:text-white text-sm">
          {{ item }}
        </span>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent
        class="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-gradient-to-r from-transparent via-gray-50/30 dark:via-gray-800/30 to-transparent border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0"
      >
        <div class="pl-7">
          <div v-if="item === 'Explore modern music production'">
            Create professional-quality tracks using digital audio workstations,
            synthesizers, and mixing techniques that bring your musical ideas to
            life.
          </div>
          <div v-else-if="item === 'Design stunning visual graphics'">
            Master color theory, typography, and composition principles to
            create compelling visuals that communicate effectively and inspire
            audiences.
          </div>
          <div v-else-if="item === 'Master financial planning basics'">
            Build a secure financial future through budgeting, investing, and
            strategic planning that grows your wealth and protects your assets.
          </div>
          <div v-else>
            Achieve conversational fluency through immersive practice, cultural
            understanding, and proven language learning techniques that stick.
          </div>
        </div>
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
</template>

<script setup lang="ts">
import { Accordion } from "@ark-ui/vue/accordion";
import { Plus, Minus } from "lucide-vue-next";

const items = [
  "Explore modern music production",
  "Design stunning visual graphics",
  "Master financial planning basics",
  "Learn foreign language fluency",
];
</script>
