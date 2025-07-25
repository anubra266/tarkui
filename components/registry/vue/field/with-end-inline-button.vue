<script setup>
import { Field } from "@ark-ui/vue/field";
import { Send } from "lucide-vue-next";
</script>

<template>
  <Field.Root class="max-w-sm w-full">
    <Field.Label class="text-sm font-medium text-gray-900 dark:text-gray-100">
      Quick Message
    </Field.Label>
    <div class="relative mt-1">
      <Field.Input
        type="text"
        placeholder="Type your message..."
        class="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 pr-10 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
      />
      <button
        class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
      >
        <Send class="h-4 w-4" />
      </button>
    </div>
  </Field.Root>
</template>
