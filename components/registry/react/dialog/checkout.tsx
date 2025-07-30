"use client";

import { Dialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { X, ShoppingBag, CreditCard } from "lucide-react";
import { useState } from "react";

export default function CheckoutDialog() {
  const [selectedPlan, setSelectedPlan] = useState("yearly");
  const [paymentData, setPaymentData] = useState({
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
      <Dialog.Trigger asChild>
        <button className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center">
          Checkout
        </button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop className="data-[state=open]:animate-backdrop-in data-[state=closed]:animate-backdrop-out fixed inset-0 z-50 bg-black/50 backdrop-blur-xs" />
        <Dialog.Positioner className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="data-[state=open]:animate-dialog-in data-[state=closed]:animate-dialog-out relative w-full max-w-sm rounded-lg bg-white dark:bg-gray-900 p-5 shadow-lg">
            <Dialog.CloseTrigger asChild>
              <button className="absolute right-3 top-3 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer">
                <X className="h-4 w-4" />
              </button>
            </Dialog.CloseTrigger>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                  <ShoppingBag className="h-5 w-5 text-gray-600 dark:text-white" />
                </div>
                <div className="space-y-1">
                  <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-white">
                    Confirm and pay
                  </Dialog.Title>
                  <Dialog.Description className="text-sm text-gray-600 dark:text-gray-400">
                    Pay securely and cancel any time.
                  </Dialog.Description>
                </div>
              </div>

              <div className="space-y-4">
                {/* Pricing Options */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedPlan("monthly")}
                    className={`p-3 rounded-md border text-left transition-colors ${
                      selectedPlan === "monthly"
                        ? "border-gray-900 dark:border-white bg-gray-50 dark:bg-gray-800"
                        : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-500"
                    }`}
                  >
                    <div className="text-gray-900 dark:text-white font-medium text-sm">
                      Monthly
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-xs">
                      $15/month
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedPlan("yearly")}
                    className={`p-3 rounded-md border text-left relative transition-colors ${
                      selectedPlan === "yearly"
                        ? "border-gray-900 dark:border-white bg-gray-50 dark:bg-gray-800"
                        : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-500"
                    }`}
                  >
                    <div className="absolute -top-1 -right-1">
                      <span className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    </div>
                    <div className="text-gray-900 dark:text-white font-medium text-sm">
                      Yearly
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-xs">
                      $150/year
                    </div>
                  </button>
                </div>

                {/* Name on Card */}
                <div className="space-y-1">
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                    Name on card
                  </label>
                  <input
                    type="text"
                    value={paymentData.nameOnCard}
                    onChange={(e) =>
                      handleInputChange("nameOnCard", e.target.value)
                    }
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  />
                </div>

                {/* Card Details */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    Card Details
                  </h3>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Card number"
                      value={paymentData.cardNumber}
                      onChange={(e) =>
                        handleInputChange("cardNumber", e.target.value)
                      }
                      className="w-full px-3 py-2 pr-10 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                    />
                    <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={paymentData.expiryDate}
                      onChange={(e) =>
                        handleInputChange("expiryDate", e.target.value)
                      }
                      className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                    />

                    <input
                      type="text"
                      placeholder="CVC"
                      value={paymentData.cvc}
                      onChange={(e) => handleInputChange("cvc", e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Add Coupon */}
                <button className="text-gray-900 dark:text-white text-xs underline hover:no-underline transition-all">
                  + Add coupon
                </button>

                {/* Subscribe Button */}
                <Dialog.CloseTrigger asChild>
                  <button className="w-full px-3 py-2 text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center font-medium">
                    Subscribe
                  </button>
                </Dialog.CloseTrigger>

                {/* Footer Text */}
                <p className="text-center text-xs text-gray-500 dark:text-gray-400">
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
