<script setup>
import { Dialog } from "@ark-ui/vue/dialog";
import { X, MessageCircle } from "lucide-vue-next";
import { reactive } from "vue";

const state = reactive({
  feedback: "",
});
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger as-child>
      <button
        class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center"
      >
        Send Feedback
      </button>
    </Dialog.Trigger>
    <Teleport to="body">
      <Dialog.Backdrop
        class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs"
      />
      <Dialog.Positioner
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <Dialog.Content
          class="relative w-full max-w-sm rounded-lg bg-white dark:bg-gray-900 p-5 shadow-lg"
        >
          <Dialog.CloseTrigger as-child>
            <button
              class="absolute right-3 top-3 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
            >
              <X class="h-4 w-4" />
            </button>
          </Dialog.CloseTrigger>

          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
              >
                <MessageCircle class="h-5 w-5 text-gray-600 dark:text-white" />
              </div>
              <div class="space-y-1">
                <Dialog.Title
                  class="text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Send feedback
                </Dialog.Title>
                <Dialog.Description
                  class="text-sm text-gray-600 dark:text-gray-400"
                >
                  We'd love to hear your thoughts.
                </Dialog.Description>
              </div>
            </div>

            <div class="space-y-4">
              <div class="space-y-2">
                <label
                  class="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your feedback
                </label>
                <textarea
                  v-model="state.feedback"
                  rows="4"
                  placeholder="Tell us what you think..."
                  class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors resize-none"
                ></textarea>
              </div>

              <div class="flex justify-end space-x-3">
                <Dialog.CloseTrigger as-child>
                  <button
                    class="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center"
                  >
                    Cancel
                  </button>
                </Dialog.CloseTrigger>

                <Dialog.CloseTrigger as-child>
                  <button
                    class="px-4 py-2 text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center font-medium"
                  >
                    Send feedback
                  </button>
                </Dialog.CloseTrigger>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Positioner>
    </Teleport>
  </Dialog.Root>
</template>
