import { RatingGroup } from "@ark-ui/solid";
import { StarIcon, ClockIcon, MessageCircleIcon } from "lucide-solid";
import { createSignal } from "solid-js";

export default function ServiceEvaluation() {
  const [responseTime, setResponseTime] = createSignal(0);
  const [helpfulness, setHelpfulness] = createSignal(0);
  const [feedback, setFeedback] = createSignal("");
  const [anonymous, setAnonymous] = createSignal(false);

  const categories = [
    {
      label: "Response Time",
      icon: ClockIcon,
      rating: responseTime,
      setRating: setResponseTime,
    },
    {
      label: "Helpfulness",
      icon: MessageCircleIcon,
      rating: helpfulness,
      setRating: setHelpfulness,
    },
  ];

  const overallMessages = {
    0: "Please rate our service",
    1: "We're sorry to hear that",
    2: "We'll work to improve",
    3: "Thank you for your feedback",
    4: "We're glad you're satisfied",
    5: "Excellent! We appreciate it",
  };

  const getOverallRating = () => {
    if (responseTime() === 0 || helpfulness() === 0) return 0;
    return Math.round((responseTime() + helpfulness()) / 2);
  };

  return (
    <div className="max-w-sm w-full bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Service Feedback
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          Help us improve our customer service
        </p>
      </div>

      <div className="p-4 space-y-4">
        {categories.map((category) => (
          <div
            key={category.label}
            className="bg-gray-50 dark:bg-gray-800 rounded p-2 border border-gray-200 dark:border-gray-700"
          >
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <category.icon className="w-4 h-4 text-gray-500" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  {category.label}
                </span>
              </div>

              <RatingGroup.Root
                count={5}
                value={category.rating()}
                onValueChange={(details) => category.setRating(details.value)}
                allowHalf
                className="pl-7"
              >
                <RatingGroup.Control className="inline-flex">
                  <RatingGroup.Context>
                    {({ items }) =>
                      items.map((item) => (
                        <RatingGroup.Item
                          key={item}
                          index={item}
                          className="w-5 h-5 p-0.5 focus:outline-none focus:ring-1 focus:ring-green-500 rounded hover:scale-105 transition-transform"
                        >
                          <RatingGroup.ItemContext>
                            {({ half, highlighted }) => {
                              if (half) {
                                return (
                                  <div className="relative w-4 h-4">
                                    <StarIcon className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                                    <div className="absolute inset-0 overflow-hidden w-1/2">
                                      <StarIcon className="w-4 h-4 text-green-400 fill-current" />
                                    </div>
                                  </div>
                                );
                              }
                              if (highlighted) {
                                return (
                                  <StarIcon className="w-4 h-4 text-green-400 fill-current" />
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
            </div>
          </div>
        ))}

        <div>
          <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
            Additional Comments
          </label>
          <textarea
            value={feedback()}
            onInput={(e) => setFeedback(e.currentTarget.value)}
            placeholder="Share your experience..."
            className="w-full px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 resize-none"
            rows={2}
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="anonymous"
            checked={anonymous()}
            onChange={(e) => setAnonymous(e.currentTarget.checked)}
            className="w-3 h-3 text-green-600 border-gray-300 rounded focus:ring-green-500"
          />
          <label
            for="anonymous"
            className="text-xs text-gray-700 dark:text-gray-300"
          >
            Submit anonymously
          </label>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full px-3 py-2 text-xs font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          Submit
        </button>
      </div>
    </div>
  );
}
