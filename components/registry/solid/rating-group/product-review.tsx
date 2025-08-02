import { RatingGroup } from "@ark-ui/solid";
import { StarIcon } from "lucide-solid";
import { createSignal } from "solid-js";

export default function ProductReview() {
  const [rating, setRating] = createSignal(0);
  const [review, setReview] = createSignal("");

  const ratingLabels = ["Poor", "Fair", "Good", "Very Good", "Excellent"];

  return (
    <div className="max-w-sm w-full bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Product Review
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          Share your experience with this product
        </p>
      </div>

      <div className="p-4 space-y-4">
        <div>
          <RatingGroup.Root
            count={5}
            value={rating()}
            onValueChange={(details) => setRating(details.value)}
            allowHalf
          >
            <RatingGroup.Label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
              Overall Rating
            </RatingGroup.Label>
            <RatingGroup.Control className="inline-flex">
              <RatingGroup.Context>
                {({ items }) =>
                  items.map((item) => (
                    <RatingGroup.Item
                      key={item}
                      index={item}
                      className="w-5 h-5 p-0.5 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded hover:scale-105 transition-transform"
                    >
                      <RatingGroup.ItemContext>
                        {({ half, highlighted }) => {
                          if (half) {
                            return (
                              <div className="relative w-4 h-4">
                                <StarIcon className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                                <div className="absolute inset-0 overflow-hidden w-1/2">
                                  <StarIcon className="w-4 h-4 text-blue-400 fill-current" />
                                </div>
                              </div>
                            );
                          }
                          if (highlighted) {
                            return (
                              <StarIcon className="w-4 h-4 text-blue-400 fill-current" />
                            );
                          }
                          return (
                            <StarIcon className="w-4 h-4 text-gray-300 dark:text-gray-500" />
                          );
                        }}
                      </RatingGroup.ItemContext>
                    </RatingGroup.Item>
                  ))
                }
              </RatingGroup.Context>
              <RatingGroup.HiddenInput />
            </RatingGroup.Control>
          </RatingGroup.Root>
          {rating() > 0 && (
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              {ratingLabels[Math.floor(rating()) - 1]}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Review
          </label>
          <textarea
            value={review()}
            onInput={(e) => setReview(e.currentTarget.value)}
            placeholder="Share your thoughts about this product..."
            className="w-full px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
            rows={3}
          />
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full px-3 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Submit Review
        </button>
      </div>
    </div>
  );
}
