"use client";

import { Steps } from "@ark-ui/react/steps";

export default function StepsWithLines() {
  const steps = ["Step One", "Step Two", "Step Three", "Step Four"];

  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <Steps.Root count={4} defaultStep={1} className="w-full max-w-2xl">
        <Steps.List className="flex justify-between items-start gap-4">
          {steps.map((step, index) => (
            <Steps.Item
              key={index}
              index={index}
              className="relative flex flex-col items-center flex-1"
            >
              <Steps.Trigger className="w-full flex flex-col items-start gap-2 text-left rounded-md group">
                <Steps.Indicator className="w-full shrink-0 h-1 rounded-full data-complete:bg-blue-600 data-current:bg-blue-600 data-incomplete:bg-gray-300 dark:data-incomplete:bg-gray-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-data-complete:text-blue-600 group-data-current:text-blue-600 text-left">
                  {step}
                </span>
              </Steps.Trigger>
            </Steps.Item>
          ))}
        </Steps.List>
      </Steps.Root>
    </div>
  );
}
