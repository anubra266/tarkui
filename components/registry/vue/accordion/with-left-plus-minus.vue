<template>
  <Accordion.Root
    :default-value="['React']"
    collapsible
    class="w-full max-w-md mx-auto bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm"
  >
    <Accordion.Item
      v-for="item in items"
      :key="item"
      :value="item"
      class="group border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0"
    >
      <Accordion.ItemTrigger
        class="w-full px-4 py-3 flex items-center text-left hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200"
      >
        <Accordion.ItemIndicator class="mr-3 transition-all duration-200 group">
          <Plus
            class="w-4 h-4 text-gray-600 dark:text-gray-400 group-data-[state=open]:hidden"
          />
          <Minus
            class="w-4 h-4 text-gray-600 dark:text-gray-400 group-data-[state=closed]:hidden"
          />
        </Accordion.ItemIndicator>
        <span class="font-medium text-gray-900 dark:text-white">
          {{
            item === "React"
              ? "Building Interactive Websites"
              : item === "Solid"
              ? "Creating Digital Art"
              : item === "Vue"
              ? "Learning Photography"
              : "Exploring Space"
          }}
        </span>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent
        class="px-4 pb-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        <div class="pt-3 pl-7">
          {{
            item === "React"
              ? "Discover the art of crafting beautiful, responsive websites that engage users with smooth animations, intuitive navigation, and modern design principles."
              : item === "Solid"
              ? "Express your creativity through digital mediums, exploring color theory, composition, and modern tools to bring your artistic vision to life."
              : item === "Vue"
              ? "Master the fundamentals of photography, from understanding light and composition to post-processing techniques that make your images truly stunning."
              : "Journey beyond our planet to discover distant galaxies, mysterious black holes, and the endless wonders that await in the cosmic frontier."
          }}
        </div>
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
</template>

<script setup lang="ts">
import { Accordion } from "@ark-ui/vue/accordion";
import { Plus, Minus } from "lucide-vue-next";

const items = ["React", "Solid", "Vue", "Svelte"];
</script>
