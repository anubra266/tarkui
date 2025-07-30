"use client";

import { Editable } from "@ark-ui/react/editable";
import { Edit3, Check, X } from "lucide-react";

export default function WithControls() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <Editable.Root placeholder="Enter your name..." defaultValue="John Doe">
        <Editable.Label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Display Name
        </Editable.Label>
        <div className="flex items-center space-x-2">
          <Editable.Area className="flex-1">
            <Editable.Input className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors min-h-10" />
            <Editable.Preview className="w-full px-3 py-2 text-sm border border-transparent rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white hover:border-gray-300 dark:hover:border-gray-600 cursor-text transition-colors min-h-10" />
          </Editable.Area>
          <Editable.Context>
            {(editable) => (
              <Editable.Control className="flex items-center space-x-1">
                {editable.editing ? (
                  <>
                    <Editable.SubmitTrigger className="p-1.5 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-md transition-colors">
                      <Check className="h-4 w-4" />
                    </Editable.SubmitTrigger>
                    <Editable.CancelTrigger className="p-1.5 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors">
                      <X className="h-4 w-4" />
                    </Editable.CancelTrigger>
                  </>
                ) : (
                  <Editable.EditTrigger className="p-1.5 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                    <Edit3 className="h-4 w-4" />
                  </Editable.EditTrigger>
                )}
              </Editable.Control>
            )}
          </Editable.Context>
        </div>
      </Editable.Root>
    </div>
  );
}
