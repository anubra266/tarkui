<script setup>
import { Editable } from "@ark-ui/vue/editable";
import { User, Check, X } from "lucide-vue-next";
import { reactive, computed } from "vue";

const state = reactive({
  value: "johndoe@example.com",
});

const isValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(state.value);
});

const handleValueChange = (details) => {
  state.value = details.value;
};
</script>

<template>
  <div class="w-full max-w-md space-y-4">
    <div
      class="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
    >
      <div class="flex items-center space-x-3 mb-4">
        <div
          class="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
        >
          <User class="h-6 w-6 text-gray-600 dark:text-gray-400" />
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Profile Settings
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Update your account information
          </p>
        </div>
      </div>

      <Editable.Root
        placeholder="Enter your email..."
        :value="state.value"
        @value-change="handleValueChange"
        :invalid="!isValid"
      >
        <Editable.Label
          class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Email Address
        </Editable.Label>
        <div class="flex items-center space-x-2">
          <Editable.Area class="flex-1">
            <Editable.Input
              :class="`w-full px-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 transition-colors min-h-10 ${
                !isValid
                  ? 'border-red-300 dark:border-red-600 focus:ring-red-500 dark:focus:ring-red-400'
                  : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-400'
              }`"
            />
            <Editable.Preview
              :class="`w-full px-3 py-2 text-sm border border-transparent rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white hover:border-gray-300 dark:hover:border-gray-600 cursor-text transition-colors min-h-10 ${
                !isValid ? 'ring-1 ring-red-200 dark:ring-red-800' : ''
              }`"
            />
          </Editable.Area>
          <Editable.Context v-slot="context">
            <Editable.Control class="flex items-center space-x-1">
              <template v-if="context.editing">
                <Editable.SubmitTrigger
                  :disabled="!isValid"
                  :class="`p-1.5 rounded-md transition-colors ${
                    isValid
                      ? 'text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20'
                      : 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                  }`"
                >
                  <Check class="h-4 w-4" />
                </Editable.SubmitTrigger>
                <Editable.CancelTrigger
                  class="p-1.5 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
                >
                  <X class="h-4 w-4" />
                </Editable.CancelTrigger>
              </template>
            </Editable.Control>
          </Editable.Context>
        </div>
        <p v-if="!isValid" class="text-xs text-red-600 dark:text-red-400 mt-1">
          Please enter a valid email address
        </p>
      </Editable.Root>
    </div>
  </div>
</template>
