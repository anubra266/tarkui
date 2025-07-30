"use client";

import { PinInput } from "@ark-ui/solid/pin-input";
import { createSignal } from "solid-js";

export default function Verification() {
  const [isComplete, setIsComplete] = createSignal(false);

  const handleValueComplete = (details: any) => {
    console.log(details.valueAsString);
    setIsComplete(true);
    // Simulate verification delay
    setTimeout(() => setIsComplete(false), 2000);
  };

  return (
    <div class="flex items-center justify-center min-h-32">
      <div class="w-96 text-center">
        <div class="mb-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Verify your phone
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            We sent a verification code to <br />
            <span class="font-medium">+1 (555) 123-4567</span>
          </p>
        </div>

        <PinInput.Root
          otp
          blurOnComplete
          onValueComplete={handleValueComplete}
          autoFocus
        >
          <PinInput.Control class="flex gap-3 justify-center mb-6">
            {[0, 1, 2, 3, 4, 5].map((_, index) => (
              <PinInput.Input
                index={index}
                class={`w-12 h-12 text-center text-lg font-medium border rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-hidden focus:ring-2 transition-all ${
                  isComplete()
                    ? "border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-900/20"
                    : "border-gray-200 dark:border-gray-700 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400"
                }`}
              />
            ))}
          </PinInput.Control>
          <PinInput.HiddenInput />
        </PinInput.Root>

        <div class="space-y-3">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Didn't receive the code?
          </p>
          <button class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
            Resend code
          </button>
        </div>
      </div>
    </div>
  );
}
