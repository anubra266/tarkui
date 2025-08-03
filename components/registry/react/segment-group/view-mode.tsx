"use client";

import { SegmentGroup } from "@ark-ui/react/segment-group";
import { GridIcon, ListIcon, ColumnsIcon } from "lucide-react";
import { useState } from "react";

export default function ViewModeSelector() {
  const [viewMode, setViewMode] = useState<string>("grid");

  const viewModes = [
    { value: "grid", label: "Grid", icon: GridIcon },
    { value: "list", label: "List", icon: ListIcon },
    { value: "columns", label: "Columns", icon: ColumnsIcon },
  ];

  return (
    <div className="max-w-sm w-full bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          View Options
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          Select your preferred layout
        </p>
      </div>

      <div className="p-4">
        <SegmentGroup.Root
          value={viewMode}
          onValueChange={(e) => setViewMode(e.value || "grid")}
          orientation="vertical"
          className="flex items-start flex-col gap-1 border-l border-gray-200 dark:border-gray-700"
        >
          <SegmentGroup.Indicator className="border-blue-500 border-l-2 transform -translate-x-px h-(--height) transition-all duration-200" />
          {viewModes.map((mode) => (
            <SegmentGroup.Item
              key={mode.value}
              value={mode.value}
              className="text-gray-600 dark:text-gray-400 cursor-pointer font-medium transition-colors duration-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 data-[state=checked]:font-semibold data-[state=checked]:text-gray-900 dark:data-[state=checked]:text-white data-disabled:text-gray-300 dark:data-disabled:text-gray-600 data-disabled:cursor-not-allowed"
            >
              <SegmentGroup.ItemText className="flex items-center space-x-2">
                <mode.icon className="w-4 h-4" />
                <span>{mode.label}</span>
              </SegmentGroup.ItemText>
              <SegmentGroup.ItemControl />
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
          ))}
        </SegmentGroup.Root>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600 dark:text-gray-400">
            Current view:{" "}
            <span className="font-medium capitalize">{viewMode}</span>
          </span>
          <button className="text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
