import { Switch } from "@ark-ui/solid/switch";

export default function SwitchLargeThumb() {
  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <Switch.Root class="flex items-center gap-3">
        <Switch.Control class="relative inline-flex w-11 h-4 items-center rounded-full bg-gray-300 transition-colors duration-200 ease-in-out data-[state=checked]:bg-blue-500 data-[focus-visible]:ring-2 data-[focus-visible]:ring-gray-300/50 data-[state=checked]:data-[focus-visible]:ring-blue-500/50 dark:bg-gray-600 dark:data-[state=checked]:bg-blue-500">
          <Switch.Thumb class="w-6 h-6 rounded-full bg-white shadow-lg border border-gray-200 transition-transform duration-200 ease-in-out data-[state=checked]:translate-x-5 dark:border-gray-300" />
        </Switch.Control>
        <Switch.HiddenInput />
      </Switch.Root>
    </div>
  );
}
