<script setup lang="ts">
import { Field } from "@ark-ui/vue/field";
import { Fieldset } from "@ark-ui/vue/fieldset";

const id = "overlapping-email";
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"
  >
    <Field.Root class="relative max-w-sm w-full group">
      <Field.Input
        placeholder=" "
        class="block w-full rounded-lg bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 outline-none peer"
      />

      <Field.Label
        class="absolute left-[9px] top-px text-sm text-gray-500 dark:text-gray-400 group-focus-within:text-gray-900 dark:group-focus-within:text-gray-100 transition-all duration-300 px-1 transform -translate-y-1/2 pointer-events-none"
      >
        Overlapping label
      </Field.Label>

      <Fieldset.Root
        class="inset-0 absolute border border-gray-300 dark:border-gray-600 rounded-lg pointer-events-none mt-[-9px] visible group-focus-within:border-gray-700 dark:group-focus-within:border-gray-100 group-focus-within:border-2"
      >
        <Fieldset.Legend
          class="ml-2 text-sm invisible px-1 max-w-full whitespace-nowrap"
        >
          Overlapping label
        </Fieldset.Legend>
      </Fieldset.Root>
    </Field.Root>
  </div>
</template>
