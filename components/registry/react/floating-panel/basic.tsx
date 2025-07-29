"use client";

import { FloatingPanel } from "@ark-ui/react/floating-panel";
import { Portal } from "@ark-ui/react/portal";
import { ArrowDownLeft, Maximize2, Minus, X, GripVertical } from "lucide-react";

export default function Basic() {
  return (
    <FloatingPanel.Root>
      <FloatingPanel.Trigger className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Open Panel
      </FloatingPanel.Trigger>

      <Portal>
        <FloatingPanel.Positioner className="z-50">
          <FloatingPanel.Content className="flex flex-col bg-white dark:bg-gray-900 rounded-lg data-[maximized]:rounded-none border border-gray-200 dark:border-gray-700 w-full shadow-md min-w-80">
            <FloatingPanel.DragTrigger>
              <FloatingPanel.Header className="py-2 px-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center cursor-move">
                <div className="flex items-center gap-2">
                  <GripVertical className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  <FloatingPanel.Title className="font-medium text-gray-900 dark:text-gray-100">
                    Floating Panel
                  </FloatingPanel.Title>
                </div>
                <FloatingPanel.Control className="flex items-center gap-1">
                  <FloatingPanel.StageTrigger
                    stage="minimized"
                    className="w-6 h-6 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger
                    stage="maximized"
                    className="w-6 h-6 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                  >
                    <Maximize2 className="w-3 h-3" />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger
                    stage="default"
                    className="w-6 h-6 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                  >
                    <ArrowDownLeft className="w-3 h-3" />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.CloseTrigger className="w-6 h-6 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors">
                    <X className="w-3 h-3" />
                  </FloatingPanel.CloseTrigger>
                </FloatingPanel.Control>
              </FloatingPanel.Header>
            </FloatingPanel.DragTrigger>

            <FloatingPanel.Body className="flex flex-col gap-4 p-4">
              <p className="text-gray-600 dark:text-gray-300">
                This is a basic floating panel. You can drag it around by the
                header, resize it using the edges, and control its state using
                the buttons in the header.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Try dragging, resizing, minimizing, maximizing, or closing this
                panel.
              </p>
            </FloatingPanel.Body>

            {/* Resize handles */}
            <FloatingPanel.ResizeTrigger axis="n" />
            <FloatingPanel.ResizeTrigger axis="e" />
            <FloatingPanel.ResizeTrigger axis="w" />
            <FloatingPanel.ResizeTrigger axis="s" />
            <FloatingPanel.ResizeTrigger axis="ne" />
            <FloatingPanel.ResizeTrigger axis="se" />
            <FloatingPanel.ResizeTrigger axis="sw" />
            <FloatingPanel.ResizeTrigger axis="nw" />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  );
}
