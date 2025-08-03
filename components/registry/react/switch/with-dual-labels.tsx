"use client";

import { Switch } from "@ark-ui/react/switch";

export default function SwitchWithDualLabels() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <Switch.Root className="flex items-center gap-2">
        <Switch.Context>
          {(api) => (
            <>
              <span
                data-checked={api.checked ? "" : undefined}
                className="text-sm font-medium transition-colors duration-200 text-gray-900 dark:text-gray-100 data-[checked]:text-gray-400 dark:data-[checked]:text-gray-500"
              >
                Off
              </span>
              <Switch.Control className="relative inline-flex w-11 p-0.5 items-center rounded-full bg-gray-300 transition-colors duration-200 ease-in-out data-[state=checked]:bg-blue-500 data-[focus-visible]:ring-2 data-[focus-visible]:ring-gray-300/50 data-[state=checked]:data-[focus-visible]:ring-blue-500/50 dark:bg-gray-600 dark:data-[state=checked]:bg-blue-500">
                <Switch.Thumb className="w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out data-[state=checked]:translate-x-full" />
              </Switch.Control>
              <span
                data-checked={api.checked ? "" : undefined}
                className="text-sm font-medium transition-colors duration-200 text-gray-400 dark:text-gray-500 data-[checked]:text-gray-900 dark:data-[checked]:text-gray-100"
              >
                On
              </span>
            </>
          )}
        </Switch.Context>
        <Switch.HiddenInput />
      </Switch.Root>
    </div>
  );
}
