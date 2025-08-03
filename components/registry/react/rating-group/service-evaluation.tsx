"use client";

import { RatingGroup } from "@ark-ui/react/rating-group";
import { StarIcon, SmileIcon, FrownIcon, ClockIcon } from "lucide-react";
import { useState } from "react";

export default function ServiceEvaluation() {
  const [satisfaction, setSatisfaction] = useState(0);
  const [responseTime, setResponseTime] = useState(0);

  const ratingLabels = [
    "Very Dissatisfied",
    "Dissatisfied",
    "Neutral",
    "Satisfied",
    "Very Satisfied",
  ];

  const overallMessages = {
    4.5: "Excellent service experience! Thank you for your feedback.",
    3.5: "Good service with room for improvement.",
    2.5: "Average service experience.",
    1.5: "Below average service. We apologize.",
    0: "Poor service experience. We will investigate and improve.",
  };

  const serviceData = {
    ticketId: "CS-2024-001",
    agent: "Maria Rodriguez",
    department: "Technical Support",
    issue: "Login authentication problem",
    date: "2024-01-15",
    status: "Resolved",
  };

  const ratingCategories = [
    {
      label: "Overall Satisfaction",
      rating: satisfaction,
      setRating: setSatisfaction,
      icon: SmileIcon,
      description: "How satisfied are you with the service provided?",
    },
    {
      label: "Response Time",
      rating: responseTime,
      setRating: setResponseTime,
      icon: ClockIcon,
      description: "How quickly did we respond to your inquiry?",
    },
  ];

  const getOverallRating = () => {
    const ratings = [satisfaction, responseTime];
    const validRatings = ratings.filter((r) => r > 0);
    if (validRatings.length === 0) return 0;
    return (
      Math.round(
        (validRatings.reduce((sum, r) => sum + r, 0) / validRatings.length) * 10
      ) / 10
    );
  };

  const overallRating = getOverallRating();

  return (
    <div className="max-w-sm w-full bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <div className="bg-linear-to-r from-green-600 to-teal-600 p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-base font-bold mb-1">Service Feedback</h1>
            <p className="text-xs text-green-100">
              Help us improve our customer service
            </p>
          </div>
          <div className="text-right">
            <div className="text-xs text-green-100 mb-1">
              Ticket #{serviceData.ticketId}
            </div>
            <div className="text-sm font-semibold">{serviceData.status}</div>
          </div>
        </div>
      </div>

      <div className="p-4">
        {overallRating > 0 && (
          <div className="mb-3 p-2 bg-green-50 dark:bg-green-900/30 rounded border border-green-200 dark:border-green-700">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-xs font-medium text-gray-900 dark:text-white">
                Overall Service Rating
              </h2>
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className={`w-3 h-3 ${
                        star <= Math.floor(overallRating)
                          ? "text-green-400 fill-current"
                          : star === Math.ceil(overallRating) &&
                            overallRating % 1 > 0
                          ? "text-green-400 fill-current opacity-50"
                          : "text-gray-300 dark:text-gray-500"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-900 dark:text-white">
                  {overallRating}
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              {overallRating >= 4.5 && overallMessages[4.5]}
              {overallRating >= 3.5 &&
                overallRating < 4.5 &&
                overallMessages[3.5]}
              {overallRating >= 2.5 &&
                overallRating < 3.5 &&
                overallMessages[2.5]}
              {overallRating >= 1.5 &&
                overallRating < 2.5 &&
                overallMessages[1.5]}
              {overallRating < 1.5 && overallMessages[0]}
            </p>
          </div>
        )}

        <div className="space-y-3">
          <h2 className="text-sm font-medium text-gray-900 dark:text-white">
            Rate Your Experience
          </h2>

          {ratingCategories.map((category) => (
            <div
              key={category.label}
              className="bg-gray-50 dark:bg-gray-800 rounded p-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <category.icon className="w-4 h-4 text-gray-500" />
                  <div className="flex-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {category.label}
                    </label>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                <RatingGroup.Root
                  count={5}
                  value={category.rating}
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
        </div>

        <div className="mt-4 space-y-3 pt-3 border-t border-gray-200 dark:border-gray-600">
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
              Additional Comments
            </label>
            <textarea
              placeholder="Share any additional feedback about your experience..."
              className="w-full px-2 py-1.5 text-xs border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white resize-none"
              rows={2}
            />
          </div>

          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-3 h-3 rounded border-gray-300 text-green-600 focus:ring-1 focus:ring-green-500"
              />
              <span className="text-xs text-gray-600 dark:text-gray-400 select-none">
                I would recommend this service
              </span>
            </label>
            <button className="px-4 py-1.5 bg-green-600 text-white text-xs font-medium rounded hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-500 transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
