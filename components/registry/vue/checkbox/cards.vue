<script setup>
import { Checkbox } from "@ark-ui/vue";
import { CheckIcon, CreditCardIcon, SmartphoneIcon } from "lucide-vue-next";
</script>

<template>
  <div class="space-y-6">
    <div>
      <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Select your plan
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Checkbox.Root class="cursor-pointer group h-full">
          <div
            class="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-white dark:bg-gray-900 shadow-sm group-data-[state=checked]:border-blue-500 group-data-[state=checked]:bg-blue-50 group-data-[state=checked]:shadow-md dark:group-data-[state=checked]:bg-blue-950 transition-all duration-200 hover:border-gray-400 hover:shadow-md dark:hover:border-gray-400 h-full flex flex-col"
          >
            <div class="flex items-start justify-between flex-1">
              <div class="flex-1 flex flex-col">
                <Checkbox.Label
                  class="block text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer"
                >
                  Basic Plan
                </Checkbox.Label>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Perfect for individuals
                </p>
                <p
                  class="text-lg font-bold text-gray-900 dark:text-gray-100 mt-auto pt-2"
                >
                  $9/month
                </p>
              </div>
              <Checkbox.Control
                class="w-5 h-5 bg-white border-2 border-gray-300 rounded data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 dark:bg-gray-800 dark:border-gray-500 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 transition-all duration-200 flex items-center justify-center"
              >
                <Checkbox.Indicator>
                  <CheckIcon class="w-3.5 h-3.5 text-white" />
                </Checkbox.Indicator>
              </Checkbox.Control>
            </div>
          </div>
          <Checkbox.HiddenInput />
        </Checkbox.Root>

        <Checkbox.Root class="cursor-pointer group h-full">
          <div
            class="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-white dark:bg-gray-900 shadow-sm group-data-[state=checked]:border-blue-500 group-data-[state=checked]:bg-blue-50 group-data-[state=checked]:shadow-md dark:group-data-[state=checked]:bg-blue-950 transition-all duration-200 hover:border-gray-400 hover:shadow-md dark:hover:border-gray-400 h-full flex flex-col"
          >
            <div class="flex items-start justify-between flex-1">
              <div class="flex-1 flex flex-col">
                <Checkbox.Label
                  class="block text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer"
                >
                  Pro Plan
                </Checkbox.Label>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Best for teams
                </p>
                <p
                  class="text-lg font-bold text-gray-900 dark:text-gray-100 mt-auto pt-2"
                >
                  $29/month
                </p>
              </div>
              <Checkbox.Control
                class="w-5 h-5 bg-white border-2 border-gray-300 rounded data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 dark:bg-gray-800 dark:border-gray-500 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 transition-all duration-200 flex items-center justify-center"
              >
                <Checkbox.Indicator>
                  <CheckIcon class="w-3.5 h-3.5 text-white" />
                </Checkbox.Indicator>
              </Checkbox.Control>
            </div>
          </div>
          <Checkbox.HiddenInput />
        </Checkbox.Root>

        <Checkbox.Root class="cursor-pointer group h-full">
          <div
            class="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-white dark:bg-gray-900 shadow-sm group-data-[state=checked]:border-blue-500 group-data-[state=checked]:bg-blue-50 group-data-[state=checked]:shadow-md dark:group-data-[state=checked]:bg-blue-950 transition-all duration-200 hover:border-gray-400 hover:shadow-md dark:hover:border-gray-400 h-full flex flex-col"
          >
            <div class="flex items-start justify-between flex-1">
              <div class="flex-1 flex flex-col">
                <Checkbox.Label
                  class="block text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer"
                >
                  Enterprise
                </Checkbox.Label>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  For large organizations
                </p>
                <p
                  class="text-lg font-bold text-gray-900 dark:text-gray-100 mt-auto pt-2"
                >
                  Custom
                </p>
              </div>
              <Checkbox.Control
                class="w-5 h-5 bg-white border-2 border-gray-300 rounded data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 dark:bg-gray-800 dark:border-gray-500 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 transition-all duration-200 flex items-center justify-center"
              >
                <Checkbox.Indicator>
                  <CheckIcon class="w-3.5 h-3.5 text-white" />
                </Checkbox.Indicator>
              </Checkbox.Control>
            </div>
          </div>
          <Checkbox.HiddenInput />
        </Checkbox.Root>
      </div>
    </div>

    <div>
      <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Payment methods
      </h3>
      <div class="space-y-4">
        <Checkbox.Root class="cursor-pointer group">
          <div
            class="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-900 shadow-sm group-data-[state=checked]:border-blue-500 group-data-[state=checked]:bg-blue-50 group-data-[state=checked]:shadow-md dark:group-data-[state=checked]:bg-blue-950 transition-all duration-200 hover:border-gray-400 hover:shadow-md dark:hover:border-gray-400"
          >
            <div class="flex items-center gap-3">
              <CreditCardIcon
                class="w-5 h-5 text-gray-400 dark:text-gray-500"
              />
              <div class="flex-1">
                <Checkbox.Label
                  class="block text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer"
                >
                  Credit Card
                </Checkbox.Label>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Visa, Mastercard, American Express
                </p>
              </div>
              <Checkbox.Control
                class="w-5 h-5 bg-white border-2 border-gray-300 rounded data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 dark:bg-gray-800 dark:border-gray-500 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 transition-all duration-200 flex items-center justify-center"
              >
                <Checkbox.Indicator>
                  <CheckIcon class="w-3.5 h-3.5 text-white" />
                </Checkbox.Indicator>
              </Checkbox.Control>
            </div>
          </div>
          <Checkbox.HiddenInput />
        </Checkbox.Root>

        <Checkbox.Root class="cursor-pointer group">
          <div
            class="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-900 shadow-sm group-data-[state=checked]:border-blue-500 group-data-[state=checked]:bg-blue-50 group-data-[state=checked]:shadow-md dark:group-data-[state=checked]:bg-blue-950 transition-all duration-200 hover:border-gray-400 hover:shadow-md dark:hover:border-gray-400"
          >
            <div class="flex items-center gap-3">
              <SmartphoneIcon
                class="w-5 h-5 text-gray-400 dark:text-gray-500"
              />
              <div class="flex-1">
                <Checkbox.Label
                  class="block text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer"
                >
                  Mobile Payment
                </Checkbox.Label>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Apple Pay, Google Pay, Samsung Pay
                </p>
              </div>
              <Checkbox.Control
                class="w-5 h-5 bg-white border-2 border-gray-300 rounded data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 dark:bg-gray-800 dark:border-gray-500 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 transition-all duration-200 flex items-center justify-center"
              >
                <Checkbox.Indicator>
                  <CheckIcon class="w-3.5 h-3.5 text-white" />
                </Checkbox.Indicator>
              </Checkbox.Control>
            </div>
          </div>
          <Checkbox.HiddenInput />
        </Checkbox.Root>
      </div>
    </div>
  </div>
</template>
