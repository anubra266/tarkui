<script setup>
import { Field } from "@ark-ui/vue/field";
import { Mail } from "lucide-vue-next";
</script>

<template>
  <Field.Root class="max-w-sm w-full">
    <Field.Label class="text-sm font-medium text-gray-900 dark:text-gray-100">
      Contact Email
    </Field.Label>
    <div class="relative mt-1">
      <Field.Input
        type="email"
        placeholder="your.email@company.com"
        class="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 pr-10 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-hidden focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
      />
      <div class="absolute inset-y-0 right-0 flex items-center pr-3">
        <Mail class="h-4 w-4 text-gray-400 dark:text-gray-500" />
      </div>
    </div>
  </Field.Root>
</template>
