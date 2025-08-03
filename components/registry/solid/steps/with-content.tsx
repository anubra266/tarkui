import { Steps } from "@ark-ui/solid/steps";
import { Check } from "lucide-solid";
import { For } from "solid-js";

export default function StepsWithContent() {
  const steps = [
    {
      title: "Account Setup",
      content:
        "Create your account by providing your email address and choosing a secure password. This will be your primary login method.",
    },
    {
      title: "Profile Information",
      content:
        "Add your personal details including your name, phone number, and profile picture to help others identify you.",
    },
    {
      title: "Verification",
      content:
        "Verify your email address and phone number to secure your account and enable all features.",
    },
  ];

  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <Steps.Root count={3} defaultStep={1} class="w-full max-w-2xl">
        <Steps.List class="flex justify-between items-start">
          <For each={steps}>
            {(step, index) => (
              <Steps.Item
                index={index()}
                class="relative flex not-last:flex-1 items-center"
              >
                <Steps.Trigger class="flex items-center gap-3 text-left rounded-md group">
                  <Steps.Indicator class="flex justify-center items-center shrink-0 rounded-full font-semibold w-8 h-8 text-sm border-2 data-complete:bg-blue-600 data-complete:text-white data-complete:border-blue-600 data-current:bg-blue-600 data-current:text-white data-current:border-blue-600 data-incomplete:bg-gray-100 data-incomplete:text-gray-500 data-incomplete:border-gray-200 dark:data-incomplete:bg-gray-700 dark:data-incomplete:text-gray-300 dark:data-incomplete:border-gray-600 relative">
                    <span class="group-data-complete:hidden group-data-current:block">
                      {index() + 1}
                    </span>
                    <Check class="w-4 h-4 group-data-complete:block hidden" />
                  </Steps.Indicator>
                  <span class="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {step.title}
                  </span>
                </Steps.Trigger>
                <Steps.Separator
                  hidden={index() === steps.length - 1}
                  class="flex-1 bg-gray-200 dark:bg-gray-700 h-0.5 mx-3 data-complete:bg-blue-600"
                />
              </Steps.Item>
            )}
          </For>
        </Steps.List>

        <div class="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <For each={steps}>
            {(step, index) => (
              <Steps.Item index={index()}>
                <Steps.Content
                  index={index()}
                  class="text-gray-700 dark:text-gray-300"
                >
                  {step.content}
                </Steps.Content>
              </Steps.Item>
            )}
          </For>

          <Steps.CompletedContent class="text-center p-6 text-green-700 dark:text-green-300">
            <div class="flex flex-col items-center gap-3">
              <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                <Check class="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Setup Complete!
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Your account has been successfully created and verified. You can
                now start using all features.
              </p>
            </div>
          </Steps.CompletedContent>
        </div>

        <div class="flex justify-between items-center mt-6">
          <Steps.PrevTrigger class="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700">
            Previous
          </Steps.PrevTrigger>
          <Steps.NextTrigger class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-600 dark:border-blue-600 dark:hover:bg-blue-700">
            Continue
          </Steps.NextTrigger>
        </div>
      </Steps.Root>
    </div>
  );
}
