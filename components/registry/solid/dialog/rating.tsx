import { Dialog } from "@ark-ui/solid/dialog";
import { Portal } from "solid-js/web";
import { X, Star } from "lucide-solid";
import { createSignal, For } from "solid-js";

export default function RatingDialog() {
  const [selectedRating, setSelectedRating] = createSignal<number | null>(null);
  const [feedback, setFeedback] = createSignal("");

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
        <button class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center">
          Rating
        </button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs" />
        <Dialog.Positioner class="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content class="relative w-full max-w-sm rounded-lg bg-white dark:bg-gray-900 p-5 shadow-lg">
            <Dialog.CloseTrigger asChild>
              <button class="absolute right-3 top-3 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer">
                <X class="h-4 w-4" />
              </button>
            </Dialog.CloseTrigger>

            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                  <Star class="h-5 w-5 text-gray-600 dark:text-white" />
                </div>
                <div class="space-y-1">
                  <Dialog.Title class="text-lg font-semibold text-gray-900 dark:text-white">
                    Rate your experience
                  </Dialog.Title>
                  <Dialog.Description class="text-sm text-gray-600 dark:text-gray-400">
                    How would you rate our service?
                  </Dialog.Description>
                </div>
              </div>

              <div class="space-y-3">
                {/* Rating Scale */}
                <div class="space-y-2">
                  <div class="flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden">
                    <For each={ratings}>
                      {(rating, index) => (
                        <button
                          onClick={() => setSelectedRating(rating.value)}
                          class={`flex-1 px-2 py-2 text-xs font-medium transition-colors ${
                            selectedRating() === rating.value
                              ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                          } ${
                            index() !== ratings.length - 1
                              ? "border-r border-gray-300 dark:border-gray-600"
                              : ""
                          }`}
                        >
                          {rating.value}
                        </button>
                      )}
                    </For>
                  </div>
                  {selectedRating() !== null && (
                    <p class="text-xs text-center text-gray-600 dark:text-gray-400">
                      {ratings[selectedRating()!].label}
                    </p>
                  )}
                </div>

                {/* Feedback */}
                <div class="space-y-1">
                  <label class="block text-xs font-medium text-gray-700 dark:text-gray-300">
                    Additional feedback (optional)
                  </label>
                  <textarea
                    value={feedback()}
                    onInput={(e) => setFeedback(e.currentTarget.value)}
                    placeholder="Tell us more about your experience..."
                    rows={3}
                    class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors resize-none"
                  />
                </div>

                <Dialog.CloseTrigger asChild>
                  <button class="w-full px-3 py-2 text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center font-medium">
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
