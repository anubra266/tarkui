import { Collapsible } from "@ark-ui/solid/collapsible";
import { ChevronDownIcon } from "lucide-solid";

export default function BasicCollapsible() {
  return (
    <Collapsible.Root class="w-full max-w-sm h-40">
      <Collapsible.Trigger class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
        Toggle
        <Collapsible.Indicator class="transition-transform duration-200 data-[state=open]:rotate-180">
          <ChevronDownIcon class="w-4 h-4" />
        </Collapsible.Indicator>
      </Collapsible.Trigger>
      <Collapsible.Content class="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1">
        <div class="mt-2 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md">
          <p class="text-sm text-gray-700 dark:text-gray-300">Content</p>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
