"use client";

import { Steps } from "@ark-ui/react/steps";
import { Check } from "lucide-react";

export default function StepsWithNavigation() {
  const steps = [1, 2, 3, 4];

  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <Steps.Root
        count={4}
        defaultStep={2}
        className="w-full max-w-2xl space-y-6"
      >
        <Steps.List className="flex justify-between items-center">
          {steps.map((step, index) => (
            <Steps.Item
              key={step}
              index={index}
              className="relative flex not-last:flex-1 items-center"
            >
              <Steps.Trigger
                className="flex items-center gap-3 text-left rounded-md group cursor-default"
                disabled
              >
                <Steps.Indicator className="flex justify-center items-center shrink-0 rounded-full font-semibold w-8 h-8 text-sm border-2 data-complete:bg-blue-600 data-complete:text-white data-complete:border-blue-600 data-current:bg-blue-600 data-current:text-white data-current:border-blue-600 data-incomplete:bg-gray-100 data-incomplete:text-gray-500 data-incomplete:border-gray-200 dark:data-incomplete:bg-gray-700 dark:data-incomplete:text-gray-300 dark:data-incomplete:border-gray-600 relative">
                  <span className="group-data-complete:hidden">{step}</span>
                  <Check className="w-4 h-4 group-data-complete:block hidden" />
                </Steps.Indicator>
              </Steps.Trigger>
              <Steps.Separator
                hidden={index === steps.length - 1}
                className="flex-1 bg-gray-200 dark:bg-gray-700 h-0.5 mx-3 data-complete:bg-blue-600"
              />
            </Steps.Item>
          ))}
        </Steps.List>

        <div className="flex justify-center gap-3 mt-8">
          <Steps.PrevTrigger className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700">
            Prev step
          </Steps.PrevTrigger>
          <Steps.NextTrigger className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700">
            Next step
          </Steps.NextTrigger>
        </div>
      </Steps.Root>
    </div>
  );
}
