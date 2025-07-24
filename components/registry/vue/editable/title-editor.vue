<script setup>
import { Editable } from "@ark-ui/vue/editable";
import { Type, Edit3, Check, X } from "lucide-vue-next";
import { reactive, computed } from "vue";

const state = reactive({
  value: "The Future of Web Development: Trends and Technologies",
});

const maxLength = 100;
const remainingChars = computed(() => maxLength - state.value.length);

const handleValueChange = (details) => {
  if (details.value.length <= maxLength) {
    state.value = details.value;
  }
};
</script>

<template>
  <div class="w-full max-w-2xl space-y-4">
    <div
      class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6"
    >
      <div class="flex items-center space-x-3 mb-6">
        <div
          class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center"
        >
          <Type class="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Article Title
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Create an engaging title for your content
          </p>
        </div>
      </div>

      <Editable.Root
        :value="state.value"
        @value-change="handleValueChange"
        :max-length="maxLength"
        placeholder="Enter your article title..."
        auto-resize
      >
        <div class="flex items-center justify-between mb-3">
          <Editable.Label
            class="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Title
          </Editable.Label>
          <div
            class="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400"
          >
            <span
              :class="
                remainingChars < 10
                  ? 'text-orange-500 dark:text-orange-400'
                  : ''
              "
            >
              {{ remainingChars }} characters remaining
            </span>
            <Editable.Context v-slot="context">
              <Editable.Control class="flex items-center space-x-1">
                <template v-if="context.editing">
                  <Editable.SubmitTrigger
                    class="p-1 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20 rounded transition-colors"
                  >
                    <Check class="h-3 w-3" />
                  </Editable.SubmitTrigger>
                  <Editable.CancelTrigger
                    class="p-1 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                  >
                    <X class="h-3 w-3" />
                  </Editable.CancelTrigger>
                </template>
                <template v-else>
                  <Editable.EditTrigger
                    class="p-1 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                  >
                    <Edit3 class="h-3 w-3" />
                  </Editable.EditTrigger>
                </template>
              </Editable.Control>
            </Editable.Context>
          </div>
        </div>

        <Editable.Area>
          <Editable.Input
            class="w-full px-4 py-3 text-xl font-bold border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors resize-none min-h-[3.5rem]"
          />
          <Editable.Preview
            class="w-full px-4 py-3 text-xl font-bold border border-transparent rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white hover:border-gray-300 dark:hover:border-gray-600 cursor-text transition-colors min-h-[3.5rem] flex items-center"
          />
        </Editable.Area>

        <div class="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h4 class="text-sm font-medium text-gray-900 dark:text-white mb-2">
            Title Preview
          </h4>
          <div
            class="text-lg font-semibold text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            {{ state.value || "Your title will appear here..." }}
          </div>
        </div>

        <div class="mt-4 text-xs text-gray-500 dark:text-gray-400">
          💡 Click the title above to edit • Use a compelling title to engage
          your readers
        </div>
      </Editable.Root>
    </div>
  </div>
</template>
