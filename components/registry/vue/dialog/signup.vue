<script setup>
import { Dialog } from "@ark-ui/vue/dialog";
import { X, UserPlus, Eye, EyeOff } from "lucide-vue-next";
import { reactive } from "vue";

const state = reactive({
  showPassword: false,
  accountData: {
    fullName: "",
    email: "",
    password: "",
    agreeToTerms: false,
  },
});

function togglePasswordVisibility() {
  state.showPassword = !state.showPassword;
}
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger as-child>
      <button
        class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center"
      >
        Sign Up
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
                <UserPlus class="h-5 w-5 text-gray-600 dark:text-white" />
              </div>
              <div class="space-y-1">
                <Dialog.Title
                  class="text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Create your account
                </Dialog.Title>
                <Dialog.Description
                  class="text-sm text-gray-600 dark:text-gray-400"
                >
                  Enter your details below to create your account.
                </Dialog.Description>
              </div>
            </div>

            <div class="space-y-4">
              <div class="space-y-3">
                <div class="space-y-1">
                  <label
                    class="block text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    v-model="state.accountData.fullName"
                    class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  />
                </div>

                <div class="space-y-1">
                  <label
                    class="block text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    v-model="state.accountData.email"
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
                      placeholder="Create a password"
                      v-model="state.accountData.password"
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
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Must be at least 8 characters long.
                  </p>
                </div>

                <div class="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    v-model="state.accountData.agreeToTerms"
                    class="mt-0.5 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="terms"
                    class="text-xs text-gray-600 dark:text-gray-400"
                  >
                    I agree to the{" "}
                    <button
                      class="text-gray-900 dark:text-white underline hover:no-underline transition-all"
                    >
                      Terms of Service</button
                    >{" "} and{" "}
                    <button
                      class="text-gray-900 dark:text-white underline hover:no-underline transition-all"
                    >
                      Privacy Policy
                    </button>
                  </label>
                </div>
              </div>

              <div class="space-y-2">
                <Dialog.CloseTrigger as-child>
                  <button
                    :disabled="!state.accountData.agreeToTerms"
                    :class="`w-full px-3 py-2 text-sm rounded-md transition-colors cursor-pointer inline-flex items-center justify-center font-medium ${
                      state.accountData.agreeToTerms
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                    }`"
                  >
                    Create account
                  </button>
                </Dialog.CloseTrigger>

                <div class="text-center">
                  <span class="text-xs text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <button
                      class="text-gray-900 dark:text-white underline hover:no-underline transition-all"
                    >
                      Sign in
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
