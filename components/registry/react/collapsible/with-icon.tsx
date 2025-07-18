import { Collapsible } from "@ark-ui/react/collapsible";
import { ChevronDownIcon, InfoIcon, CheckCircleIcon } from "lucide-react";

export default function CollapsibleWithIcon() {
  return (
    <div className="w-full max-w-md space-y-3 h-72">
      <Collapsible.Root>
        <Collapsible.Trigger className="w-full flex items-center gap-3 px-4 py-3 text-left bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 group">
          <InfoIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
          <span className="font-medium text-gray-900 dark:text-gray-100 flex-1">
            Information
          </span>
          <Collapsible.Indicator className="transition-transform duration-200 data-[state=open]:rotate-180">
            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
          </Collapsible.Indicator>
        </Collapsible.Trigger>
        <Collapsible.Content className="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1">
          <div className="px-4 py-3 ml-8 border-l-2 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              This is some helpful information that can be toggled to save space
              in your interface.
            </p>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>

      <Collapsible.Root>
        <Collapsible.Trigger className="w-full flex items-center gap-3 px-4 py-3 text-left bg-white dark:bg-gray-900 border border-green-200 dark:border-green-800 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-200 group">
          <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
          <span className="font-medium text-gray-900 dark:text-gray-100 flex-1">
            Success Message
          </span>
          <Collapsible.Indicator className="transition-transform duration-200 data-[state=open]:rotate-180">
            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
          </Collapsible.Indicator>
        </Collapsible.Trigger>
        <Collapsible.Content className="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1">
          <div className="px-4 py-3 ml-8 border-l-2 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Operation completed successfully! Your changes have been saved.
            </p>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
}
