import { Dialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { AlertCircle } from "lucide-react";

export default function WithIconDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center">
          Delete Account
        </button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop className="data-[state=open]:animate-backdrop-in data-[state=closed]:animate-backdrop-out fixed inset-0 z-50 bg-black/50 backdrop-blur-xs" />
        <Dialog.Positioner className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="data-[state=open]:animate-dialog-in data-[state=closed]:animate-dialog-out relative w-full max-w-md rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600">
                  <AlertCircle className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Are you sure?
                  </Dialog.Title>
                  <Dialog.Description className="text-sm text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete your account? All your data
                    will be removed.
                  </Dialog.Description>
                </div>
                <div className="flex gap-3 justify-end">
                  <Dialog.CloseTrigger asChild>
                    <button className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer inline-flex items-center justify-center">
                      Cancel
                    </button>
                  </Dialog.CloseTrigger>
                  <Dialog.CloseTrigger asChild>
                    <button className="px-4 py-2 text-sm bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 rounded-lg transition-colors cursor-pointer inline-flex items-center justify-center">
                      Confirm
                    </button>
                  </Dialog.CloseTrigger>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
