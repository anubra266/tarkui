<script setup lang="ts">
import { Toast, Toaster, createToaster } from "@ark-ui/vue/toast";
import { X, Loader2 } from "lucide-vue-next";
import { ref } from "vue";

const toaster = createToaster({
  overlap: true,
  placement: "bottom-end",
  gap: 16,
});

const toastId = ref<string>();

const createToast = () => {
  toastId.value = toaster.create({
    title: "Uploading...",
    description: "Your file is being uploaded.",
    type: "loading",
    duration: Infinity,
  });
};

const updateToast = () => {
  if (!toastId.value) return;

  toaster.update(toastId.value, {
    title: "Upload complete!",
    description: "Your file has been uploaded successfully.",
    type: "success",
    duration: 5000,
  });
};
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"
  >
    <div class="flex gap-2">
      <button
        type="button"
        @click="createToast"
        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
      >
        Start Upload
      </button>
      <button
        type="button"
        @click="updateToast"
        class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-sm font-medium"
      >
        Complete Upload
      </button>
    </div>

    <Teleport to="body">
      <Toaster :toaster="toaster" v-slot="{ toast }">
        <Toast.Root
          class="bg-linear-to-r from-white to-gray-50 border-l-4 border-blue-500 rounded-lg shadow-lg min-w-80 p-4 relative overflow-anywhere transition-all duration-300 ease-default will-change-transform h-(--height) opacity-(--opacity) translate-x-(--x) translate-y-(--y) scale-(--scale) z-(--z-index)"
        >
          <div class="flex items-start gap-3">
            <Loader2
              v-if="toast.type === 'loading'"
              class="w-4 h-4 mt-0.5 text-blue-500 animate-spin shrink-0"
            />
            <div
              v-if="toast.type === 'success'"
              class="w-4 h-4 mt-0.5 bg-green-500 rounded-full flex items-center justify-center shrink-0"
            >
              <X class="w-2 h-2 text-white rotate-45" />
            </div>
            <div class="flex-1">
              <Toast.Title class="text-gray-900 font-semibold text-sm">
                {{ toast.title }}
              </Toast.Title>
              <Toast.Description class="text-gray-600 text-sm mt-1">
                {{ toast.description }}
              </Toast.Description>
              <div
                v-if="toast.type === 'loading'"
                class="mt-2 w-full bg-gray-200 rounded-full h-1.5"
              >
                <div
                  class="bg-blue-500 h-1.5 rounded-full animate-pulse"
                  style="width: 60%"
                ></div>
              </div>
            </div>
          </div>
          <Toast.CloseTrigger
            class="absolute top-3 right-3 p-1 hover:bg-white/50 rounded transition-colors text-gray-400 hover:text-gray-600"
          >
            <X class="w-3 h-3" />
          </Toast.CloseTrigger>
        </Toast.Root>
      </Toaster>
    </Teleport>
  </div>
</template>
