import { Collapsible } from "@ark-ui/react/collapsible";
import { ChevronDownIcon } from "lucide-react";

export default function StyledCollapsible() {
  return (
    <div className="w-full max-w-md">
      <Collapsible.Root>
        <Collapsible.Trigger className="group w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-white bg-linear-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
          <span>Expand to see features</span>
          <Collapsible.Indicator className="transition-transform duration-300 group-hover:scale-110 data-[state=open]:rotate-180">
            <ChevronDownIcon className="w-5 h-5" />
          </Collapsible.Indicator>
        </Collapsible.Trigger>
        <Collapsible.Content className="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1">
          <div className="bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-x border-b border-gray-200 dark:border-gray-700 rounded-b-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Smooth animations
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Accessible by default
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Customizable styling
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  TypeScript support
                </span>
              </li>
            </ul>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
}
