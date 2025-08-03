"use client";

import { SegmentGroup } from "@ark-ui/react/segment-group";
import { SunIcon, MoonIcon, MonitorIcon } from "lucide-react";
import { useState } from "react";

export default function ThemeSelector() {
  const [theme, setTheme] = useState<string>("system");

  const themes = [
    { value: "light", label: "Light", icon: SunIcon },
    { value: "dark", label: "Dark", icon: MoonIcon },
    { value: "system", label: "System", icon: MonitorIcon },
  ];

  return (
    <div className="max-w-sm w-full bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Theme Settings
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          Choose your preferred theme
        </p>
      </div>

      <div className="p-4">
        <SegmentGroup.Root
          value={theme}
          onValueChange={(e) => setTheme(e.value || "system")}
          orientation="horizontal"
          className="flex gap-0.5 bg-gray-100 dark:bg-gray-900 relative p-1 rounded-lg"
        >
          <SegmentGroup.Indicator className="bg-white dark:bg-gray-800 z-10 rounded-md shadow-sm h-(--height) w-(--width) transition-all duration-200" />
          {themes.map((themeOption) => (
            <SegmentGroup.Item
              key={themeOption.value}
              value={themeOption.value}
              className="flex flex-1 items-center justify-center select-none cursor-pointer text-sm font-medium px-4 py-2 z-20 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white data-[state=checked]:text-gray-900 dark:data-[state=checked]:text-white data-disabled:cursor-not-allowed data-disabled:opacity-40 transition-colors duration-200"
            >
              <SegmentGroup.ItemText className="flex items-center space-x-2">
                <themeOption.icon className="w-4 h-4" />
                <span>{themeOption.label}</span>
              </SegmentGroup.ItemText>
              <SegmentGroup.ItemControl />
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
          ))}
        </SegmentGroup.Root>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Current theme: <span className="font-medium">{theme}</span>
        </p>
      </div>
    </div>
  );
}
