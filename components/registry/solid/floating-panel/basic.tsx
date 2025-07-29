"use client";

import { FloatingPanel } from "@ark-ui/solid/floating-panel";
import { GripVertical, Minus, X } from "lucide-solid";

export default function Basic() {
  return (
    <div class="relative h-96">
      <FloatingPanel.Root
        defaultSize={{ width: 320, height: 240 }}
        minSize={{ width: 280, height: 180 }}
        maxSize={{ width: 500, height: 400 }}
        class="w-full h-full"
      >
        <FloatingPanel.Positioner class="fixed">
          <FloatingPanel.Content class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg data-[stage=maximized]:rounded-none">
            <FloatingPanel.Header class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 rounded-t-lg">
              <div class="flex items-center gap-2">
                <GripVertical class="w-4 h-4 text-gray-400 dark:text-gray-500" />
                <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Basic Panel
                </h3>
              </div>
              <div class="flex items-center gap-1">
                <FloatingPanel.MinimizeTrigger class="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Minus class="w-3 h-3" />
                </FloatingPanel.MinimizeTrigger>
                <FloatingPanel.CloseTrigger class="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <X class="w-3 h-3" />
                </FloatingPanel.CloseTrigger>
              </div>
            </FloatingPanel.Header>
            <FloatingPanel.Body class="p-4">
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  This is a basic floating panel that can be moved, resized, and
                  minimized.
                </p>
                <div class="space-y-2">
                  <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Features:
                  </h4>
                  <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Draggable header</li>
                    <li>• Resizable edges</li>
                    <li>• Minimize/restore</li>
                    <li>• Close functionality</li>
                  </ul>
                </div>
              </div>
            </FloatingPanel.Body>
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </FloatingPanel.Root>
    </div>
  );
}
