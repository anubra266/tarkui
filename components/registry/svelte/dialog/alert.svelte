<script>
  import { Dialog } from "@ark-ui/svelte/dialog";
  import { Portal } from "@ark-ui/svelte/portal";
</script>

<Dialog.Root>
  <Dialog.Trigger asChild>
    <button
      class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center"
    >
      Alert dialog
    </button>
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
    <Dialog.Positioner
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <Dialog.Content
        class="relative w-full max-w-md rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg"
      >
        <div class="space-y-4">
          <div class="space-y-2">
            <Dialog.Title
              class="text-lg font-semibold text-gray-900 dark:text-gray-100"
            >
              Are you sure?
            </Dialog.Title>
            <Dialog.Description
              class="text-sm text-gray-500 dark:text-gray-400"
            >
              Take a moment to review the details provided to ensure you
              understand the implications.
            </Dialog.Description>
          </div>
          <div class="flex gap-3 justify-end">
            <Dialog.CloseTrigger asChild>
              <button
                class="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center"
              >
                Cancel
              </button>
            </Dialog.CloseTrigger>
            <Dialog.CloseTrigger asChild>
              <button
                class="px-4 py-2 text-sm bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center"
              >
                Okay
              </button>
            </Dialog.CloseTrigger>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
