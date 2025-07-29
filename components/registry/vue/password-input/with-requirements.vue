<script setup lang="ts">
import { PasswordInput } from "@ark-ui/vue/password-input";
import { Eye, EyeOff, Check, X } from "lucide-vue-next";
import { ref } from "vue";

const password = ref("");

const requirements = [
  {
    label: "At least 8 characters",
    test: (pwd: string) => pwd.length >= 8,
  },
  {
    label: "Contains uppercase letter",
    test: (pwd: string) => /[A-Z]/.test(pwd),
  },
  {
    label: "Contains lowercase letter",
    test: (pwd: string) => /[a-z]/.test(pwd),
  },
  {
    label: "Contains number",
    test: (pwd: string) => /[0-9]/.test(pwd),
  },
  {
    label: "Contains special character",
    test: (pwd: string) => /[^A-Za-z0-9]/.test(pwd),
  },
];
</script>

<template>
  <div class="flex items-center justify-center min-h-32">
    <PasswordInput.Root class="w-72">
      <PasswordInput.Label
        class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block"
      >
        Create Password
      </PasswordInput.Label>
      <PasswordInput.Control
        class="relative h-9 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500 dark:focus-within:border-blue-400 transition-all"
      >
        <PasswordInput.Input
          class="w-full h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 pr-10 border-none outline-none focus:outline-none focus-visible:outline-none"
          v-model="password"
        />
        <PasswordInput.VisibilityTrigger
          class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          <PasswordInput.Indicator>
            <Eye class="w-4 h-4" />
            <template #fallback>
              <EyeOff class="w-4 h-4" />
            </template>
          </PasswordInput.Indicator>
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>

      <div class="mt-3 space-y-2">
        <div
          v-for="(req, index) in requirements"
          :key="index"
          class="flex items-center gap-2 text-xs"
        >
          <div
            :class="`w-4 h-4 rounded-full flex items-center justify-center ${
              req.test(password)
                ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500'
            }`"
          >
            <Check v-if="req.test(password)" class="w-2.5 h-2.5" />
            <X v-else class="w-2.5 h-2.5" />
          </div>
          <span
            :class="
              req.test(password)
                ? 'text-green-600 dark:text-green-400'
                : 'text-gray-500 dark:text-gray-400'
            "
          >
            {{ req.label }}
          </span>
        </div>
      </div>
    </PasswordInput.Root>
  </div>
</template>
