import { Collapsible } from "@ark-ui/solid/collapsible";
import { ChevronDownIcon } from "lucide-solid";

export default function CollapsibleWithContent() {
  return (
    <div class="w-full max-w-md space-y-4 h-52">
      <Collapsible.Root>
        <Collapsible.Trigger class="w-full flex items-center justify-between px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
          <span>What is React?</span>
          <Collapsible.Indicator class="transition-transform duration-200 data-[state=open]:rotate-180">
            <ChevronDownIcon class="w-5 h-5" />
          </Collapsible.Indicator>
        </Collapsible.Trigger>
        <Collapsible.Content class="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1">
          <div class="px-4 py-3 border-x border-b border-gray-300 dark:border-gray-600 rounded-b-lg bg-gray-50 dark:bg-gray-800">
            <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on components. It is maintained by
              Meta and a community of individual developers and companies.
            </p>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>

      <Collapsible.Root>
        <Collapsible.Trigger class="w-full flex items-center justify-between px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
          <span>How do I get started?</span>
          <Collapsible.Indicator class="transition-transform duration-200 data-[state=open]:rotate-180">
            <ChevronDownIcon class="w-5 h-5" />
          </Collapsible.Indicator>
        </Collapsible.Trigger>
        <Collapsible.Content class="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1">
          <div class="px-4 py-3 border-x border-b border-gray-300 dark:border-gray-600 rounded-b-lg bg-gray-50 dark:bg-gray-800">
            <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              You can start by installing React using npm or yarn, then create
              your first component. Check out the official React documentation
              for detailed tutorials and guides.
            </p>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
}
