"use client";

import { Popover } from "@ark-ui/react/popover";
import { Portal } from "@ark-ui/react/portal";
import { Info } from "lucide-react";

export default function PopoverBasic() {
  return (
    <Popover.Root>
      <Popover.Trigger className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        <Info className="h-4 w-4" />
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content className="z-50 w-56 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 shadow-lg data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out">
            <Popover.Arrow className="[--arrow-size:12px] [--arrow-background:var(--color-white)] dark:[--arrow-background:var(--color-gray-800)]">
              <Popover.ArrowTip className="border-t border-l border-gray-200 dark:border-gray-700" />
            </Popover.Arrow>
            <Popover.Title className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
              Quick Info
            </Popover.Title>
            <Popover.Description className="text-sm text-gray-600 dark:text-gray-400">
              This feature helps you understand how the component works. Click
              outside to close this popover.
            </Popover.Description>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
