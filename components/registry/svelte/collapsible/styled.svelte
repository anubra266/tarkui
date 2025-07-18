<script>
  import { Collapsible } from "@ark-ui/svelte/collapsible";
  import { ChevronDown } from "lucide-svelte";
</script>

<div class="w-full max-w-md">
  <Collapsible.Root>
    <Collapsible.Trigger
      class="group w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <span>Expand to see features</span>
      <Collapsible.Indicator
        class="transition-transform duration-300 group-hover:scale-110 data-[state=open]:rotate-180"
      >
        <ChevronDown class="w-5 h-5" />
      </Collapsible.Indicator>
    </Collapsible.Trigger>
    <Collapsible.Content
      class="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1"
    >
      <div
        class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-x border-b border-gray-200 dark:border-gray-700 rounded-b-lg p-6"
      >
        <ul class="space-y-3">
          <li class="flex items-center gap-3">
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            <span class="text-sm text-gray-700 dark:text-gray-300"
              >Smooth animations</span
            >
          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span class="text-sm text-gray-700 dark:text-gray-300"
              >Accessible by default</span
            >
          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span class="text-sm text-gray-700 dark:text-gray-300"
              >Customizable styling</span
            >
          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span class="text-sm text-gray-700 dark:text-gray-300"
              >TypeScript support</span
            >
          </li>
        </ul>
      </div>
    </Collapsible.Content>
  </Collapsible.Root>
</div>
