import { RadioGroup } from "@ark-ui/solid/radio-group";

export default function Cards() {
  const options = [
    {
      value: "mastercard",
      label: "Mastercard",
      sublabel: "••••4242",
      description: "You can use this card with a label and a description.",
      icon: (
        <div class="w-8 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-sm flex items-center justify-center">
          <div class="w-3 h-3 bg-red-600 rounded-full opacity-80"></div>
          <div class="w-3 h-3 bg-orange-400 rounded-full -ml-1.5 opacity-80"></div>
        </div>
      ),
    },
    {
      value: "visa",
      label: "Visa",
      sublabel: "••••8888",
      description: "You can use this card with a label and a description.",
      icon: (
        <div class="w-8 h-6 bg-blue-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">
          VISA
        </div>
      ),
    },
  ];

  import { For } from "solid-js";

  return (
    <RadioGroup.Root class="flex flex-col space-y-3" defaultValue="visa">
      <For each={options}>
        {(option) => (
          <RadioGroup.Item
            value={option.value}
            class="flex items-start gap-3 p-4 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 hover:bg-gray-50 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-50 dark:bg-gray-800 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700 dark:data-[state=checked]:border-blue-500 dark:data-[state=checked]:bg-blue-950/50 transition-all duration-200"
          >
            {option.icon}

            <div class="flex-1">
              <RadioGroup.ItemText class="text-sm font-medium text-gray-900 dark:text-gray-100">
                {option.label}{" "}
                <span class="text-gray-500 dark:text-gray-400 font-normal">
                  ({option.sublabel})
                </span>
              </RadioGroup.ItemText>
              <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {option.description}
              </p>
            </div>

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

            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
        )}
      </For>
    </RadioGroup.Root>
  );
}
