<template>
  <Accordion.Root
    :default-value="['Discover hidden creative talents']"
    collapsible
    class="w-full max-w-md mx-auto bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm"
  >
    <Accordion.Item
      v-for="(item, index) in items"
      :key="index"
      :value="item.name"
      class="group border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0"
    >
      <Accordion.ItemTrigger
        class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200"
      >
        <div class="flex items-center">
          <component
            :is="item.icon"
            class="w-4 h-4 text-blue-600 dark:text-blue-400 mr-3"
          />
          <span class="font-medium text-gray-900 dark:text-white">
            {{ item.name }}
          </span>
        </div>
        <Accordion.ItemIndicator
          class="ml-2 transition-transform duration-200 data-[state=open]:rotate-180"
        >
          <ChevronDownIcon class="w-4 h-4 text-gray-600 dark:text-gray-400" />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent
        class="px-4 pb-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        <div class="pt-3 pl-7">
          {{
            item.name === "Discover hidden creative talents"
              ? "Unlock your inner artist by exploring new mediums, experimenting with bold techniques, and embracing the creative process without fear of judgment."
              : item.name === "Customize your workspace perfectly"
              ? "Transform your environment into a productivity powerhouse with smart organization, ergonomic setups, and personalized touches that inspire daily success."
              : item.name === "Master efficient time management"
              ? "Develop powerful habits that maximize your daily potential through strategic planning, priority setting, and mindful focus techniques."
              : "Build meaningful connections through active listening, empathy, and clear expression that resonates with others on a deeper level."
          }}
        </div>
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
</template>

<script setup lang="ts">
import { Accordion } from "@ark-ui/vue/accordion";
import {
  ChevronDownIcon,
  Sparkles,
  Settings,
  Clock,
  HelpCircle,
} from "lucide-vue-next";

const items = [
  { name: "Discover hidden creative talents", icon: Sparkles },
  { name: "Customize your workspace perfectly", icon: Settings },
  { name: "Master efficient time management", icon: Clock },
  { name: "Learn the art of effective communication", icon: HelpCircle },
];
</script>
