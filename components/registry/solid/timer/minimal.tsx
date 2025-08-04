import { Timer } from "@ark-ui/solid/timer";

export default function TimerMinimal() {
  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <Timer.Root autoStart targetMs={5 * 60 * 1000} class="text-center">
        <Timer.Area class="inline-flex text-xl font-mono text-gray-900 dark:text-gray-100">
          <Timer.Item type="minutes" />
          <Timer.Separator>:</Timer.Separator>
          <Timer.Item type="seconds" />
        </Timer.Area>
      </Timer.Root>
    </div>
  );
}
