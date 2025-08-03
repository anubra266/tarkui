<script>
  import { Steps } from "@ark-ui/svelte/steps";
  import { Check } from "lucide-svelte";

  const steps = [
    { title: "Step One", description: "Desc for step one" },
    { title: "Step Two", description: "Desc for step two" },
    { title: "Step Three", description: "Desc for step three" },
    { title: "Step Four", description: "Desc for step four" },
  ];
</script>

<div
  class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"
>
  <Steps.Root
    count={3}
    defaultStep={1}
    orientation="vertical"
    class="w-full max-w-md"
  >
    <Steps.List class="flex flex-col gap-4">
      {#each steps as step, index (index)}
        <Steps.Item {index} class="relative flex items-start">
          <Steps.Trigger
            class="flex items-start gap-3 text-left rounded-md group"
          >
            <Steps.Indicator
              class="flex justify-center items-center shrink-0 rounded-full font-semibold w-8 h-8 text-sm border-2 data-complete:bg-blue-600 data-complete:text-white data-complete:border-blue-600 data-current:bg-blue-600 data-current:text-white data-current:border-blue-600 data-incomplete:bg-gray-100 data-incomplete:text-gray-500 data-incomplete:border-gray-200 dark:data-incomplete:bg-gray-700 dark:data-incomplete:text-gray-300 dark:data-incomplete:border-gray-600 relative"
            >
              <span
                class="group-data-complete:hidden group-data-current:block"
              >
                {index + 1}
              </span>
              <Check class="w-4 h-4 group-data-complete:block hidden" />
            </Steps.Indicator>
            <div class="flex flex-col">
              <span
                class="text-sm font-semibold text-gray-900 dark:text-gray-100"
              >
                {step.title}
              </span>
              <span class="text-xs text-gray-500 dark:text-gray-400">
                {step.description}
              </span>
            </div>
          </Steps.Trigger>
          <Steps.Separator
            hidden={index === steps.length - 1}
            class="absolute top-8 left-4 w-0.5 h-8 bg-gray-200 dark:bg-gray-700 data-complete:bg-blue-600"
          />
        </Steps.Item>
      {/each}
    </Steps.List>
  </Steps.Root>
</div>
