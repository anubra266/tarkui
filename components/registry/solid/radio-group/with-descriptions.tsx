import { RadioGroup } from "@ark-ui/solid/radio-group";
import { For } from "solid-js";

export default function WithDescriptions() {
  const options = [
    {
      value: "email",
      label: "Email notifications",
      description: "Receive updates and important information via email only.",
    },
    {
      value: "push",
      label: "Push notifications",
      description: "Get instant alerts on your device with push notifications.",
    },
  ];

  return (
    <RadioGroup.Root class="flex flex-col space-y-4" defaultValue="push">
      <For each={options}>
        {(option) => (
          <RadioGroup.Item
            value={option.value}
            class="flex items-start gap-3 cursor-pointer"
          >
            <RadioGroup.ItemControl class="group size-4 bg-white border-2 border-gray-300 rounded-full data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-hover:border-gray-400 data-focus:ring-2 data-focus:ring-blue-500/50 transition-all duration-200 flex items-center justify-center text-white mt-0.5">
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="currentcolor"
                xmlns="http://www.w3.org/2000/svg"
                class="opacity-0 group-data-[state=checked]:opacity-100 transition-opacity"
              >
                <circle cx="3" cy="3" r="3"></circle>
              </svg>
            </RadioGroup.ItemControl>

            <div class="flex-1">
              <RadioGroup.ItemText class="text-sm font-medium text-gray-900 dark:text-gray-100 leading-tight">
                {option.label}
              </RadioGroup.ItemText>
              <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {option.description}
              </p>
            </div>

            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
        )}
      </For>
    </RadioGroup.Root>
  );
}
