"use client";

import { PasswordInput } from "@ark-ui/solid/password-input";
import { Eye, EyeOff } from "lucide-solid";

export default function Basic() {
  return (
    <div class="flex items-center justify-center min-h-32">
      <PasswordInput.Root class="w-64">
        <PasswordInput.Label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
          Password
        </PasswordInput.Label>
        <PasswordInput.Control class="relative h-9 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500 dark:focus-within:border-blue-400 transition-all">
          <PasswordInput.Input class="w-full h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 pr-10 border-none outline-none focus:outline-none focus-visible:outline-none" />
          <PasswordInput.VisibilityTrigger class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            <PasswordInput.Indicator fallback={<EyeOff class="w-4 h-4" />}>
              <Eye class="w-4 h-4" />
            </PasswordInput.Indicator>
          </PasswordInput.VisibilityTrigger>
        </PasswordInput.Control>
      </PasswordInput.Root>
    </div>
  );
}
