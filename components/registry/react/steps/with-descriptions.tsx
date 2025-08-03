"use client";

import { Steps } from "@ark-ui/react/steps";
import { Check } from "lucide-react";

export default function StepsWithDescriptions() {
  const steps = [
    { title: "Step One", description: "Desc for step one" },
    { title: "Step Two", description: "Desc for step two" },
    { title: "Step Three", description: "Desc for step three" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <Steps.Root count={3} defaultStep={1} className="w-full max-w-2xl">
        <Steps.List className="inline-flex w-full data-[orientation=vertical]:flex-col">
          {steps.map((step, index) => (
            <Steps.Item
              key={index}
              index={index}
              className="flex items-center relative flex-1 flex-col"
            >
              <Steps.Trigger className="flex flex-col items-center gap-3 text-center rounded-md group">
                <Steps.Indicator className="flex justify-center items-center shrink-0 rounded-full font-semibold w-8 h-8 text-sm border-2 data-complete:bg-blue-600 data-complete:text-white data-complete:border-blue-600 data-current:bg-blue-600 data-current:text-white data-current:border-blue-600 data-incomplete:bg-gray-100 data-incomplete:text-gray-500 data-incomplete:border-gray-200 dark:data-incomplete:bg-gray-700 dark:data-incomplete:text-gray-300 dark:data-incomplete:border-gray-600 relative">
                  <span className="group-data-complete:hidden group-data-current:block">
                    {index + 1}
                  </span>
                  <Check className="w-4 h-4 group-data-complete:block hidden" />
                </Steps.Indicator>
                <div className="flex flex-col items-center">
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {step.title}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {step.description}
                  </span>
                </div>
              </Steps.Trigger>

              <Steps.Separator
                hidden={index === steps.length - 1}
                className="bg-gray-200 dark:bg-gray-700 data-complete:bg-blue-600 h-0.5 absolute inset-x-0 top-4 left-[calc(50%+0.95rem+0.125rem)] -order-1 m-0 -translate-y-1/2 w-[calc(100%-1.5rem-0.65rem)] flex-none"
              />
            </Steps.Item>
          ))}
        </Steps.List>
      </Steps.Root>
    </div>
  );
}
