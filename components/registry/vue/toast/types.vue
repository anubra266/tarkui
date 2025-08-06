<script setup lang="ts">
import { Toast, Toaster, createToaster } from "@ark-ui/vue/toast";
import {
  CheckCircle,
  AlertCircle,
  X,
  Info,
  AlertTriangle,
} from "lucide-vue-next";
import { computed } from "vue";

const toaster = createToaster({
  overlap: true,
  placement: "bottom-end",
  gap: 16,
});

const toastTypes = [
  {
    type: "success" as const,
    title: "Success!",
    description: "Your changes have been saved.",
    icon: CheckCircle,
    colors: "bg-green-50 border-l-4 border-green-500 text-green-800",
    iconColor: "text-green-500",
  },
  {
    type: "error" as const,
    title: "Error occurred",
    description: "Something went wrong. Please try again.",
    icon: AlertCircle,
    colors: "bg-red-50 border-l-4 border-red-500 text-red-800",
    iconColor: "text-red-500",
  },
  {
    type: "warning" as const,
    title: "Warning",
    description: "This action cannot be undone.",
    icon: AlertTriangle,
    colors: "bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800",
    iconColor: "text-yellow-500",
  },
  {
    type: "info" as const,
    title: "New update available",
    description: "Version 2.1.0 is now available for download.",
    icon: Info,
    colors: "bg-blue-50 border-l-4 border-blue-500 text-blue-800",
    iconColor: "text-blue-500",
  },
];

const createToast = (item: (typeof toastTypes)[0]) => {
  toaster.create({
    title: item.title,
    description: item.description,
    type: item.type,
  });
};
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"
  >
    <div class="flex flex-wrap gap-2 justify-center">
      <button
        v-for="item in toastTypes"
        :key="item.type"
        type="button"
        @click="createToast(item)"
        class="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-xs font-medium capitalize"
      >
        {{ item.type }}
      </button>
    </div>

    <Teleport to="body">
      <Toaster :toaster="toaster" v-slot="{ toast }">
        <Toast.Root
          :class="`rounded-lg shadow-lg min-w-80 p-4 relative overflow-anywhere transition-all duration-300 ease-default will-change-transform h-(--height) opacity-(--opacity) translate-x-(--x) translate-y-(--y) scale-(--scale) z-(--z-index) ${
            toastTypes.find((t) => t.type === toast.type)?.colors || 'bg-white'
          }`"
        >
          <div class="flex items-start gap-3">
            <component
              :is="toastTypes.find((t) => t.type === toast.type)?.icon || Info"
              :class="`w-4 h-4 mt-0.5 shrink-0 ${
                toastTypes.find((t) => t.type === toast.type)?.iconColor ||
                'text-gray-500'
              }`"
            />
            <div class="flex-1">
              <Toast.Title class="font-semibold text-sm">
                {{ toast.title }}
              </Toast.Title>
              <Toast.Description class="text-sm opacity-80">
                {{ toast.description }}
              </Toast.Description>
            </div>
          </div>
          <Toast.CloseTrigger
            class="absolute top-3 right-3 p-1 hover:bg-black/10 rounded transition-colors"
          >
            <X class="w-3 h-3" />
          </Toast.CloseTrigger>
        </Toast.Root>
      </Toaster>
    </Teleport>
  </div>
</template>
