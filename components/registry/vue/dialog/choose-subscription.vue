<script setup>
import { Dialog } from "@ark-ui/vue/dialog";
import { X, RotateCcw, Check } from "lucide-vue-next";
import { reactive } from "vue";

const state = reactive({
  selectedPlan: "pro",
});

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "$9/month",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$29/month",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$99/month",
  },
];

const features = [
  "Access to all features",
  "Priority customer support",
  "Advanced analytics dashboard",
  "Team collaboration tools",
  "30-day money back guarantee",
  "Custom integrations",
];
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger as-child>
      <button
        class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center"
      >
        Choose Subscription
      </button>
    </Dialog.Trigger>
    <Teleport to="body">
      <Dialog.Backdrop
        class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      />
      <Dialog.Positioner
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <Dialog.Content
          class="relative w-full max-w-sm rounded-lg bg-white dark:bg-gray-900 p-5 shadow-lg"
        >
          <Dialog.CloseTrigger as-child>
            <button
              class="absolute right-3 top-3 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
            >
              <X class="h-4 w-4" />
            </button>
          </Dialog.CloseTrigger>

          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
              >
                <RotateCcw class="h-5 w-5 text-gray-600 dark:text-white" />
              </div>
              <div class="space-y-1">
                <Dialog.Title
                  class="text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Change your plan
                </Dialog.Title>
                <Dialog.Description
                  class="text-sm text-gray-600 dark:text-gray-400"
                >
                  Pick one of the following plans.
                </Dialog.Description>
              </div>
            </div>

            <div class="space-y-4">
              <!-- Plan Options -->
              <div class="space-y-2">
                <button
                  v-for="plan in plans"
                  :key="plan.id"
                  @click="state.selectedPlan = plan.id"
                  class="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 text-left flex items-center justify-between transition-colors"
                >
                  <div>
                    <div
                      class="text-gray-900 dark:text-white font-medium text-sm"
                    >
                      {{ plan.name }}
                    </div>
                    <div class="text-gray-600 dark:text-gray-400 text-xs">
                      {{ plan.price }}
                    </div>
                  </div>
                  <div
                    :class="`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      state.selectedPlan === plan.id
                        ? 'border-gray-900 dark:border-white bg-gray-900 dark:bg-white'
                        : 'border-gray-400 dark:border-gray-500'
                    }`"
                  >
                    <div
                      v-if="state.selectedPlan === plan.id"
                      class="w-2 h-2 rounded-full bg-white dark:bg-gray-900"
                    ></div>
                  </div>
                </button>
              </div>

              <!-- Features Section -->
              <div class="space-y-3">
                <h3 class="text-sm font-medium text-gray-900 dark:text-white">
                  Features include:
                </h3>
                <div class="space-y-2">
                  <div
                    v-for="feature in features"
                    :key="feature"
                    class="flex items-start space-x-2"
                  >
                    <Check
                      class="h-4 w-4 text-gray-600 dark:text-gray-400 mt-0.5 flex-shrink-0"
                    />
                    <span class="text-xs text-gray-600 dark:text-gray-400">
                      {{ feature }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="space-y-2">
                <Dialog.CloseTrigger as-child>
                  <button
                    class="w-full px-3 py-2 text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center font-medium"
                  >
                    Change plan
                  </button>
                </Dialog.CloseTrigger>

                <Dialog.CloseTrigger as-child>
                  <button
                    class="w-full px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors cursor-pointer inline-flex items-center justify-center"
                  >
                    Cancel
                  </button>
                </Dialog.CloseTrigger>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Positioner>
    </Teleport>
  </Dialog.Root>
</template>
