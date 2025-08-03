"use client";

import { Switch } from "@ark-ui/react/switch";
import { Moon, Sun } from "lucide-react";

export default function SwitchWithEmbeddedIcons() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <Switch.Root className="flex items-center gap-3">
        <Switch.Control className="group relative inline-flex w-16 p-1 items-center rounded-full bg-gray-300 transition-colors duration-200 ease-in-out data-[state=checked]:bg-gray-300 data-[focus-visible]:ring-2 data-[focus-visible]:ring-gray-300/50 data-[state=checked]:data-[focus-visible]:ring-gray-300/50 dark:bg-gray-600 dark:data-[state=checked]:bg-gray-600">
          <div className="absolute inset-0 flex items-center justify-between px-2.5 z-10">
            <Moon className="w-4 h-4 text-gray-600 dark:group-data-[state=checked]:text-gray-300 dark:group-data-[state=unchecked]:text-gray-600" />
            <Sun className="w-4 h-4 text-gray-600 dark:group-data-[state=unchecked]:text-gray-300 dark:group-data-[state=checked]:text-gray-600" />
          </div>
          <Switch.Thumb className="relative w-7 h-7 rounded-full bg-white shadow-base transition-transform duration-200 ease-in-out data-[state=checked]:translate-x-7 z-0" />
        </Switch.Control>
        <Switch.HiddenInput />
      </Switch.Root>
    </div>
  );
}
