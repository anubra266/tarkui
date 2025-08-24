<script setup>
import { Dialog } from "@ark-ui/vue/dialog";
import { X, User, Eye, EyeOff } from "lucide-vue-next";
import { reactive } from "vue";

const state = reactive({
  showPassword: false,
  credentials: {
    email: "",
    password: "",
  },
});

function togglePasswordVisibility() {
  state.showPassword = !state.showPassword;
}
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button
        class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center"
      >
        Sign In
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
                <User class="h-5 w-5 text-gray-600 dark:text-white" />
              </div>
              <div class="space-y-1">
                <Dialog.Title
                  class="text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Sign in to your account
                </Dialog.Title>
                <Dialog.Description
                  class="text-sm text-gray-600 dark:text-gray-400"
                >
                  Enter your email and password below.
                </Dialog.Description>
              </div>
            </div>

            <div class="space-y-4">
              <div class="space-y-3">
                <div class="space-y-1">
                  <label
                    class="block text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    v-model="state.credentials.email"
                    class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  />
                </div>

                <div class="space-y-1">
                  <label
                    class="block text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <div class="relative">
                    <input
                      :type="state.showPassword ? 'text' : 'password'"
                      placeholder="Enter your password"
                      v-model="state.credentials.password"
                      class="w-full px-3 py-2 pr-10 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                    />
                    <button
                      type="button"
                      @click="togglePasswordVisibility"
                      class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      <Eye v-if="!state.showPassword" class="h-4 w-4" />
                      <EyeOff v-else class="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div class="text-right">
                  <button
                    class="text-xs text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 underline transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>

              <div class="space-y-2">
                <Dialog.CloseTrigger asChild>
                  <button
                    class="w-full px-3 py-2 text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center font-medium"
                  >
                    Sign in
                  </button>
                </Dialog.CloseTrigger>

                <div class="text-center">
                  <span class="text-xs text-gray-500 dark:text-gray-400">
                    Don't have an account?{" "}
                    <button
                      class="text-gray-900 dark:text-white underline hover:no-underline transition-all"
                    >
                      Sign up
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Positioner>
    </Teleport>
  </Dialog.Root>
</template>
