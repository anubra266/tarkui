"use client";

import { PasswordInput } from "@ark-ui/solid/password-input";
import { Eye, EyeOff } from "lucide-solid";
import { createSignal, createMemo } from "solid-js";

export default function WithStrength() {
  const [password, setPassword] = createSignal("");

  const getStrength = (pwd: string) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return score;
  };

  const strength = createMemo(() => getStrength(password()));
  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
  const strengthColors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-green-500",
  ];

  return (
    <div class="flex items-center justify-center min-h-32">
      <PasswordInput.Root class="w-64">
        <PasswordInput.Label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
          Password
        </PasswordInput.Label>
        <PasswordInput.Control class="relative h-9 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500 dark:focus-within:border-blue-400 transition-all">
          <PasswordInput.Input
            class="w-full h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 pr-10 border-none outline-hidden focus:outline-hidden focus-visible:outline-hidden"
            value={password()}
            onInput={(e) => setPassword(e.target.value)}
          />
          <PasswordInput.VisibilityTrigger class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            <PasswordInput.Indicator fallback={<EyeOff class="w-4 h-4" />}>
              <Eye class="w-4 h-4" />
            </PasswordInput.Indicator>
          </PasswordInput.VisibilityTrigger>
        </PasswordInput.Control>

        <div class="mt-3">
          <div class="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <div
                class={`h-1 flex-1 rounded-full transition-colors ${
                  i < strength()
                    ? strengthColors[strength() - 1]
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              />
            ))}
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            {password().length === 0
              ? "Enter a password"
              : `Strength: ${strengthLabels[strength() - 1] || "Very Weak"}`}
          </p>
        </div>
      </PasswordInput.Root>
    </div>
  );
}
