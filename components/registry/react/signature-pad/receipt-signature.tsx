"use client";

import { SignaturePad } from "@ark-ui/react/signature-pad";
import { useState } from "react";
import { Receipt, CreditCard, User } from "lucide-react";

export default function ReceiptSignature() {
  const [hasSignature, setHasSignature] = useState(false);

  const handleDrawEnd = (details: any) => {
    setHasSignature(true);
  };

  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <div className="max-w-sm w-full">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
          {/* Receipt Header */}
          <div className="border-b border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Receipt className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  Store Receipt
                </span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                #12345
              </span>
            </div>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Date: {new Date().toLocaleDateString()}
            </div>
          </div>

          {/* Receipt Items */}
          <div className="p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Coffee</span>
              <span className="text-gray-900 dark:text-gray-100">$4.50</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Sandwich</span>
              <span className="text-gray-900 dark:text-gray-100">$8.75</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Tax</span>
              <span className="text-gray-900 dark:text-gray-100">$1.06</span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-2 flex justify-between font-semibold">
              <span className="text-gray-900 dark:text-gray-100">Total</span>
              <span className="text-gray-900 dark:text-gray-100">$14.31</span>
            </div>
          </div>

          {/* Payment Info */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-3">
            <div className="flex items-center space-x-2">
              <CreditCard className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Payment: Visa ending in 1234
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Cashier: John Smith
              </span>
            </div>
          </div>

          {/* Signature Section */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-3">
            <div className="text-center">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Customer Signature
              </span>
            </div>

            <SignaturePad.Root onDrawEnd={handleDrawEnd}>
              <SignaturePad.Control className="relative w-full h-24 bg-gray-50 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600">
                <SignaturePad.Segment className="w-full h-full stroke-gray-900 dark:stroke-gray-100 fill-gray-900 dark:fill-gray-100" />
                <SignaturePad.ClearTrigger className="absolute top-1 right-1 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xs">
                  Clear
                </SignaturePad.ClearTrigger>
                <SignaturePad.Guide className="absolute bottom-3 left-2 right-2 border-b border-dashed border-gray-400 dark:border-gray-500" />
              </SignaturePad.Control>
            </SignaturePad.Root>

            <div className="text-center">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {hasSignature ? "✓ Signed" : "Please sign above"}
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Thank you for your purchase!
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Keep this receipt for your records
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
