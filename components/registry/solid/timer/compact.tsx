import { Timer } from "@ark-ui/solid/timer";
import { Play, Square } from "lucide-solid";

export default function TimerCompact() {
  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <Timer.Root targetMs={15 * 60 * 1000} class="flex items-center gap-3">
        <Timer.Area class="flex items-center text-sm font-mono text-gray-900 dark:text-gray-100">
          <Timer.Item type="minutes" class="min-w-[2ch] text-center" />
          <Timer.Separator>:</Timer.Separator>
          <Timer.Item type="seconds" class="min-w-[2ch] text-center" />
        </Timer.Area>

        <Timer.Control class="flex gap-1">
          <Timer.ActionTrigger
            action="start"
            class="p-1.5 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            <Play class="w-3 h-3" />
          </Timer.ActionTrigger>
          <Timer.ActionTrigger
            action="pause"
            class="p-1.5 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            <Square class="w-3 h-3" />
          </Timer.ActionTrigger>
        </Timer.Control>
      </Timer.Root>
    </div>
  );
}
