"use client";

import { Field } from "@ark-ui/solid/field";
import { PasswordInput } from "@ark-ui/solid/password-input";
import { Eye, EyeOff } from "lucide-solid";
import { createSignal, createMemo } from "solid-js";

export default function WithField() {
  const [password, setPassword] = createSignal("");
  const [hasError, setHasError] = createSignal(false);

  const handlePasswordChange = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setPassword(value);
    setHasError(value.length > 0 && value.length < 8);
  };

  return (
    <div class="flex items-center justify-center min-h-32">
      <Field.Root invalid={hasError()} class="w-64">
        <PasswordInput.Root>
          <PasswordInput.Label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
            Password
          </PasswordInput.Label>
          <PasswordInput.Control class="relative h-9 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500 dark:focus-within:border-blue-400 transition-all data-[invalid]:border-red-500 dark:data-[invalid]:border-red-400 data-[invalid]:focus-within:ring-red-500/50 dark:data-[invalid]:focus-within:ring-red-400/50">
            <PasswordInput.Input
              class="w-full h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 pr-10 border-none outline-none focus:outline-none focus-visible:outline-none"
              value={password()}
              onInput={handlePasswordChange}
            />
            <PasswordInput.VisibilityTrigger class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              <PasswordInput.Indicator fallback={<EyeOff class="w-4 h-4" />}>
                <Eye class="w-4 h-4" />
              </PasswordInput.Indicator>
            </PasswordInput.VisibilityTrigger>
          </PasswordInput.Control>
        </PasswordInput.Root>

        {!hasError() && !password() && (
          <Field.HelperText class="text-xs text-gray-500 dark:text-gray-400 mt-3">
            Enter a secure password for your account
          </Field.HelperText>
        )}

        <Field.ErrorText class="text-xs text-red-600 dark:text-red-400 mt-3">
          Password must be at least 8 characters long
        </Field.ErrorText>

        {password().length >= 8 && (
          <Field.HelperText class="text-xs text-green-600 dark:text-green-400 mt-3">
            Password meets minimum requirements
          </Field.HelperText>
        )}
      </Field.Root>
    </div>
  );
}
