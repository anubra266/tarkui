import { Dialog } from "@ark-ui/solid/dialog";
import { Portal } from "solid-js/web";
import { X, ShoppingBag, CreditCard } from "lucide-solid";
import { createSignal } from "solid-js";

export default function CheckoutDialog() {
  const [selectedPlan, setSelectedPlan] = createSignal("yearly");
  const [paymentData, setPaymentData] = createSignal({
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setPaymentData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger
        asChild={(props) => <button {...props()} />}
        class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center"
      >
        Checkout
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs" />
        <Dialog.Positioner class="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content class="relative w-full max-w-sm rounded-lg bg-white dark:bg-gray-900 p-5 shadow-lg">
            <Dialog.CloseTrigger
              asChild={(props) => <button {...props()} />}
              class="absolute right-3 top-3 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
            >
              <X class="h-4 w-4" />
            </Dialog.CloseTrigger>

            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                  <ShoppingBag class="h-5 w-5 text-gray-600 dark:text-white" />
                </div>
                <div class="space-y-1">
                  <Dialog.Title class="text-lg font-semibold text-gray-900 dark:text-white">
                    Confirm and pay
                  </Dialog.Title>
                  <Dialog.Description class="text-sm text-gray-600 dark:text-gray-400">
                    Pay securely and cancel any time.
                  </Dialog.Description>
                </div>
              </div>

              <div class="space-y-4">
                {/* Pricing Options */}
                <div class="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedPlan("monthly")}
                    class={`p-3 rounded-md border text-left transition-colors ${
                      selectedPlan() === "monthly"
                        ? "border-gray-900 dark:border-white bg-gray-50 dark:bg-gray-800"
                        : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-500"
                    }`}
                  >
                    <div class="text-gray-900 dark:text-white font-medium text-sm">
                      Monthly
                    </div>
                    <div class="text-gray-600 dark:text-gray-400 text-xs">
                      $15/month
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedPlan("yearly")}
                    class={`p-3 rounded-md border text-left relative transition-colors ${
                      selectedPlan() === "yearly"
                        ? "border-gray-900 dark:border-white bg-gray-50 dark:bg-gray-800"
                        : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-500"
                    }`}
                  >
                    <div class="absolute -top-1 -right-1">
                      <span class="bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    </div>
                    <div class="text-gray-900 dark:text-white font-medium text-sm">
                      Yearly
                    </div>
                    <div class="text-gray-600 dark:text-gray-400 text-xs">
                      $150/year
                    </div>
                  </button>
                </div>

                {/* Name on Card */}
                <div class="space-y-1">
                  <label class="block text-xs font-medium text-gray-700 dark:text-gray-300">
                    Name on card
                  </label>
                  <input
                    type="text"
                    value={paymentData().nameOnCard}
                    onInput={(e) =>
                      handleInputChange("nameOnCard", e.currentTarget.value)
                    }
                    class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  />
                </div>

                {/* Card Details */}
                <div class="space-y-2">
                  <h3 class="text-sm font-medium text-gray-900 dark:text-white">
                    Card Details
                  </h3>

                  <div class="relative">
                    <input
                      type="text"
                      placeholder="Card number"
                      value={paymentData().cardNumber}
                      onInput={(e) =>
                        handleInputChange("cardNumber", e.currentTarget.value)
                      }
                      class="w-full px-3 py-2 pr-10 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                    />
                    <CreditCard class="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>

                  <div class="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={paymentData().expiryDate}
                      onInput={(e) =>
                        handleInputChange("expiryDate", e.currentTarget.value)
                      }
                      class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                    />

                    <input
                      type="text"
                      placeholder="CVC"
                      value={paymentData().cvc}
                      onInput={(e) =>
                        handleInputChange("cvc", e.currentTarget.value)
                      }
                      class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Add Coupon */}
                <button class="text-gray-900 dark:text-white text-xs underline hover:no-underline transition-all">
                  + Add coupon
                </button>

                {/* Subscribe Button */}
                <Dialog.CloseTrigger
                  asChild={(props) => <button {...props()} />}
                  class="w-full px-3 py-2 text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center font-medium"
                >
                  Subscribe
                </Dialog.CloseTrigger>

                {/* Footer Text */}
                <p class="text-center text-xs text-gray-500 dark:text-gray-400">
                  Payments are non-refundable. Cancel anytime.
                </p>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
