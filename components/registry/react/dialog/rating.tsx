"use client";

import { Dialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { X, Star } from "lucide-react";
import { useState } from "react";

export default function RatingDialog() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");

  const ratings = [
    { value: 0, label: "Very poor" },
    { value: 1, label: "Poor" },
    { value: 2, label: "Fair" },
    { value: 3, label: "Good" },
    { value: 4, label: "Very good" },
    { value: 5, label: "Excellent" },
    { value: 6, label: "Outstanding" },
    { value: 7, label: "Exceptional" },
    { value: 8, label: "Perfect" },
  ];

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center">
          Rating
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
                  <Star className="h-5 w-5 text-gray-600 dark:text-white" />
                </div>
                <div className="space-y-1">
                  <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-white">
                    Rate your experience
                  </Dialog.Title>
                  <Dialog.Description className="text-sm text-gray-600 dark:text-gray-400">
                    How would you rate our service?
                  </Dialog.Description>
                </div>
              </div>

              <div className="space-y-3">
                {/* Rating Scale */}
                <div className="space-y-2">
                  <div className="flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden">
                    {ratings.map((rating, index) => (
                      <button
                        key={rating.value}
                        onClick={() => setSelectedRating(rating.value)}
                        className={`flex-1 px-2 py-2 text-xs font-medium transition-colors ${
                          selectedRating === rating.value
                            ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                        } ${
                          index !== ratings.length - 1
                            ? "border-r border-gray-300 dark:border-gray-600"
                            : ""
                        }`}
                      >
                        {rating.value}
                      </button>
                    ))}
                  </div>
                  {selectedRating !== null && (
                    <p className="text-xs text-center text-gray-600 dark:text-gray-400">
                      {ratings[selectedRating].label}
                    </p>
                  )}
                </div>

                {/* Feedback */}
                <div className="space-y-1">
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                    Additional feedback (optional)
                  </label>
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Tell us more about your experience..."
                    rows={3}
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors resize-none"
                  />
                </div>

                <Dialog.CloseTrigger asChild>
                  <button className="w-full px-3 py-2 text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center font-medium">
                    Send feedback
                  </button>
                </Dialog.CloseTrigger>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
