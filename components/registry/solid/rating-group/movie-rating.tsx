import { RatingGroup } from "@ark-ui/solid";
import { StarIcon, PlayIcon } from "lucide-solid";
import { createSignal } from "solid-js";

export default function MovieRating() {
  const [rating, setRating] = createSignal(0);

  return (
    <div className="max-w-sm w-full bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
            <PlayIcon className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              The Great Adventure
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Action • Adventure • 2024
            </p>
          </div>
        </div>
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
              Rate this movie
            </RatingGroup.Label>
            <RatingGroup.Control className="inline-flex">
              <RatingGroup.Context>
                {({ items }) =>
                  items.map((item) => (
                    <RatingGroup.Item
                      key={item}
                      index={item}
                      className="w-5 h-5 p-0.5 focus:outline-none focus:ring-1 focus:ring-purple-500 rounded hover:scale-105 transition-transform"
                    >
                      <RatingGroup.ItemContext>
                        {({ half, highlighted }) => {
                          if (half) {
                            return (
                              <div className="relative w-4 h-4">
                                <StarIcon className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                                <div className="absolute inset-0 overflow-hidden w-1/2">
                                  <StarIcon className="w-4 h-4 text-purple-400 fill-current" />
                                </div>
                              </div>
                            );
                          }
                          if (highlighted) {
                            return (
                              <StarIcon className="w-4 h-4 text-purple-400 fill-current" />
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
              You rated this {rating()} out of 5 stars
            </p>
          )}
        </div>

        <div className="flex space-x-2">
          <button className="flex-1 px-3 py-2 text-xs font-medium text-purple-700 bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/20 dark:text-purple-300 dark:hover:bg-purple-900/30 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
            Watch Trailer
          </button>
          <button className="flex-1 px-3 py-2 text-xs font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            Add to List
          </button>
        </div>
      </div>
    </div>
  );
}
