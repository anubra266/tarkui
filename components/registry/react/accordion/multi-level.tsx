import { Accordion } from "@ark-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";

export default function MultiLevelAccordion() {
  const items = [
    "Advanced data visualization techniques",
    "Machine learning for beginners",
    "Sustainable urban planning methods",
    "Psychology of human behavior",
  ];

  const nestedItemsByTopic = {
    "Advanced data visualization techniques": [
      "Interactive dashboard design",
      "Statistical chart selection",
    ],
    "Machine learning for beginners": [
      "Supervised learning basics",
      "Data preprocessing steps",
    ],
    "Sustainable urban planning methods": [
      "Green building certification programs",
      "Community engagement strategies",
    ],
    "Psychology of human behavior": [
      "Cognitive bias patterns",
      "Social influence mechanisms",
    ],
  };

  return (
    <Accordion.Root
      defaultValue={["Sustainable urban planning methods"]}
      collapsible
      className="w-full max-w-md mx-auto bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm"
    >
      {items.map((item, index) => (
        <Accordion.Item
          key={index}
          value={item}
          className="group border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0"
        >
          <Accordion.ItemTrigger className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200">
            <span className="font-medium text-gray-900 dark:text-white text-sm">
              {item}
            </span>
            <Accordion.ItemIndicator className="ml-2 transition-transform duration-200 data-[state=open]:rotate-180">
              <ChevronDownIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <div className="px-4 pb-3">
              <div className="pt-1 mb-3">
                {item === "Advanced data visualization techniques"
                  ? "Master the art of presenting complex data through interactive charts, dashboards, and visual storytelling that drives decision-making."
                  : item === "Machine learning for beginners"
                  ? "Discover fundamental AI concepts and practical algorithms that power modern applications from recommendation systems to predictive analytics."
                  : item === "Sustainable urban planning methods"
                  ? "Transform cities into livable, eco-friendly spaces through green infrastructure, mixed-use development, and community-centered design principles."
                  : "Understand the psychological principles that influence human decision-making, social interactions, and behavioral patterns in everyday life."}
              </div>

              {/* Nested accordion */}
              <Accordion.Root
                collapsible
                className="border-l-2 border-blue-500/20 ml-2"
              >
                {nestedItemsByTopic[
                  item as keyof typeof nestedItemsByTopic
                ].map((nestedItem, nestedIndex) => (
                  <Accordion.Item
                    key={nestedIndex}
                    value={nestedItem}
                    className="group border-b border-gray-200/30 dark:border-gray-700/30 last:border-b-0"
                  >
                    <Accordion.ItemTrigger className="w-full px-3 py-2 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200">
                      <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                        {nestedItem}
                      </span>
                      <Accordion.ItemIndicator className="ml-2 transition-transform duration-200 data-[state=open]:rotate-180">
                        <ChevronDownIcon className="w-3 h-3 text-gray-500 dark:text-gray-500" />
                      </Accordion.ItemIndicator>
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent className="px-3 pb-2 text-xs text-gray-600 dark:text-gray-400">
                      <div className="pt-1">
                        {nestedItem === "Interactive dashboard design" ? (
                          <div>
                            Create intuitive interfaces that allow users to
                            explore data dynamically with filters, drill-downs,
                            and real-time updates.
                          </div>
                        ) : nestedItem === "Statistical chart selection" ? (
                          <div>
                            Choose the right visualization type for your data
                            story, from scatter plots for correlations to heat
                            maps for patterns.
                          </div>
                        ) : nestedItem === "Supervised learning basics" ? (
                          <div>
                            Learn classification and regression techniques using
                            labeled training data to make predictions on new,
                            unseen examples.
                          </div>
                        ) : nestedItem === "Data preprocessing steps" ? (
                          <div>
                            Clean, transform, and prepare raw data through
                            normalization, feature engineering, and handling
                            missing values.
                          </div>
                        ) : nestedItem ===
                          "Green building certification programs" ? (
                          <div>
                            LEED and BREEAM standards guide sustainable
                            construction with energy efficiency and
                            environmental responsibility.
                          </div>
                        ) : nestedItem === "Community engagement strategies" ? (
                          <div>
                            Build consensus through town halls, surveys, and
                            collaborative design workshops that empower
                            residents.
                          </div>
                        ) : nestedItem === "Cognitive bias patterns" ? (
                          <div>
                            Recognize common mental shortcuts like confirmation
                            bias, anchoring, and availability heuristic that
                            influence judgments.
                          </div>
                        ) : (
                          <div>
                            Explore how social proof, authority, and reciprocity
                            shape behavior through psychological principles of
                            persuasion.
                          </div>
                        )}
                      </div>
                    </Accordion.ItemContent>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
