import { Timer } from "@ark-ui/solid/timer";
import { Play, Square } from "lucide-solid";

export default function TimerWithLabels() {
  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <Timer.Root
        targetMs={90 * 60 * 1000}
        class="flex flex-col items-center gap-4"
      >
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">
          Study Session
        </h3>

        <Timer.Area class="flex items-center gap-4 text-gray-900 dark:text-gray-100">
          <div class="flex flex-col items-center">
            <Timer.Item
              type="hours"
              class="text-2xl font-mono min-w-[2ch] text-center"
            />
            <span class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Hours
            </span>
          </div>
          <div class="flex flex-col items-center">
            <Timer.Item
              type="minutes"
              class="text-2xl font-mono min-w-[2ch] text-center"
            />
            <span class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Minutes
            </span>
          </div>
          <div class="flex flex-col items-center">
            <Timer.Item
              type="seconds"
              class="text-2xl font-mono min-w-[2ch] text-center"
            />
            <span class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Seconds
            </span>
          </div>
        </Timer.Area>

        <Timer.Control class="flex gap-2">
          <Timer.ActionTrigger
            action="start"
            class="flex items-center gap-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
          >
            <Play class="w-4 h-4" />
            Start
          </Timer.ActionTrigger>
          <Timer.ActionTrigger
            action="pause"
            class="flex items-center gap-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
          >
            <Square class="w-4 h-4" />
            Stop
          </Timer.ActionTrigger>
        </Timer.Control>
      </Timer.Root>
    </div>
  );
}
