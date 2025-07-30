"use client";

import { HoverCard } from "@ark-ui/react/hover-card";
import { Portal } from "@ark-ui/react/portal";

export default function Basic() {
  return (
    <div className="flex items-center justify-center min-h-32">
      <HoverCard.Root>
        <HoverCard.Trigger className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 underline decoration-dotted underline-offset-4 cursor-pointer">
          Hover over me
        </HoverCard.Trigger>
        <Portal>
          <HoverCard.Positioner>
            <HoverCard.Content className="data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out border border-gray-200 dark:border-gray-700 [--hover-card-background:#ffffff] dark:[--hover-card-background:#111827] bg-(--hover-card-background) rounded-lg shadow-lg p-4 max-w-sm z-50">
              <HoverCard.Arrow className="[--arrow-size:10px] [--arrow-background:var(--hover-card-background)]">
                <HoverCard.ArrowTip className="border-l border-t border-gray-200 dark:border-gray-700" />
              </HoverCard.Arrow>
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  Basic Hover Card
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This is a simple hover card that appears when you hover over
                  the trigger element. It provides additional context or
                  information about the hovered item.
                </p>
              </div>
            </HoverCard.Content>
          </HoverCard.Positioner>
        </Portal>
      </HoverCard.Root>
    </div>
  );
}
