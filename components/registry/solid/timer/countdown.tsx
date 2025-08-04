import { Timer } from "@ark-ui/solid/timer";

export default function TimerCountdown() {
  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <div class="text-center">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Flash Sale Ends In
        </h3>
        <Timer.Root
          autoStart
          countdown
          startMs={24 * 60 * 60 * 1000}
          class="flex flex-col items-center"
        >
          <Timer.Area class="flex items-center gap-2 text-3xl font-bold text-red-600 dark:text-red-400">
            <div class="flex flex-col items-center">
              <Timer.Item type="days" class="min-w-[2ch] text-center" />
              <span class="text-xs font-normal text-gray-500 dark:text-gray-400">
                days
              </span>
            </div>
            <Timer.Separator class="text-gray-400">:</Timer.Separator>
            <div class="flex flex-col items-center">
              <Timer.Item type="hours" class="min-w-[2ch] text-center" />
              <span class="text-xs font-normal text-gray-500 dark:text-gray-400">
                hrs
              </span>
            </div>
            <Timer.Separator class="text-gray-400">:</Timer.Separator>
            <div class="flex flex-col items-center">
              <Timer.Item type="minutes" class="min-w-[2ch] text-center" />
              <span class="text-xs font-normal text-gray-500 dark:text-gray-400">
                min
              </span>
            </div>
            <Timer.Separator class="text-gray-400">:</Timer.Separator>
            <div class="flex flex-col items-center">
              <Timer.Item type="seconds" class="min-w-[2ch] text-center" />
              <span class="text-xs font-normal text-gray-500 dark:text-gray-400">
                sec
              </span>
            </div>
          </Timer.Area>
        </Timer.Root>
      </div>
    </div>
  );
}
