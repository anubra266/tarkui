import { Steps } from "@ark-ui/solid/steps";
import { Check, Loader2 } from "lucide-solid";
import { For, createSignal } from "solid-js";

export default function StepsWithSpinner() {
  const steps = [1, 2, 3, 4];
  const [isLoading, setIsLoading] = createSignal(false);

  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <Steps.Root count={4} defaultStep={0} class="w-full max-w-2xl space-y-6">
        <Steps.Context>
          {(api) => (
            <>
              <Steps.List class="flex justify-between items-center">
                <For each={steps}>
                  {(step, index) => (
                    <Steps.Item
                      index={index()}
                      class="relative flex not-last:flex-1 items-center"
                    >
                      <Steps.Trigger
                        class="flex items-center gap-3 text-left rounded-md group cursor-default"
                        disabled
                      >
                        <Steps.Indicator class="flex justify-center items-center shrink-0 rounded-full font-semibold w-8 h-8 text-sm border-2 data-complete:bg-blue-600 data-complete:text-white data-complete:border-blue-600 data-current:bg-blue-600 data-current:text-white data-current:border-blue-600 data-incomplete:bg-gray-100 data-incomplete:text-gray-500 data-incomplete:border-gray-200 dark:data-incomplete:bg-gray-700 dark:data-incomplete:text-gray-300 dark:data-incomplete:border-gray-600 relative">
                          <span
                            class="group-data-complete:hidden data-loading:hidden"
                            data-loading={
                              isLoading() && api().value === index()
                                ? ""
                                : undefined
                            }
                          >
                            {step}
                          </span>
                          <Check class="w-4 h-4 group-data-complete:block hidden" />
                          {isLoading() && api().value === index() && (
                            <Loader2 class="w-4 h-4 group-data-current:block animate-spin" />
                          )}
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

              <div class="flex justify-center gap-3 mt-8">
                <button
                  onClick={api().goToPrevStep}
                  disabled={!api().hasPrevStep || isLoading()}
                  class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  Prev step
                </button>
                <button
                  onClick={() => {
                    if (!isLoading()) {
                      setIsLoading(true);
                      setTimeout(() => {
                        api().goToNextStep();
                        setIsLoading(false);
                      }, 1000);
                    }
                  }}
                  disabled={!api().hasNextStep || isLoading()}
                  class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  Next step
                </button>
              </div>
            </>
          )}
        </Steps.Context>
      </Steps.Root>
    </div>
  );
}
