"use client";

import { Tooltip } from "@ark-ui/react/tooltip";
import { Portal } from "@ark-ui/react/portal";
import { BarChart3 } from "lucide-react";

export default function TooltipMetricsCard() {
  return (
    <Tooltip.Root openDelay={0} closeDelay={0}>
      <Tooltip.Trigger className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
        <BarChart3 className="w-4 h-4 text-blue-500" />
        <span className="text-sm font-medium">Analytics</span>
      </Tooltip.Trigger>
      <Portal>
        <Tooltip.Positioner>
          <Tooltip.Content className="p-2 bg-popover text-popover-foreground border border-border rounded-lg shadow-lg z-50 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out w-36">
            <div className="space-y-1.5">
              <div className="text-xs font-medium text-muted-foreground">
                Today
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span className="text-xs">Sales</span>
                  </div>
                  <span className="text-xs font-semibold">$2.8k</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    <span className="text-xs">Revenue</span>
                  </div>
                  <span className="text-xs font-semibold">$4.3k</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <span className="text-xs">Costs</span>
                  </div>
                  <span className="text-xs font-semibold">$1.6k</span>
                </div>
              </div>
            </div>
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip.Root>
  );
}
