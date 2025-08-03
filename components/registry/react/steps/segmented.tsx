"use client";

import { Steps } from "@ark-ui/react/steps";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SegmentedSteps() {
  const steps = [1, 2, 3, 4];

  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <Steps.Root
        count={4}
        defaultStep={1}
        className="w-full max-w-2xl flex items-center gap-4"
      >
        <Steps.PrevTrigger className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent dark:disabled:hover:bg-transparent dark:text-gray-300 rounded-md">
          <ChevronLeft className="w-4 h-4" />
        </Steps.PrevTrigger>

        <Steps.List className="flex-1 flex justify-between items-start gap-1">
          {steps.map((step, index) => (
            <Steps.Item
              key={step}
              index={index}
              className="relative flex flex-col items-center flex-1"
            >
              <Steps.Trigger
                className="w-full flex flex-col items-start gap-2 text-left rounded-md group cursor-default"
                disabled
              >
                <Steps.Indicator className="w-full shrink-0 h-1 rounded-full data-complete:bg-blue-600 data-current:bg-blue-600 data-incomplete:bg-gray-300 dark:data-incomplete:bg-gray-600" />
              </Steps.Trigger>
            </Steps.Item>
          ))}
        </Steps.List>

        <Steps.NextTrigger className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent dark:disabled:hover:bg-transparent dark:text-gray-300 rounded-md">
          <ChevronRight className="w-4 h-4" />
        </Steps.NextTrigger>
      </Steps.Root>
    </div>
  );
}
