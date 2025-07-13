<template>
  <Accordion.Root
    :default-value="['Mindful Living']"
    collapsible
    class="w-full max-w-md mx-auto bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm"
  >
    <Accordion.Item
      v-for="(item, index) in items"
      :key="index"
      :value="item.title"
      class="group border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0"
    >
      <Accordion.ItemTrigger
        class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200"
      >
        <div class="flex-1">
          <div class="font-medium text-gray-900 dark:text-white">
            {{ item.title }}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {{ item.subtitle }}
          </div>
        </div>
        <Accordion.ItemIndicator class="ml-4 transition-all duration-200 group">
          <Plus
            class="w-4 h-4 text-gray-600 dark:text-gray-400 group-data-[state=open]:hidden"
          />
          <Minus
            class="w-4 h-4 text-gray-600 dark:text-gray-400 group-data-[state=closed]:hidden"
          />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent
        class="px-4 pb-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        <div class="pt-3">
          <div v-if="item.title === 'Creative Writing'">
            Transform your thoughts into compelling stories through character
            development, plot structure, and vivid descriptions that captivate
            readers and express your unique voice.
          </div>
          <div v-else-if="item.title === 'Digital Photography'">
            Capture stunning images by understanding the rule of thirds, golden
            hour lighting, and advanced editing techniques that bring your
            artistic vision to life.
          </div>
          <div v-else-if="item.title === 'Mindful Living'">
            Embrace the present moment through meditation practices, gratitude
            exercises, and mindful breathing that reduce stress and enhance your
            overall well-being.
          </div>
          <div v-else>
            Create a thriving ecosystem in your backyard using natural
            fertilizers, companion planting, and water-efficient methods that
            support both plants and wildlife.
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
  {
    title: "Creative Writing",
    subtitle: "Develop your storytelling and narrative skills",
  },
  {
    title: "Digital Photography",
    subtitle: "Master composition, lighting, and editing techniques",
  },
  {
    title: "Mindful Living",
    subtitle: "Cultivate presence and inner peace daily",
  },
  {
    title: "Sustainable Gardening",
    subtitle: "Grow your own organic food and flowers",
  },
];
</script>
