<template>
  <Accordion.Root
    :defaultValue="['react']"
    collapsible
    class="w-full max-w-md mx-auto bg-linear-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-xs"
  >
    <Accordion.Item
      v-for="item in items"
      :key="item.id"
      :value="item.id"
      class="group border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0"
    >
      <Accordion.ItemTrigger
        class="w-full px-4 py-3 flex items-center text-left hover:bg-linear-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200"
      >
        <Accordion.ItemIndicator
          class="mr-3 transition-transform duration-200 data-[state=open]:rotate-90"
        >
          <ChevronRightIcon class="w-4 h-4 text-gray-600 dark:text-gray-400" />
        </Accordion.ItemIndicator>
        <span class="font-medium text-gray-900 dark:text-white">
          {{ item.title }}
        </span>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent
        class="px-4 pb-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        <div class="pt-3 pl-7">{{ item.content }}</div>
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
</template>

<script setup>
import { Accordion } from "@ark-ui/vue/accordion";
import { ChevronRightIcon } from "lucide-vue-next";

const items = [
  {
    id: "react",
    title: "Building Interactive Websites",
    content:
      "Discover the art of crafting beautiful, responsive websites that engage users with smooth animations, intuitive navigation, and modern design principles.",
  },
  {
    id: "solid",
    title: "Creating Digital Art",
    content:
      "Express your creativity through digital mediums, exploring color theory, composition, and modern tools to bring your artistic vision to life.",
  },
  {
    id: "vue",
    title: "Learning Photography",
    content:
      "Master the fundamentals of photography, from understanding light and composition to post-processing techniques that make your images truly stunning.",
  },
  {
    id: "svelte",
    title: "Exploring Space",
    content:
      "Journey beyond our planet to discover distant galaxies, mysterious black holes, and the endless wonders that await in the cosmic frontier.",
  },
];
</script>
