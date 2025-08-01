import { RadioGroup } from "@ark-ui/solid/radio-group";
import { For } from "solid-js";

export default function Plans() {
  const plans = [
    { value: "starter", name: "Starter", price: "$12/mo", badge: null },
    { value: "pro", name: "Pro", price: "$39/mo", badge: "Most Popular" },
    { value: "business", name: "Business", price: "$79/mo", badge: null },
    {
      value: "enterprise",
      name: "Enterprise",
      price: "Contact us",
      badge: null,
    },
  ];

  return (
    <div class="space-y-4 w-full max-w-xs">
      <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">
        Select your subscription
      </h3>

      <RadioGroup.Root
        class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
        defaultValue="plus"
      >
        <For each={plans}>
          {(plan) => (
            <RadioGroup.Item
              value={plan.value}
              class="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 data-[state=checked]:bg-blue-50 dark:hover:bg-gray-700 dark:data-[state=checked]:bg-blue-950/50 transition-colors duration-200"
            >
              <div class="flex items-center gap-3">
                <RadioGroup.ItemControl class="group size-4 bg-white border-2 border-gray-300 rounded-full data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-hover:border-gray-400 data-focus:ring-2 data-focus:ring-blue-500/50 transition-all duration-200 flex items-center justify-center text-white">
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

                <div class="flex items-center gap-2">
                  <RadioGroup.ItemText class="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {plan.name}
                  </RadioGroup.ItemText>
                  {plan.badge && (
                    <span class="px-1.5 py-0.5 text-xs font-medium text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 rounded-full">
                      {plan.badge}
                    </span>
                  )}
                </div>
              </div>

              <div class="text-sm font-medium text-gray-600 dark:text-gray-400">
                {plan.price}
              </div>

              <RadioGroup.ItemHiddenInput />
            </RadioGroup.Item>
          )}
        </For>
      </RadioGroup.Root>
    </div>
  );
}
