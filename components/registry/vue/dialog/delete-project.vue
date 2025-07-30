<script setup>
import { Dialog } from "@ark-ui/vue/dialog";
import { X, Trash2 } from "lucide-vue-next";
import { reactive, computed } from "vue";

const state = reactive({
  projectName: "",
});

const correctProjectName = "my-awesome-project";
const isDeleteEnabled = computed(
  () => state.projectName === correctProjectName
);
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger as-child>
      <button
        class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center"
      >
        Delete Project
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
                class="flex h-10 w-10 items-center justify-center rounded-full border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20"
              >
                <Trash2 class="h-5 w-5 text-red-600 dark:text-red-400" />
              </div>
              <div class="space-y-1">
                <Dialog.Title
                  class="text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Delete project
                </Dialog.Title>
                <Dialog.Description
                  class="text-sm text-gray-600 dark:text-gray-400"
                >
                  This action cannot be undone. This will permanently delete
                  your project and all of its data.
                </Dialog.Description>
              </div>
            </div>

            <div class="space-y-3">
              <div class="space-y-2">
                <p class="text-sm text-gray-900 dark:text-white">
                  Please type{" "}
                  <span
                    class="font-mono font-medium bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs"
                  >
                    {{ correctProjectName }} </span
                  >{" "} to confirm.
                </p>
                <input
                  type="text"
                  v-model="state.projectName"
                  class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 transition-colors"
                />
              </div>

              <Dialog.CloseTrigger as-child>
                <button
                  :disabled="!isDeleteEnabled"
                  :class="`w-full px-3 py-2 text-sm rounded-md transition-colors cursor-pointer inline-flex items-center justify-center font-medium ${
                    isDeleteEnabled
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                  }`"
                >
                  Delete project
                </button>
              </Dialog.CloseTrigger>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Positioner>
    </Teleport>
  </Dialog.Root>
</template>
