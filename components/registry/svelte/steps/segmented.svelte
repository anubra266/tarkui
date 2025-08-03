<script>
  import { Steps } from "@ark-ui/svelte/steps";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";

  const steps = [1, 2, 3, 4];
</script>

<div
  class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"
>
  <Steps.Root
    count={4}
    defaultStep={1}
    class="w-full max-w-2xl flex items-center gap-4"
  >
    <Steps.PrevTrigger
      class="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent dark:disabled:hover:bg-transparent dark:text-gray-300 rounded-md"
    >
      <ChevronLeft class="w-4 h-4" />
    </Steps.PrevTrigger>

    <Steps.List class="flex-1 flex justify-between items-start gap-1">
      {#each steps as step, index (step)}
        <Steps.Item {index} class="relative flex flex-col items-center flex-1">
          <Steps.Trigger
            class="w-full flex flex-col items-start gap-2 text-left rounded-md group cursor-default"
            disabled
          >
            <Steps.Indicator
              class="w-full shrink-0 h-1 rounded-full data-complete:bg-blue-600 data-current:bg-blue-600 data-incomplete:bg-gray-300 dark:data-incomplete:bg-gray-600"
            />
          </Steps.Trigger>
        </Steps.Item>
      {/each}
    </Steps.List>

    <Steps.NextTrigger
      class="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent dark:disabled:hover:bg-transparent dark:text-gray-300 rounded-md"
    >
      <ChevronRight class="w-4 h-4" />
    </Steps.NextTrigger>
  </Steps.Root>
</div>
