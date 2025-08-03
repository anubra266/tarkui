<script>
  import { Steps } from "@ark-ui/svelte/steps";
  import { Check } from "lucide-svelte";

  const steps = [1, 2, 3, 4];
</script>

<div
  class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"
>
  <Steps.Root
    count={4}
    defaultStep={0}
    orientation="vertical"
    class="w-full max-w-md space-y-6"
  >
    <Steps.List class="flex flex-col gap-4">
      {#each steps as step, index (step)}
        <Steps.Item {index} class="relative flex items-start">
          <Steps.Trigger
            class="flex items-center gap-3 text-left rounded-md group"
          >
            <Steps.Indicator
              class="flex justify-center items-center shrink-0 rounded-full font-semibold w-8 h-8 text-sm border-2 data-complete:bg-blue-600 data-complete:text-white data-complete:border-blue-600 data-current:bg-blue-600 data-current:text-white data-current:border-blue-600 data-incomplete:bg-gray-100 data-incomplete:text-gray-500 data-incomplete:border-gray-200 dark:data-incomplete:bg-gray-700 dark:data-incomplete:text-gray-300 dark:data-incomplete:border-gray-600 relative"
            >
              <span
                class="group-data-complete:hidden group-data-current:block"
              >
                {step}
              </span>
              <Check class="w-4 h-4 group-data-complete:block hidden" />
            </Steps.Indicator>
          </Steps.Trigger>
          <Steps.Separator
            hidden={index === steps.length - 1}
            class="absolute top-8 left-4 w-0.5 h-8 bg-gray-200 dark:bg-gray-700 data-complete:bg-blue-600"
          />
        </Steps.Item>
      {/each}
    </Steps.List>

    <div class="flex justify-center gap-3 mt-8">
      <Steps.PrevTrigger
        class="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700"
      >
        Prev step
      </Steps.PrevTrigger>
      <Steps.NextTrigger
        class="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700"
      >
        Next step
      </Steps.NextTrigger>
    </div>
  </Steps.Root>
</div>
