"use client";

import { PinInput } from "@ark-ui/react/pin-input";
import { useState } from "react";

export default function Verification() {
  const [isComplete, setIsComplete] = useState(false);

  const handleValueComplete = (details: any) => {
    console.log(details.valueAsString);
    setIsComplete(true);
    // Simulate verification delay
    setTimeout(() => setIsComplete(false), 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-32">
      <div className="w-96 text-center">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Verify your phone
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            We sent a verification code to <br />
            <span className="font-medium">+1 (555) 123-4567</span>
          </p>
        </div>

        <PinInput.Root
          otp
          blurOnComplete
          onValueComplete={handleValueComplete}
          autoFocus
        >
          <PinInput.Control className="flex gap-3 justify-center mb-6">
            {[0, 1, 2, 3, 4, 5].map((_, index) => (
              <PinInput.Input
                key={index}
                index={index}
                className={`w-12 h-12 text-center text-lg font-medium border rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 transition-all ${
                  isComplete
                    ? "border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-900/20"
                    : "border-gray-200 dark:border-gray-700 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400"
                }`}
              />
            ))}
          </PinInput.Control>
          <PinInput.HiddenInput />
        </PinInput.Root>

        <div className="space-y-3">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Didn't receive the code?
          </p>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
            Resend code
          </button>
        </div>
      </div>
    </div>
  );
}
