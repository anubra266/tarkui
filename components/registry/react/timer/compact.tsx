"use client";

import { Timer } from "@ark-ui/react/timer";
import { Play, Square } from "lucide-react";

export default function TimerCompact() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <Timer.Root targetMs={15 * 60 * 1000} className="flex items-center gap-3">
        <Timer.Area className="flex items-center text-sm font-mono text-gray-900 dark:text-gray-100">
          <Timer.Item type="minutes" className="min-w-[2ch] text-center" />
          <Timer.Separator>:</Timer.Separator>
          <Timer.Item type="seconds" className="min-w-[2ch] text-center" />
        </Timer.Area>

        <Timer.Control className="flex gap-1">
          <Timer.ActionTrigger
            action="start"
            className="p-1.5 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            <Play className="w-3 h-3" />
          </Timer.ActionTrigger>
          <Timer.ActionTrigger
            action="pause"
            className="p-1.5 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            <Square className="w-3 h-3" />
          </Timer.ActionTrigger>
        </Timer.Control>
      </Timer.Root>
    </div>
  );
}
