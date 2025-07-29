<script setup lang="ts">
import { PasswordInput } from "@ark-ui/vue/password-input";
import { Eye, EyeOff } from "lucide-vue-next";
import { ref, computed } from "vue";

const password = ref("");

const getStrength = (pwd: string) => {
  let score = 0;
  if (pwd.length >= 8) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[a-z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  return score;
};

const strength = computed(() => getStrength(password.value));
const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
const strengthColors = [
  "bg-red-500",
  "bg-orange-500",
  "bg-yellow-500",
  "bg-blue-500",
  "bg-green-500",
];
</script>

<template>
  <div class="flex items-center justify-center min-h-32">
    <PasswordInput.Root class="w-64">
      <PasswordInput.Label
        class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block"
      >
        Password
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

      <div class="mt-3">
        <div class="flex gap-1 mb-2">
          <div
            v-for="i in 5"
            :key="i"
            :class="`h-1 flex-1 rounded-full transition-colors ${
              i <= strength
                ? strengthColors[strength - 1]
                : 'bg-gray-200 dark:bg-gray-700'
            }`"
          />
        </div>
        <p class="text-xs text-gray-600 dark:text-gray-400">
          {{
            password.length === 0
              ? "Enter a password"
              : `Strength: ${strengthLabels[strength - 1] || "Very Weak"}`
          }}
        </p>
      </div>
    </PasswordInput.Root>
  </div>
</template>
