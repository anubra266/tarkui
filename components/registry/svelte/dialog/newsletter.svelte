<script lang="ts">
  import { Dialog } from "@ark-ui/svelte/dialog";
  import { Portal } from "@ark-ui/svelte/portal";
  import { X, Mail } from "lucide-svelte";

  let email = "";
</script>

<Dialog.Root>
  <Dialog.Trigger>
    <button
      class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center"
    >
      Newsletter
    </button>
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
              <Mail class="h-5 w-5 text-gray-600 dark:text-white" />
            </div>
            <div class="space-y-1">
              <Dialog.Title
                class="text-lg font-semibold text-gray-900 dark:text-white"
              >
                Subscribe to our newsletter
              </Dialog.Title>
              <Dialog.Description
                class="text-sm text-gray-600 dark:text-gray-400"
              >
                Get the latest updates and news directly in your inbox.
              </Dialog.Description>
            </div>
          </div>

          <div class="space-y-3">
            <div class="relative">
              <Mail
                class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
              />
              <input
                type="email"
                placeholder="name@company.com"
                bind:value={email}
                class="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
              />
            </div>

            <Dialog.CloseTrigger>
              <button
                class="w-full px-3 py-2 text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center font-medium"
              >
                Subscribe
              </button>
            </Dialog.CloseTrigger>
          </div>

          <p class="text-xs text-gray-500 dark:text-gray-400">
            By subscribing you agree to our
            <a
              href="#"
              class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 underline transition-colors"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
