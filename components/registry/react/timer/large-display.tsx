"use client";

import { Timer } from "@ark-ui/react/timer";
import { Pause, Play } from "lucide-react";

export default function TimerLargeDisplay() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <Timer.Root
        targetMs={2 * 60 * 60 * 1000}
        className="flex flex-col items-center gap-6"
      >
        <Timer.Area className="flex items-center gap-2 text-6xl font-mono font-bold text-gray-900 dark:text-gray-100">
          <Timer.Item type="hours" className="min-w-[2ch] text-center" />
          <Timer.Separator className="text-gray-400">:</Timer.Separator>
          <Timer.Item type="minutes" className="min-w-[2ch] text-center" />
          <Timer.Separator className="text-gray-400">:</Timer.Separator>
          <Timer.Item type="seconds" className="min-w-[2ch] text-center" />
        </Timer.Area>

        <Timer.Control className="flex gap-3">
          <Timer.ActionTrigger
            action="start"
            className="flex items-center gap-3 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            <Play className="w-5 h-5" />
            Start Timer
          </Timer.ActionTrigger>
          <Timer.ActionTrigger
            action="pause"
            className="flex items-center gap-3 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          >
            <Pause className="w-5 h-5" />
            Pause
          </Timer.ActionTrigger>
        </Timer.Control>
      </Timer.Root>
    </div>
  );
}
