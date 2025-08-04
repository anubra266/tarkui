"use client";

import { Timer } from "@ark-ui/react/timer";
import { Clock, Play, Pause } from "lucide-react";

export default function TimerCardStyle() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <Timer.Root targetMs={45 * 60 * 1000} className="w-full max-w-sm">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-blue-500" />
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              Meeting Timer
            </h3>
          </div>

          <Timer.Area className="flex items-center justify-center gap-1 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-md px-3 py-2 border border-gray-200 dark:border-gray-600">
              <Timer.Item
                type="hours"
                className="text-xl font-mono text-gray-900 dark:text-gray-100 min-w-[2ch] text-center"
              />
            </div>
            <Timer.Separator className="text-gray-400 mx-1">:</Timer.Separator>
            <div className="bg-white dark:bg-gray-800 rounded-md px-3 py-2 border border-gray-200 dark:border-gray-600">
              <Timer.Item
                type="minutes"
                className="text-xl font-mono text-gray-900 dark:text-gray-100 min-w-[2ch] text-center"
              />
            </div>
            <Timer.Separator className="text-gray-400 mx-1">:</Timer.Separator>
            <div className="bg-white dark:bg-gray-800 rounded-md px-3 py-2 border border-gray-200 dark:border-gray-600">
              <Timer.Item
                type="seconds"
                className="text-xl font-mono text-gray-900 dark:text-gray-100 min-w-[2ch] text-center"
              />
            </div>
          </Timer.Area>

          <Timer.Control className="flex gap-2">
            <Timer.ActionTrigger
              action="start"
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
            >
              <Play className="w-4 h-4" />
              Start
            </Timer.ActionTrigger>
            <Timer.ActionTrigger
              action="pause"
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm font-medium dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              <Pause className="w-4 h-4" />
              Pause
            </Timer.ActionTrigger>
          </Timer.Control>
        </div>
      </Timer.Root>
    </div>
  );
}
