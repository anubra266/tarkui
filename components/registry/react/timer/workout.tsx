"use client";

import { Timer } from "@ark-ui/react/timer";
import { Dumbbell, Pause, Play, RotateCcw } from "lucide-react";

export default function TimerWorkout() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <Timer.Root
        countdown
        autoStart
        startMs={30 * 1000}
        className="w-full max-w-xs"
      >
        <div className="bg-linear-to-b from-orange-500 to-red-600 rounded-lg p-6 text-white text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Dumbbell className="w-6 h-6" />
            <h3 className="font-bold text-lg">Rest Time</h3>
          </div>

          <Timer.Area className="mb-6">
            <div className="text-5xl font-bold font-mono">
              <Timer.Item type="seconds" className="min-w-[2ch] text-center" />
            </div>
            <div className="text-sm opacity-80 mt-1">seconds</div>
          </Timer.Area>

          <Timer.Control className="flex justify-center gap-2">
            <Timer.ActionTrigger
              action="resume"
              className="p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-colors"
            >
              <Play className="w-4 h-4" />
            </Timer.ActionTrigger>
            <Timer.ActionTrigger
              action="pause"
              className="p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-colors"
            >
              <Pause className="w-4 h-4" />
            </Timer.ActionTrigger>
            <Timer.ActionTrigger
              action="restart"
              className="p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </Timer.ActionTrigger>
          </Timer.Control>
        </div>
      </Timer.Root>
    </div>
  );
}
