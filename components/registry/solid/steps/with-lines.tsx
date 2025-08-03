import { Steps } from "@ark-ui/solid/steps";
import { For } from "solid-js";

export default function StepsWithLines() {
  const steps = ["Step One", "Step Two", "Step Three", "Step Four"];

  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <Steps.Root count={4} defaultStep={1} class="w-full max-w-2xl">
        <Steps.List class="flex justify-between items-start gap-4">
          <For each={steps}>
            {(step, index) => (
              <Steps.Item
                index={index()}
                class="relative flex flex-col items-center flex-1"
              >
                <Steps.Trigger class="w-full flex flex-col items-start gap-2 text-left rounded-md group">
                  <Steps.Indicator class="w-full shrink-0 h-1 rounded-full data-complete:bg-blue-600 data-current:bg-blue-600 data-incomplete:bg-gray-300 dark:data-incomplete:bg-gray-600" />
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 group-data-complete:text-blue-600 group-data-current:text-blue-600 text-left">
                    {step}
                  </span>
                </Steps.Trigger>
              </Steps.Item>
            )}
          </For>
        </Steps.List>
      </Steps.Root>
    </div>
  );
}
