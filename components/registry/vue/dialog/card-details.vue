<script setup>
import { Dialog } from "@ark-ui/vue/dialog";
import { X, CreditCard } from "lucide-vue-next";
import { reactive } from "vue";

const cardData = reactive({
  nameOnCard: "",
  cardNumber: "",
  expiryDate: "",
  cvc: "",
  setAsDefault: false,
});

function handleInputChange(field, value) {
  cardData[field] = value;
}
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger as-child>
      <button
        class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center"
      >
        Card Details
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
                <CreditCard class="h-5 w-5 text-gray-600 dark:text-white" />
              </div>
              <div class="space-y-1">
                <Dialog.Title
                  class="text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Update your card
                </Dialog.Title>
                <Dialog.Description
                  class="text-sm text-gray-600 dark:text-gray-400"
                >
                  Your new card will replace your current card.
                </Dialog.Description>
              </div>
            </div>

            <div class="space-y-3">
              <div class="space-y-1">
                <label
                  class="block text-xs font-medium text-gray-700 dark:text-gray-300"
                >
                  Name on card
                </label>
                <input
                  type="text"
                  v-model="cardData.nameOnCard"
                  class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                />
              </div>

              <div class="space-y-1">
                <label
                  class="block text-xs font-medium text-gray-700 dark:text-gray-300"
                >
                  Card Number
                </label>
                <div class="relative">
                  <input
                    type="text"
                    placeholder="Card number"
                    v-model="cardData.cardNumber"
                    class="w-full px-3 py-2 pr-10 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  />
                  <CreditCard
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                  />
                </div>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div class="space-y-1">
                  <label
                    class="block text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    Expiry date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    v-model="cardData.expiryDate"
                    class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  />
                </div>

                <div class="space-y-1">
                  <label
                    class="block text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    placeholder="CVC"
                    v-model="cardData.cvc"
                    class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  />
                </div>
              </div>

              <div class="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="setAsDefault"
                  v-model="cardData.setAsDefault"
                  class="w-3 h-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 focus:ring-0 focus:ring-offset-0"
                />
                <label
                  for="setAsDefault"
                  class="text-xs text-gray-600 dark:text-gray-400 cursor-pointer"
                >
                  Set as default payment method
                </label>
              </div>

              <Dialog.CloseTrigger as-child>
                <button
                  class="w-full px-3 py-2 text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center font-medium"
                >
                  Update card
                </button>
              </Dialog.CloseTrigger>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Positioner>
    </Teleport>
  </Dialog.Root>
</template>
