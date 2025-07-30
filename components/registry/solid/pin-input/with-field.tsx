"use client";

import { Field } from "@ark-ui/solid/field";
import { PinInput } from "@ark-ui/solid/pin-input";
import { createSignal } from "solid-js";

export default function WithField() {
  const [isInvalid, setIsInvalid] = createSignal(false);

  const handleValueComplete = (details: any) => {
    const pin = details.valueAsString;
    console.log(pin);

    // Simulate validation - reject "1234"
    if (pin === "1234") {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };

  const handleValueChange = () => {
    if (isInvalid()) {
      setIsInvalid(false);
    }
  };

  return (
    <div class="flex items-center justify-center min-h-32">
      <Field.Root invalid={isInvalid()} class="w-80 flex flex-col gap-2">
        <PinInput.Root
          onValueComplete={handleValueComplete}
          onValueChange={handleValueChange}
          invalid={isInvalid()}
        >
          <PinInput.Label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
            Enter PIN
          </PinInput.Label>
          <PinInput.Control class="flex gap-2">
            {[0, 1, 2, 3].map((_, index) => (
              <PinInput.Input
                index={index}
                class="w-12 h-12 text-center text-lg font-medium border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400 transition-all data-invalid:border-red-500 dark:data-invalid:border-red-400 data-invalid:focus:ring-red-500/50 dark:data-invalid:focus:ring-red-400/50"
              />
            ))}
          </PinInput.Control>
          <PinInput.HiddenInput />
        </PinInput.Root>

        <Field.HelperText class="text-xs text-gray-500 dark:text-gray-400 mt-3">
          Enter a 4-digit PIN (don't use 1234)
        </Field.HelperText>

        <Field.ErrorText class="text-xs text-red-600 dark:text-red-400 mt-2">
          This PIN is too common. Please choose a different one.
        </Field.ErrorText>
      </Field.Root>
    </div>
  );
}
