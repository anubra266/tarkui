import { Accordion } from "@ark-ui/react/accordion";
import {
  ChevronDownIcon,
  Sparkles,
  Settings,
  Zap,
  HelpCircle,
  BarChart3,
  Code,
} from "lucide-react";

export default function MultiLevelWithIconAccordion() {
  const items = [
    { text: "Advanced data visualization techniques", icon: Sparkles },
    { text: "Machine learning for beginners", icon: Settings },
    { text: "Sustainable urban planning methods", icon: Zap },
    { text: "Psychology of human behavior", icon: HelpCircle },
  ];

  const nestedItemsByTopic = {
    "Advanced data visualization techniques": [
      { text: "Interactive dashboard design", icon: BarChart3 },
      { text: "Statistical chart selection", icon: Code },
    ],
    "Machine learning for beginners": [
      { text: "Supervised learning basics", icon: BarChart3 },
      { text: "Data preprocessing steps", icon: Code },
    ],
    "Sustainable urban planning methods": [
      { text: "Green building certification programs", icon: BarChart3 },
      { text: "Community engagement strategies", icon: Code },
    ],
    "Psychology of human behavior": [
      { text: "Cognitive bias patterns", icon: BarChart3 },
      { text: "Social influence mechanisms", icon: Code },
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
          value={item.text}
          className="group border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0"
        >
          <Accordion.ItemTrigger className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200">
            <div className="flex items-center">
              <item.icon className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-3" />
              <span className="font-medium text-gray-900 dark:text-white text-sm">
                {item.text}
              </span>
            </div>
            <Accordion.ItemIndicator className="ml-2 transition-transform duration-200 data-[state=open]:rotate-180">
              <ChevronDownIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <div className="px-4 pb-3">
              <div className="pt-1 mb-3">
                {item.text === "Advanced data visualization techniques"
                  ? "Master the art of presenting complex data through interactive charts, dashboards, and visual storytelling that drives decision-making."
                  : item.text === "Machine learning for beginners"
                  ? "Discover fundamental AI concepts and practical algorithms that power modern applications from recommendation systems to predictive analytics."
                  : item.text === "Sustainable urban planning methods"
                  ? "Transform cities into livable, eco-friendly spaces through green infrastructure, mixed-use development, and community-centered design principles."
                  : "Understand the psychological principles that influence human decision-making, social interactions, and behavioral patterns in everyday life."}
              </div>

              {/* Nested accordion */}
              <Accordion.Root
                collapsible
                className="border-l-2 border-blue-500/20 ml-2"
              >
                {nestedItemsByTopic[
                  item.text as keyof typeof nestedItemsByTopic
                ].map((nestedItem, nestedIndex) => (
                  <Accordion.Item
                    key={nestedIndex}
                    value={nestedItem.text}
                    className="group border-b border-gray-200/30 dark:border-gray-700/30 last:border-b-0"
                  >
                    <Accordion.ItemTrigger className="w-full px-3 py-2 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200">
                      <div className="flex items-center">
                        <nestedItem.icon className="w-3 h-3 text-blue-500 dark:text-blue-400 mr-2" />
                        <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                          {nestedItem.text}
                        </span>
                      </div>
                      <Accordion.ItemIndicator className="ml-2 transition-transform duration-200 data-[state=open]:rotate-180">
                        <ChevronDownIcon className="w-3 h-3 text-gray-500 dark:text-gray-500" />
                      </Accordion.ItemIndicator>
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent className="px-3 pb-2 text-xs text-gray-600 dark:text-gray-400">
                      <div className="pt-1">
                        {nestedItem.text === "Interactive dashboard design" ? (
                          <div>
                            Create intuitive interfaces that allow users to
                            explore data dynamically with filters, drill-downs,
                            and real-time updates.
                          </div>
                        ) : nestedItem.text ===
                          "Statistical chart selection" ? (
                          <div>
                            Choose the right visualization type for your data
                            story, from scatter plots for correlations to heat
                            maps for patterns.
                          </div>
                        ) : nestedItem.text === "Supervised learning basics" ? (
                          <div>
                            Learn classification and regression techniques using
                            labeled training data to make predictions on new,
                            unseen examples.
                          </div>
                        ) : nestedItem.text === "Data preprocessing steps" ? (
                          <div>
                            Clean, transform, and prepare raw data through
                            normalization, feature engineering, and handling
                            missing values.
                          </div>
                        ) : nestedItem.text ===
                          "Green building certification programs" ? (
                          <div>
                            LEED and BREEAM standards guide sustainable
                            construction with energy efficiency and
                            environmental responsibility.
                          </div>
                        ) : nestedItem.text ===
                          "Community engagement strategies" ? (
                          <div>
                            Build consensus through town halls, surveys, and
                            collaborative design workshops that empower
                            residents.
                          </div>
                        ) : nestedItem.text === "Cognitive bias patterns" ? (
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
