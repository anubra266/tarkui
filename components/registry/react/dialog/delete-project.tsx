"use client";

import { Dialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { X, Trash2 } from "lucide-react";
import { useState } from "react";

export default function DeleteProjectDialog() {
  const [projectName, setProjectName] = useState("");
  const [isDeleteEnabled, setIsDeleteEnabled] = useState(false);
  const correctProjectName = "my-awesome-project";

  const handleProjectNameChange = (value: string) => {
    setProjectName(value);
    setIsDeleteEnabled(value === correctProjectName);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center">
          Delete Project
        </button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop className="data-[state=open]:animate-backdrop-in data-[state=closed]:animate-backdrop-out fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <Dialog.Positioner className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="data-[state=open]:animate-dialog-in data-[state=closed]:animate-dialog-out relative w-full max-w-sm rounded-lg bg-white dark:bg-gray-900 p-5 shadow-lg">
            <Dialog.CloseTrigger asChild>
              <button className="absolute right-3 top-3 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer">
                <X className="h-4 w-4" />
              </button>
            </Dialog.CloseTrigger>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
                  <Trash2 className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <div className="space-y-1">
                  <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-white">
                    Delete project
                  </Dialog.Title>
                  <Dialog.Description className="text-sm text-gray-600 dark:text-gray-400">
                    This action cannot be undone. This will permanently delete
                    your project and all of its data.
                  </Dialog.Description>
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <p className="text-sm text-gray-900 dark:text-white">
                    Please type{" "}
                    <span className="font-mono font-medium bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs">
                      {correctProjectName}
                    </span>{" "}
                    to confirm.
                  </p>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => handleProjectNameChange(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 transition-colors"
                  />
                </div>

                <Dialog.CloseTrigger asChild>
                  <button
                    disabled={!isDeleteEnabled}
                    className={`w-full px-3 py-2 text-sm rounded-md transition-colors cursor-pointer inline-flex items-center justify-center font-medium ${
                      isDeleteEnabled
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                    }`}
                  >
                    Delete project
                  </button>
                </Dialog.CloseTrigger>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
