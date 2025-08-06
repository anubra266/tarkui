"use client";

import { Toast, Toaster, createToaster } from "@ark-ui/react/toast";
import { Portal } from "@ark-ui/react/portal";
import { X, Clock } from "lucide-react";

const toaster = createToaster({
  overlap: true,
  placement: "bottom-end",
  gap: 16,
});

const durations = [
  { label: "1s", value: 1000 },
  { label: "3s", value: 3000 },
  { label: "5s", value: 5000 },
  { label: "∞", value: Infinity },
];

export default function ToastCustomDuration() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <div className="flex flex-wrap gap-2 justify-center">
        {durations.map((duration) => (
          <button
            key={duration.label}
            type="button"
            onClick={() =>
              toaster.create({
                title: `Toast (${duration.label})`,
                description: `This toast will ${
                  duration.value === Infinity
                    ? "stay until dismissed"
                    : `disappear in ${duration.label}`
                }.`,
                type: "info",
                duration: duration.value,
              })
            }
            className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-xs font-medium"
          >
            {duration.label}
          </button>
        ))}
      </div>

      <Portal>
        <Toaster toaster={toaster}>
          {(toast) => (
            <Toast.Root className="bg-gray-900 text-white rounded-lg shadow-lg min-w-80 p-4 relative overflow-anywhere transition-all duration-300 ease-default will-change-transform h-(--height) opacity-(--opacity) translate-x-(--x) translate-y-(--y) scale-(--scale) z-(--z-index)">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-3 h-3 text-white" />
                </div>
                <div className="flex-1">
                  <Toast.Title className="text-white font-semibold text-sm">
                    {toast.title}
                  </Toast.Title>
                  <Toast.Description className="text-gray-300 text-sm mt-1">
                    {toast.description}
                  </Toast.Description>
                </div>
              </div>
              <Toast.CloseTrigger className="absolute top-3 right-3 p-1 hover:bg-white/10 rounded transition-colors text-gray-400 hover:text-white">
                <X className="w-3 h-3" />
              </Toast.CloseTrigger>
            </Toast.Root>
          )}
        </Toaster>
      </Portal>
    </div>
  );
}
