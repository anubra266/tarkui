import { RatingGroup } from "@ark-ui/solid";
import { StarIcon } from "lucide-solid";

export default function BasicRatingGroup() {
  return (
    <div className="max-w-sm w-full">
      <RatingGroup.Root count={5} allowHalf>
        <RatingGroup.Label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Rate this item
        </RatingGroup.Label>
        <RatingGroup.Control className="inline-flex">
          <RatingGroup.Context>
            {({ items }) =>
              items.map((item) => (
                <RatingGroup.Item
                  key={item}
                  index={item}
                  className="w-6 h-6 p-0.5 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded hover:scale-105 transition-transform"
                >
                  <RatingGroup.ItemContext>
                    {({ half, highlighted }) => {
                      if (half) {
                        return (
                          <div className="relative w-5 h-5">
                            <StarIcon className="w-5 h-5 text-gray-300 dark:text-gray-600" />
                            <div className="absolute inset-0 overflow-hidden w-1/2">
                              <StarIcon className="w-5 h-5 text-blue-400 fill-current" />
                            </div>
                          </div>
                        );
                      }
                      if (highlighted) {
                        return (
                          <StarIcon className="w-5 h-5 text-blue-400 fill-current" />
                        );
                      }
                      return (
                        <StarIcon className="w-5 h-5 text-gray-300 dark:text-gray-500" />
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
    </div>
  );
}
