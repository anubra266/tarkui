"use client";

import { Steps } from "@ark-ui/react/steps";
import { Check } from "lucide-react";

export default function StepsWithProgress() {
  const steps = [1, 2, 3, 4];

  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <Steps.Root
        count={4}
        defaultStep={0}
        className="w-full max-w-2xl space-y-6"
      >
        <Steps.List className="flex justify-between items-start">
          {steps.map((step, index) => (
            <Steps.Item
              key={step}
              index={index}
              className="relative flex flex-col items-center flex-1"
            >
              <Steps.Trigger
                className="w-full flex flex-col items-start gap-2 text-left group cursor-default"
                disabled
              >
                <Steps.Indicator className="w-full shrink-0 h-1 data-complete:bg-blue-600 data-current:bg-blue-600 data-incomplete:bg-gray-300 dark:data-incomplete:bg-gray-600" />
              </Steps.Trigger>
            </Steps.Item>
          ))}
        </Steps.List>

        <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
          Step 1 of 4
        </div>

        <div className="flex justify-center gap-3">
          <Steps.PrevTrigger className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700">
            Prev step
          </Steps.PrevTrigger>
          <Steps.NextTrigger className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700">
            Next step
          </Steps.NextTrigger>
        </div>
      </Steps.Root>
    </div>
  );
}
