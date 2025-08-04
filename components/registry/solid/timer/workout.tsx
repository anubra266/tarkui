import { Timer } from "@ark-ui/solid/timer";
import { Dumbbell, Pause, Play, RotateCcw } from "lucide-solid";

export default function TimerWorkout() {
  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <Timer.Root
        countdown
        autoStart
        startMs={30 * 1000}
        class="w-full max-w-xs"
      >
        <div class="bg-gradient-to-b from-orange-500 to-red-600 rounded-lg p-6 text-white text-center">
          <div class="flex items-center justify-center gap-2 mb-4">
            <Dumbbell class="w-6 h-6" />
            <h3 class="font-bold text-lg">Rest Time</h3>
          </div>

          <Timer.Area class="mb-6">
            <div class="text-5xl font-bold font-mono">
              <Timer.Item type="seconds" class="min-w-[2ch] text-center" />
            </div>
            <div class="text-sm opacity-80 mt-1">seconds</div>
          </Timer.Area>

          <Timer.Control class="flex justify-center gap-2">
            <Timer.ActionTrigger
              action="resume"
              class="p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-colors"
            >
              <Play class="w-4 h-4" />
            </Timer.ActionTrigger>
            <Timer.ActionTrigger
              action="pause"
              class="p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-colors"
            >
              <Pause class="w-4 h-4" />
            </Timer.ActionTrigger>
            <Timer.ActionTrigger
              action="restart"
              class="p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-colors"
            >
              <RotateCcw class="w-4 h-4" />
            </Timer.ActionTrigger>
          </Timer.Control>
        </div>
      </Timer.Root>
    </div>
  );
}
