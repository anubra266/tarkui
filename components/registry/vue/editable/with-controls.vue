<script setup>
import { Editable } from "@ark-ui/vue/editable";
import { Edit3, Check, X } from "lucide-vue-next";
</script>

<template>
  <div class="w-full max-w-sm space-y-3">
    <Editable.Root placeholder="Enter your name..." value="John Doe">
      <Editable.Label
        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        Display Name
      </Editable.Label>
      <div class="flex items-center space-x-2">
        <Editable.Area class="flex-1">
          <Editable.Input
            class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors min-h-[2.5rem]"
          />
          <Editable.Preview
            class="w-full px-3 py-2 text-sm border border-transparent rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white hover:border-gray-300 dark:hover:border-gray-600 cursor-text transition-colors min-h-[2.5rem]"
          />
        </Editable.Area>
        <Editable.Context v-slot="context">
          <Editable.Control class="flex items-center space-x-1">
            <template v-if="context.editing">
              <Editable.SubmitTrigger
                class="p-1.5 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-md transition-colors"
              >
                <Check class="h-4 w-4" />
              </Editable.SubmitTrigger>
              <Editable.CancelTrigger
                class="p-1.5 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
              >
                <X class="h-4 w-4" />
              </Editable.CancelTrigger>
            </template>
            <template v-else>
              <Editable.EditTrigger
                class="p-1.5 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                <Edit3 class="h-4 w-4" />
              </Editable.EditTrigger>
            </template>
          </Editable.Control>
        </Editable.Context>
      </div>
    </Editable.Root>
  </div>
</template>
