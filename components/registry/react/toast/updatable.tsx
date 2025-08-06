"use client";

import { Toast, Toaster, createToaster } from "@ark-ui/react/toast";
import { Portal } from "@ark-ui/react/portal";
import { X, Loader2 } from "lucide-react";
import { useRef } from "react";

const toaster = createToaster({
  overlap: true,
  placement: "bottom-end",
  gap: 16,
});

export default function ToastUpdatable() {
  const toastId = useRef<string>();

  const createToast = () => {
    toastId.current = toaster.create({
      title: "Uploading...",
      description: "Your file is being uploaded.",
      type: "loading",
      duration: Infinity,
    });
  };

  const updateToast = () => {
    if (!toastId.current) return;

    toaster.update(toastId.current, {
      title: "Upload complete!",
      description: "Your file has been uploaded successfully.",
      type: "success",
      duration: 5000,
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={createToast}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
        >
          Start Upload
        </button>
        <button
          type="button"
          onClick={updateToast}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-sm font-medium"
        >
          Complete Upload
        </button>
      </div>

      <Portal>
        <Toaster toaster={toaster}>
          {(toast) => (
            <Toast.Root className="bg-linear-to-r from-white to-gray-50 border-l-4 border-blue-500 rounded-lg shadow-lg min-w-80 p-4 relative overflow-anywhere transition-all duration-300 ease-default will-change-transform h-(--height) opacity-(--opacity) translate-x-(--x) translate-y-(--y) scale-(--scale) z-(--z-index)">
              <div className="flex items-start gap-3">
                {toast.type === "loading" && (
                  <Loader2 className="w-4 h-4 mt-0.5 text-blue-500 animate-spin shrink-0" />
                )}
                {toast.type === "success" && (
                  <div className="w-4 h-4 mt-0.5 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                    <X className="w-2 h-2 text-white rotate-45" />
                  </div>
                )}
                <div className="flex-1">
                  <Toast.Title className="text-gray-900 font-semibold text-sm">
                    {toast.title}
                  </Toast.Title>
                  <Toast.Description className="text-gray-600 text-sm mt-1">
                    {toast.description}
                  </Toast.Description>
                  {toast.type === "loading" && (
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full animate-pulse"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
              <Toast.CloseTrigger className="absolute top-3 right-3 p-1 hover:bg-white/50 rounded transition-colors text-gray-400 hover:text-gray-600">
                <X className="w-3 h-3" />
              </Toast.CloseTrigger>
            </Toast.Root>
          )}
        </Toaster>
      </Portal>
    </div>
  );
}
