"use client";

import { Tooltip } from "@ark-ui/react/tooltip";
import { Portal } from "@ark-ui/react/portal";
import { Play, Globe } from "lucide-react";

export default function TooltipVideoThumbnail() {
  return (
    <Tooltip.Root openDelay={0} closeDelay={0}>
      <Tooltip.Trigger className="relative group cursor-pointer">
        <div className="w-64 h-36 bg-linear-to-br from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-600 rounded-lg overflow-hidden border border-border">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center group-hover:bg-black/70 transition-colors">
              <Play className="w-6 h-6 text-white ml-1" />
            </div>
          </div>
        </div>
      </Tooltip.Trigger>
      <Portal>
        <Tooltip.Positioner>
          <Tooltip.Content className="p-2 bg-popover text-popover-foreground border border-border rounded-lg shadow-lg z-50 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out w-56">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Globe className="w-3 h-3 text-muted-foreground mt-0.5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-xs">Product Demo</h4>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                    Learn platform features in this walkthrough.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>4:32</span>
                <span>•</span>
                <span>720p</span>
                <span>•</span>
                <span>2.1M</span>
              </div>
            </div>
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip.Root>
  );
}
