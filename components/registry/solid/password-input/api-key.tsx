"use client";

import { PasswordInput } from "@ark-ui/solid/password-input";
import { Eye, EyeOff, Key } from "lucide-solid";

export default function ApiKey() {
  return (
    <div class="flex items-center justify-center min-h-32">
      <PasswordInput.Root ignorePasswordManagers class="w-80">
        <PasswordInput.Label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
          <Key class="w-4 h-4" />
          API Key
        </PasswordInput.Label>
        <PasswordInput.Control class="relative h-9 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500 dark:focus-within:border-blue-400 transition-all">
          <PasswordInput.Input
            class="w-full h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 pr-10 font-mono text-sm border-none outline-hidden focus:outline-hidden focus-visible:outline-hidden"
            defaultValue="sk_test_1234567890abcdef"
          />
          <PasswordInput.VisibilityTrigger class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            <PasswordInput.Indicator fallback={<EyeOff class="w-4 h-4" />}>
              <Eye class="w-4 h-4" />
            </PasswordInput.Indicator>
          </PasswordInput.VisibilityTrigger>
        </PasswordInput.Control>
        <div class="text-xs text-gray-500 dark:text-gray-400 mt-3">
          Keep your API key secure and never share it publicly
        </div>
      </PasswordInput.Root>
    </div>
  );
}
