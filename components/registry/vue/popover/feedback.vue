<script setup lang="ts">
import { Popover } from "@ark-ui/vue/popover";
import { MessageSquare, Send } from "lucide-vue-next";
import { ref } from "vue";

const feedback = ref("");
const isSubmitting = ref(false);
const submitted = ref(false);

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  if (!feedback.value.trim()) return;

  isSubmitting.value = true;

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  isSubmitting.value = false;
  submitted.value = true;

  // Reset after showing success
  setTimeout(() => {
    submitted.value = false;
    feedback.value = "";
  }, 2000);
};
</script>

<template>
  <Popover.Root>
    <Popover.Trigger
      class="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <MessageSquare :size="16" />
      Feedback
    </Popover.Trigger>
    <Teleport to="body">
      <Popover.Positioner>
        <Popover.Content
          class="z-50 w-80 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-lg data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
        >
          <Popover.Arrow
            class="[--arrow-size:12px] [--arrow-background:theme(colors.white)] dark:[--arrow-background:theme(colors.gray.800)]"
          >
            <Popover.ArrowTip
              class="border-t border-l border-gray-200 dark:border-gray-700"
            />
          </Popover.Arrow>
          <Popover.Title
            class="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100"
          >
            Send us feedback
          </Popover.Title>

          <div v-if="submitted" class="py-6 text-center">
            <div
              class="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900"
            >
              <svg
                class="h-5 w-5 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Thank you for your feedback!
            </p>
          </div>

          <form v-else @submit="handleSubmit" class="space-y-3">
            <div>
              <textarea
                v-model="feedback"
                placeholder="How can we improve this product?"
                :rows="3"
                class="w-full resize-none rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                :disabled="isSubmitting"
              />
            </div>

            <div class="flex justify-end">
              <button
                type="submit"
                :disabled="!feedback.trim() || isSubmitting"
                class="inline-flex items-center gap-2 rounded-lg bg-gray-900 dark:bg-gray-100 px-3 py-1.5 text-sm font-medium text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <template v-if="isSubmitting">
                  <svg
                    class="h-4 w-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    />
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </template>
                <template v-else>
                  <Send :size="16" />
                  Send feedback
                </template>
              </button>
            </div>
          </form>
        </Popover.Content>
      </Popover.Positioner>
    </Teleport>
  </Popover.Root>
</template>
