"use client";

import { Switch } from "@ark-ui/react/switch";
import { Moon, Sun } from "lucide-react";

export default function SwitchWithRevealingIcons() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <Switch.Root className="flex items-center gap-3">
        <Switch.Control className="relative inline-flex w-16 p-1 items-center rounded-full bg-gray-300 transition-colors duration-200 ease-in-out data-[state=checked]:bg-blue-500 data-focus-visible:ring-2 data-focus-visible:ring-gray-300/50 data-[state=checked]:data-focus-visible:ring-blue-500/50 dark:bg-gray-600 dark:data-[state=checked]:bg-blue-500">
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 transition-opacity duration-200">
            <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </div>
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 transition-opacity duration-200">
            <Sun className="w-4 h-4 text-white" />
          </div>
          <Switch.Thumb className="relative w-7 h-7 rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out data-[state=checked]:translate-x-7 z-10" />
        </Switch.Control>
        <Switch.HiddenInput />
      </Switch.Root>
    </div>
  );
}
