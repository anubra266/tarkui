<script setup>
import { Dialog } from "@ark-ui/vue/dialog";
import { X, FileText } from "lucide-vue-next";
import { reactive, ref, onMounted, onUnmounted } from "vue";

const state = reactive({
  hasScrolledToBottom: false,
  acceptTerms: false,
});

const scrollContainerRef = ref(null);

function checkScroll() {
  const container = scrollContainerRef.value;
  if (container) {
    const isAtBottom =
      container.scrollTop + container.clientHeight >=
      container.scrollHeight - 10;
    if (isAtBottom && !state.hasScrolledToBottom) {
      state.hasScrolledToBottom = true;
    }
  }
}

onMounted(() => {
  if (scrollContainerRef.value) {
    scrollContainerRef.value.addEventListener("scroll", checkScroll);
  }
});

onUnmounted(() => {
  if (scrollContainerRef.value) {
    scrollContainerRef.value.removeEventListener("scroll", checkScroll);
  }
});
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button
        class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center"
      >
        Terms of Service
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
          class="relative w-full max-w-md rounded-lg bg-white dark:bg-gray-900 shadow-lg max-h-[80vh] flex flex-col"
        >
          <Dialog.CloseTrigger asChild>
            <button
              class="absolute right-3 top-3 z-10 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
            >
              <X class="h-4 w-4" />
            </button>
          </Dialog.CloseTrigger>

          <div class="p-5 pb-0">
            <div class="flex items-start space-x-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
              >
                <FileText class="h-5 w-5 text-gray-600 dark:text-white" />
              </div>
              <div class="space-y-1">
                <Dialog.Title
                  class="text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Terms of Service
                </Dialog.Title>
                <Dialog.Description
                  class="text-sm text-gray-600 dark:text-gray-400"
                >
                  Please read and accept our terms of service.
                </Dialog.Description>
              </div>
            </div>
          </div>

          <div
            ref="scrollContainerRef"
            class="flex-1 px-5 py-4 overflow-y-auto text-sm text-gray-700 dark:text-gray-300 space-y-4"
          >
            <div class="space-y-3">
              <h3 class="font-semibold text-gray-900 dark:text-white">
                1. Acceptance of Terms
              </h3>
              <p>
                By accessing and using this service, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>

              <h3 class="font-semibold text-gray-900 dark:text-white">
                2. Use License
              </h3>
              <p>
                Permission is granted to temporarily download one copy of the
                materials on our website for personal, non-commercial transitory
                viewing only. This is the grant of a license, not a transfer of
                title, and under this license you may not:
              </p>
              <ul class="list-disc list-inside ml-4 space-y-1">
                <li>modify or copy the materials</li>
                <li>
                  use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  attempt to reverse engineer any software contained on the
                  website
                </li>
              </ul>

              <h3 class="font-semibold text-gray-900 dark:text-white">
                3. Disclaimer
              </h3>
              <p>
                The materials on our website are provided on an 'as is' basis.
                We make no warranties, expressed or implied, and hereby disclaim
                and negate all other warranties including without limitation.
              </p>

              <h3 class="font-semibold text-gray-900 dark:text-white">
                4. Limitations
              </h3>
              <p>
                In no event shall our company or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on our website.
              </p>

              <h3 class="font-semibold text-gray-900 dark:text-white">
                5. Privacy Policy
              </h3>
              <p>
                Your privacy is important to us. Our Privacy Policy explains how
                we collect, use, and protect your information when you use our
                service.
              </p>

              <h3 class="font-semibold text-gray-900 dark:text-white">
                6. Governing Law
              </h3>
              <p>
                These terms and conditions are governed by and construed in
                accordance with the laws and you irrevocably submit to the
                exclusive jurisdiction of the courts.
              </p>
            </div>
          </div>

          <div class="p-5 pt-0 border-t border-gray-200 dark:border-gray-700">
            <div class="space-y-3">
              <div class="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="accept-terms"
                  :disabled="!state.hasScrolledToBottom"
                  v-model="state.acceptTerms"
                  :class="`mt-0.5 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${
                    !state.hasScrolledToBottom
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`"
                />
                <label
                  for="accept-terms"
                  :class="`text-sm ${
                    !state.hasScrolledToBottom
                      ? 'text-gray-400 dark:text-gray-600'
                      : 'text-gray-900 dark:text-white'
                  }`"
                >
                  I have read and agree to the Terms of Service
                </label>
              </div>

              <div
                v-if="!state.hasScrolledToBottom"
                class="text-xs text-amber-600 dark:text-amber-400"
              >
                Please scroll to the bottom to continue
              </div>

              <div class="flex justify-end space-x-3">
                <Dialog.CloseTrigger asChild>
                  <button
                    class="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center"
                  >
                    Cancel
                  </button>
                </Dialog.CloseTrigger>

                <Dialog.CloseTrigger asChild>
                  <button
                    :disabled="!state.acceptTerms"
                    :class="`px-4 py-2 text-sm rounded-md transition-colors cursor-pointer inline-flex items-center justify-center font-medium ${
                      state.acceptTerms
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                    }`"
                  >
                    Accept
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
