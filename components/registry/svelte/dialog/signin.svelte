<script>
  import { Dialog } from "@ark-ui/svelte/dialog";
  import { Portal } from "@ark-ui/svelte/portal";
  import { X, LogIn } from "lucide-svelte";

  const state = $state({
    formData: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
</script>

<Dialog.Root>
  <Dialog.Trigger asChild>
    <button
      class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center"
    >
      Sign In
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
        <Dialog.CloseTrigger asChild>
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
              <LogIn class="h-5 w-5 text-gray-600 dark:text-white" />
            </div>
            <div class="space-y-1">
              <Dialog.Title
                class="text-lg font-semibold text-gray-900 dark:text-white"
              >
                Sign in
              </Dialog.Title>
              <Dialog.Description
                class="text-sm text-gray-600 dark:text-gray-400"
              >
                Welcome back! Please sign in to continue.
              </Dialog.Description>
            </div>
          </div>

          <div class="space-y-3">
            <div class="space-y-1">
              <label
                class="block text-xs font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                value={state.formData.email}
                on:input={(e) => (state.formData.email = e.target.value)}
                class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
              />
            </div>

            <div class="space-y-1">
              <label
                class="block text-xs font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                value={state.formData.password}
                on:input={(e) => (state.formData.password = e.target.value)}
                class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
              />
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={state.formData.rememberMe}
                  on:change={(e) =>
                    (state.formData.rememberMe = e.target.checked)}
                  class="w-3 h-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 focus:ring-0 focus:ring-offset-0"
                />
                <label
                  for="rememberMe"
                  class="text-xs text-gray-600 dark:text-gray-400 cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <button
                class="text-xs text-blue-600 dark:text-blue-400 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <Dialog.CloseTrigger asChild>
              <button
                class="w-full px-3 py-2 text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center font-medium"
              >
                Sign in
              </button>
            </Dialog.CloseTrigger>

            <Dialog.CloseTrigger asChild>
              <button
                class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center"
              >
                Continue with Google
              </button>
            </Dialog.CloseTrigger>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
