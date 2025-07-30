"use client";

import { PinInput } from "@ark-ui/solid/pin-input";

export default function TwoFactor() {
  return (
    <div class="flex items-center justify-center min-h-32">
      <div class="w-96">
        <PinInput.Root
          otp
          onValueComplete={(e) => console.log(e.valueAsString)}
        >
          <PinInput.Label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
            Two-factor authentication code
          </PinInput.Label>
          <PinInput.Control class="flex items-center gap-3">
            <div class="flex gap-2">
              {[0, 1, 2].map((_, index) => (
                <PinInput.Input
                  index={index}
                  class="w-12 h-12 text-center text-lg font-medium border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400 transition-all"
                />
              ))}
            </div>
            <span class="text-gray-400 dark:text-gray-500 text-lg font-medium">
              -
            </span>
            <div class="flex gap-2">
              {[3, 4, 5].map((_, index) => (
                <PinInput.Input
                  index={index + 3}
                  class="w-12 h-12 text-center text-lg font-medium border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400 transition-all"
                />
              ))}
            </div>
          </PinInput.Control>
          <PinInput.HiddenInput />
        </PinInput.Root>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-3">
          Enter the 6-digit code from your authenticator app
        </p>
      </div>
    </div>
  );
}
