<script lang="ts">
  import { Dialog } from "@ark-ui/svelte/dialog";
  import { Portal } from "@ark-ui/svelte/portal";
  import { X, AlertTriangle } from "lucide-svelte";
</script>

<Dialog.Root>
  <Dialog.Trigger>
    {#snippet asChild(props)}
      <button
        {...props()}
        class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center"
      >
        Alert w/ icon
      </button>
    {/snippet}
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs" />
    <Dialog.Positioner
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <Dialog.Content
        class="relative w-full max-w-sm rounded-lg bg-white dark:bg-gray-900 p-5 shadow-lg"
      >
        <Dialog.CloseTrigger>
          {#snippet asChild(props)}
            <button
              {...props()}
              class="absolute right-3 top-3 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
            >
              <X class="h-4 w-4" />
            </button>
          {/snippet}
        </Dialog.CloseTrigger>

        <div class="space-y-4">
          <div class="flex items-start space-x-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20"
            >
              <AlertTriangle
                class="h-5 w-5 text-orange-600 dark:text-orange-400"
              />
            </div>
            <div class="space-y-1">
              <Dialog.Title
                class="text-lg font-semibold text-gray-900 dark:text-white"
              >
                Confirm action
              </Dialog.Title>
              <Dialog.Description
                class="text-sm text-gray-600 dark:text-gray-400"
              >
                Are you sure you want to continue? This action cannot be undone.
              </Dialog.Description>
            </div>
          </div>

          <Dialog.CloseTrigger>
            {#snippet asChild(props)}
              <button
                {...props()}
                class="w-full px-3 py-2 text-sm bg-red-600 text-white hover:bg-red-700 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center font-medium"
              >
                Continue
              </button>
            {/snippet}
          </Dialog.CloseTrigger>
        </div>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
