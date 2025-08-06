"use client";

import { Toast, Toaster, createToaster } from "@ark-ui/react/toast";
import { Portal } from "@ark-ui/react/portal";
import { X } from "lucide-react";

const toaster = createToaster({
  overlap: true,
  placement: "bottom-end",
  gap: 16,
});

export default function ToastWithAction() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <button
        type="button"
        onClick={() =>
          toaster.create({
            title: "Update available",
            description: "A new version of the app is ready to install.",
            type: "info",
            action: {
              label: "Update now",
              onClick: () => {
                console.log("Updating...");
              },
            },
          })
        }
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
      >
        Show Action Toast
      </button>

      <Portal>
        <Toaster toaster={toaster}>
          {(toast) => (
            <Toast.Root className="bg-white border border-gray-200 rounded-lg shadow-lg min-w-80 p-4 relative overflow-anywhere transition-all duration-300 ease-default will-change-transform h-(--height) opacity-(--opacity) translate-x-(--x) translate-y-(--y) scale-(--scale) z-(--z-index)">
              <Toast.Title className="text-gray-900 font-semibold text-sm">
                {toast.title}
              </Toast.Title>
              <Toast.Description className="text-gray-600 text-sm mt-1">
                {toast.description}
              </Toast.Description>
              {toast.action && (
                <Toast.ActionTrigger className="mt-3 px-3 py-1.5 bg-blue-500 text-white text-xs font-medium rounded-md hover:bg-blue-600 transition-colors">
                  {toast.action.label}
                </Toast.ActionTrigger>
              )}
              <Toast.CloseTrigger className="absolute top-3 right-3 p-1 hover:bg-gray-100 rounded transition-colors text-gray-400 hover:text-gray-600">
                <X className="w-3 h-3" />
              </Toast.CloseTrigger>
            </Toast.Root>
          )}
        </Toaster>
      </Portal>
    </div>
  );
}
