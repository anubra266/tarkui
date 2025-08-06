"use client";

import { Tooltip } from "@ark-ui/react/tooltip";
import { Portal } from "@ark-ui/react/portal";

export default function TooltipWithArrow() {
  return (
    <Tooltip.Root openDelay={0} closeDelay={0}>
      <Tooltip.Trigger className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center">
        Button
      </Tooltip.Trigger>
      <Portal>
        <Tooltip.Positioner>
          <Tooltip.Content className="px-2 py-1 text-xs bg-gray-900 text-white rounded shadow-lg z-50 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out [--background:var(--color-gray-900)]">
            <Tooltip.Arrow className="[--arrow-size:8px] [--arrow-background:var(--background)]">
              <Tooltip.ArrowTip className="rounded-xs " />
            </Tooltip.Arrow>
            With arrow
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip.Root>
  );
}
