<template>
  <Accordion.Root
    :default-value="['Build healthy lifestyle habits']"
    collapsible
    class="w-full max-w-md mx-auto"
  >
    <Accordion.Item
      v-for="(item, index) in items"
      :key="index"
      :value="item"
      class="group border border-gray-300/50 dark:border-gray-700/50 rounded-lg mb-2 last:mb-0 bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm"
    >
      <Accordion.ItemTrigger
        class="w-full px-4 py-3 flex items-center text-left hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200"
      >
        <Accordion.ItemIndicator
          class="mr-3 transition-transform duration-200 data-[state=open]:rotate-180"
        >
          <ChevronDownIcon class="w-4 h-4 text-gray-600 dark:text-gray-400" />
        </Accordion.ItemIndicator>
        <span class="font-medium text-gray-900 dark:text-white text-sm">
          {{ item }}
        </span>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent
        class="px-4 pb-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        <div class="pt-1 pl-7">
          <div v-if="item === 'Master the art of public speaking'">
            Transform your communication skills by practicing vocal techniques,
            body language, and storytelling that captivate any audience with
            confidence.
          </div>
          <div v-else-if="item === 'Learn advanced cooking techniques'">
            Elevate your culinary skills with knife work, flavor pairing, and
            professional techniques that turn simple ingredients into
            extraordinary dishes.
          </div>
          <div v-else-if="item === 'Build healthy lifestyle habits'">
            Create sustainable routines for exercise, nutrition, and mental
            wellness that energize your body and mind for long-term vitality.
          </div>
          <div v-else>
            Strengthen your ability to understand and connect with others
            through empathy, active listening, and thoughtful communication
            skills.
          </div>
        </div>
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
</template>

<script setup lang="ts">
import { Accordion } from "@ark-ui/vue/accordion";
import { ChevronDownIcon } from "lucide-vue-next";

const items = [
  "Master the art of public speaking",
  "Learn advanced cooking techniques",
  "Build healthy lifestyle habits",
  "Develop emotional intelligence",
];
</script>
