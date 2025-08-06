"use client";

import { Toast, Toaster, createToaster } from "@ark-ui/solid/toast";
import { Portal } from "solid-js/web";
import { X, Loader2, CheckCircle, AlertCircle } from "lucide-solid";

const toaster = createToaster({
  overlap: true,
  placement: "bottom-end",
  gap: 16,
});

// Simulate API call
const uploadFile = () => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve() : reject(new Error("Upload failed"));
    }, 2000);
  });
};

export default function ToastPromise() {
  const handleUpload = async () => {
    const toastId = toaster.create({
      title: "Uploading file...",
      description: "Please wait while we upload your file.",
      type: "loading",
      duration: Infinity,
    });

    try {
      await uploadFile();
      toaster.update(toastId, {
        title: "Upload successful!",
        description: "Your file has been uploaded successfully.",
        type: "success",
        duration: 5000,
      });
    } catch (error) {
      toaster.update(toastId, {
        title: "Upload failed",
        description: "Something went wrong. Please try again.",
        type: "error",
        duration: 5000,
      });
    }
  };

  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <button
        type="button"
        onClick={handleUpload}
        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
      >
        Upload File
      </button>

      <Portal>
        <Toaster toaster={toaster}>
          {(toast) => {
            const getIcon = () => {
              switch (toast().type) {
                case "loading":
                  return (
                    <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Loader2 class="w-4 h-4 text-blue-600 animate-spin" />
                    </div>
                  );
                case "success":
                  return (
                    <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle class="w-4 h-4 text-green-600" />
                    </div>
                  );
                case "error":
                  return (
                    <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <AlertCircle class="w-4 h-4 text-red-600" />
                    </div>
                  );
                default:
                  return null;
              }
            };

            return (
              <Toast.Root class="bg-white border rounded-lg shadow-xl min-w-80 p-4 relative overflow-anywhere transition-all duration-300 ease-default will-change-transform h-(--height) opacity-(--opacity) translate-x-(--x) translate-y-(--y) scale-(--scale) z-(--z-index)">
                <div class="flex items-start gap-3">
                  <div class="shrink-0">{getIcon()}</div>
                  <div class="flex-1">
                    <Toast.Title class="text-gray-900 font-semibold text-sm">
                      {toast().title}
                    </Toast.Title>
                    <Toast.Description class="text-gray-600 text-sm mt-1">
                      {toast().description}
                    </Toast.Description>
                  </div>
                </div>
                <Toast.CloseTrigger class="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600">
                  <X class="w-3 h-3" />
                </Toast.CloseTrigger>
              </Toast.Root>
            );
          }}
        </Toaster>
      </Portal>
    </div>
  );
}
