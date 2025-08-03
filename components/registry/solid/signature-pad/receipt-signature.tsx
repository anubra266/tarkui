import { SignaturePad } from "@ark-ui/solid/signature-pad";
import { createSignal } from "solid-js";
import { Receipt, CreditCard, User } from "lucide-solid";

export default function ReceiptSignature() {
  const [hasSignature, setHasSignature] = createSignal(false);

  const handleDrawEnd = () => {
    setHasSignature(true);
  };

  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <div class="max-w-sm w-full">
        <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
          {/* Receipt Header */}
          <div class="border-b border-gray-200 dark:border-gray-700 p-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <Receipt class="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span class="font-semibold text-gray-900 dark:text-gray-100">
                  Store Receipt
                </span>
              </div>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                #12345
              </span>
            </div>
            <div class="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Date: {new Date().toLocaleDateString()}
            </div>
          </div>

          {/* Receipt Items */}
          <div class="p-4 space-y-2">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600 dark:text-gray-400">Coffee</span>
              <span class="text-gray-900 dark:text-gray-100">$4.50</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600 dark:text-gray-400">Sandwich</span>
              <span class="text-gray-900 dark:text-gray-100">$8.75</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600 dark:text-gray-400">Tax</span>
              <span class="text-gray-900 dark:text-gray-100">$1.06</span>
            </div>
            <div class="border-t border-gray-200 dark:border-gray-700 pt-2 flex justify-between font-semibold">
              <span class="text-gray-900 dark:text-gray-100">Total</span>
              <span class="text-gray-900 dark:text-gray-100">$14.31</span>
            </div>
          </div>

          {/* Payment Info */}
          <div class="border-t border-gray-200 dark:border-gray-700 p-4 space-y-3">
            <div class="flex items-center space-x-2">
              <CreditCard class="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span class="text-sm text-gray-600 dark:text-gray-400">
                Payment: Visa ending in 1234
              </span>
            </div>
            <div class="flex items-center space-x-2">
              <User class="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span class="text-sm text-gray-600 dark:text-gray-400">
                Cashier: John Smith
              </span>
            </div>
          </div>

          {/* Signature Section */}
          <div class="border-t border-gray-200 dark:border-gray-700 p-4 space-y-3">
            <div class="text-center">
              <span class="text-sm font-medium text-gray-900 dark:text-gray-100">
                Customer Signature
              </span>
            </div>

            <SignaturePad.Root onDrawEnd={handleDrawEnd}>
              <SignaturePad.Control class="relative w-full h-24 bg-gray-50 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600">
                <SignaturePad.Segment class="w-full h-full stroke-gray-900 dark:stroke-gray-100 fill-gray-900 dark:fill-gray-100" />
                <SignaturePad.ClearTrigger class="absolute top-1 right-1 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xs">
                  Clear
                </SignaturePad.ClearTrigger>
                <SignaturePad.Guide class="absolute bottom-3 left-2 right-2 border-b border-dashed border-gray-400 dark:border-gray-500" />
              </SignaturePad.Control>
            </SignaturePad.Root>

            <div class="text-center">
              <span class="text-xs text-gray-500 dark:text-gray-400">
                {hasSignature() ? "✓ Signed" : "Please sign above"}
              </span>
            </div>
          </div>

          {/* Footer */}
          <div class="border-t border-gray-200 dark:border-gray-700 p-4 text-center">
            <p class="text-xs text-gray-500 dark:text-gray-400">
              Thank you for your purchase!
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Keep this receipt for your records
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
