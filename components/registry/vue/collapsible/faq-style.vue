<script setup>
import { Collapsible } from "@ark-ui/vue/collapsible";
import { ChevronDownIcon } from "lucide-vue-next";

const faqs = [
  {
    question: "What is the return policy?",
    answer:
      "You can return any item within 30 days of purchase for a full refund, provided it's in its original condition.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. International shipping typically takes 7-14 business days.",
  },
];
</script>

<template>
  <div class="w-full max-w-2xl space-y-4">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
      Frequently Asked Questions
    </h3>
    <Collapsible.Root
      v-for="(faq, index) in faqs"
      :key="index"
      class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
    >
      <Collapsible.Trigger
        class="w-full flex items-center justify-between px-6 py-4 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group"
      >
        <span class="font-medium text-gray-900 dark:text-gray-100 pr-4">
          {{ faq.question }}
        </span>
        <Collapsible.Indicator
          class="transition-transform duration-200 flex-shrink-0 data-[state=open]:rotate-180"
        >
          <ChevronDownIcon
            class="w-5 h-5 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300"
          />
        </Collapsible.Indicator>
      </Collapsible.Trigger>
      <Collapsible.Content
        class="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1"
      >
        <div
          class="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
        >
          <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ faq.answer }}
          </p>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  </div>
</template>
