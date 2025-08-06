"use client";

import { Toast, Toaster, createToaster } from "@ark-ui/solid/toast";
import { Portal } from "solid-js/web";
import { X } from "lucide-solid";

const positions = [
  { label: "Top Left", value: "top-start" as const },
  { label: "Top Center", value: "top" as const },
  { label: "Top Right", value: "top-end" as const },
  { label: "Bottom Left", value: "bottom-start" as const },
  { label: "Bottom Center", value: "bottom" as const },
  { label: "Bottom Right", value: "bottom-end" as const },
];

// Create toasters for each position
const toasters = positions.reduce((acc, pos) => {
  acc[pos.value] = createToaster({
    placement: pos.value,
    gap: 16,
    overlap: true,
  });
  return acc;
}, {} as Record<string, ReturnType<typeof createToaster>>);

export default function ToastPositions() {
  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <div class="grid grid-cols-3 gap-2 max-w-md">
        {positions.map((position) => (
          <button
            type="button"
            onClick={() =>
              toasters[position.value].create({
                title: position.label,
                description: `Toast from ${position.label.toLowerCase()}.`,
                type: "info",
              })
            }
            class="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-xs font-medium text-center"
          >
            {position.label}
          </button>
        ))}
      </div>

      {/* Render toasters for each position */}
      {positions.map((position) => (
        <Portal>
          <Toaster toaster={toasters[position.value]}>
            {(toast) => (
              <Toast.Root class="bg-white border-2 border-gray-300 rounded-xl shadow-lg min-w-80 p-4 relative overflow-anywhere transition-all duration-300 ease-default will-change-transform h-(--height) opacity-(--opacity) translate-x-(--x) translate-y-(--y) scale-(--scale) z-(--z-index)">
                <div class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                  <div class="flex-1">
                    <Toast.Title class="text-gray-900 font-semibold text-sm">
                      {toast().title}
                    </Toast.Title>
                    <Toast.Description class="text-gray-600 text-sm mt-1">
                      {toast().description}
                    </Toast.Description>
                  </div>
                </div>
                <Toast.CloseTrigger class="absolute top-4 right-4 p-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-500 hover:text-gray-700">
                  <X class="w-3 h-3" />
                </Toast.CloseTrigger>
              </Toast.Root>
            )}
          </Toaster>
        </Portal>
      ))}
    </div>
  );
}
