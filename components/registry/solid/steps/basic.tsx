import { Steps } from "@ark-ui/solid/steps";
import { For } from "solid-js";

export default function BasicSteps() {
  const steps = [1, 2, 3, 4];

  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <Steps.Root count={4} defaultStep={1} class="w-full max-w-2xl">
        <Steps.List class="flex justify-between items-center">
          <For each={steps}>
            {(step, index) => (
              <Steps.Item
                index={index()}
                class="relative flex not-last:flex-1 items-center"
              >
                <Steps.Trigger class="flex items-center gap-3 text-left rounded-md">
                  <Steps.Indicator class="flex justify-center items-center shrink-0 rounded-full font-semibold w-8 h-8 text-sm border-2 data-complete:bg-blue-600 data-complete:text-white data-complete:border-blue-600 data-current:bg-blue-600 data-current:text-white data-current:border-blue-600 data-incomplete:bg-gray-100 data-incomplete:text-gray-500 data-incomplete:border-gray-200 dark:data-incomplete:bg-gray-700 dark:data-incomplete:text-gray-300 dark:data-incomplete:border-gray-600">
                    {step}
                  </Steps.Indicator>
                </Steps.Trigger>
                <Steps.Separator
                  hidden={index() === steps.length - 1}
                  class="flex-1 bg-gray-200 dark:bg-gray-700 h-0.5 mx-3 data-complete:bg-blue-600"
                />
              </Steps.Item>
            )}
          </For>
        </Steps.List>
      </Steps.Root>
    </div>
  );
}
