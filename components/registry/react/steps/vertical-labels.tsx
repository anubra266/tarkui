"use client";

import { Steps } from "@ark-ui/react/steps";
import { Check } from "lucide-react";

export default function VerticalLabelsSteps() {
  const steps = ["Step One", "Step Two", "Step Three", "Step Four"];

  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <Steps.Root
        count={4}
        defaultStep={1}
        orientation="vertical"
        className="max-w-md"
      >
        <Steps.List className="flex flex-col gap-4">
          {steps.map((step, index) => (
            <Steps.Item
              key={index}
              index={index}
              className="relative flex items-start"
            >
              <Steps.Trigger className="flex items-center gap-3 text-left rounded-md group">
                <Steps.Indicator className="flex justify-center items-center shrink-0 rounded-full font-semibold w-8 h-8 text-sm border-2 data-complete:bg-blue-600 data-complete:text-white data-complete:border-blue-600 data-current:bg-blue-600 data-current:text-white data-current:border-blue-600 data-incomplete:bg-gray-100 data-incomplete:text-gray-500 data-incomplete:border-gray-200 dark:data-incomplete:bg-gray-700 dark:data-incomplete:text-gray-300 dark:data-incomplete:border-gray-600 relative">
                  <span className="group-data-complete:hidden group-data-current:block">
                    {index + 1}
                  </span>
                  <Check className="w-4 h-4 group-data-complete:block hidden" />
                </Steps.Indicator>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {step}
                </span>
              </Steps.Trigger>
              <Steps.Separator
                hidden={index === steps.length - 1}
                className="absolute top-8 left-4 w-0.5 h-8 bg-gray-200 dark:bg-gray-700 data-complete:bg-blue-600"
              />
            </Steps.Item>
          ))}
        </Steps.List>
      </Steps.Root>
    </div>
  );
}
