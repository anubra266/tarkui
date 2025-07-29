"use client";

import { HoverCard } from "@ark-ui/solid/hover-card";
import { Portal } from "solid-js/web";
import { createSignal } from "solid-js";

export default function Controlled() {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div class="space-y-6 p-6">
      {/* Controls */}
      <div class="space-y-3">
        <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">
          External Controls
        </h3>
        <div class="flex gap-2">
          <button
            onClick={() => setIsOpen(true)}
            class="px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Show Hover Card
          </button>
          <button
            onClick={() => setIsOpen(false)}
            class="px-3 py-1.5 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
          >
            Hide Hover Card
          </button>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Current state:{" "}
          <span class="font-medium">{isOpen() ? "Open" : "Closed"}</span>
        </p>
      </div>

      {/* Controlled Hover Card */}
      <div class="flex items-center justify-center py-12">
        <HoverCard.Root
          open={isOpen()}
          onOpenChange={(details) => setIsOpen(details.open)}
        >
          <HoverCard.Trigger class="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
            Controlled Hover Card
          </HoverCard.Trigger>

          <Portal>
            <HoverCard.Positioner>
              <HoverCard.Content class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-xs">
                <div class="space-y-3">
                  <h4 class="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Controlled Hover Card
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    This hover card's open state is controlled externally via
                    the buttons above.
                  </p>
                  <div class="flex gap-2 pt-2">
                    <button
                      onClick={() => setIsOpen(false)}
                      class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-xs rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </HoverCard.Content>
            </HoverCard.Positioner>
          </Portal>
        </HoverCard.Root>
      </div>

      {/* Info */}
      <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 class="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
          Controlled Component
        </h4>
        <p class="text-sm text-blue-700 dark:text-blue-300">
          This example demonstrates how to control the hover card's open state
          externally. You can programmatically show or hide the hover card using
          the buttons above, and the state is synchronized between the hover
          behavior and external controls.
        </p>
      </div>
    </div>
  );
}
