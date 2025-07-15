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
    {
      id: "data-visualization",
      title: "Advanced data visualization techniques",
      icon: Sparkles,
      items: [
        {
          id: "dashboard-design",
          title: "Interactive dashboard design",
          content:
            "Create intuitive interfaces that allow users to explore data dynamically with filters, drill-downs, and real-time updates.",
          icon: BarChart3,
        },
        {
          id: "chart-selection",
          title: "Statistical chart selection",
          content:
            "Choose the right visualization type for your data story, from scatter plots for correlations to heat maps for patterns.",
          icon: Code,
        },
      ],
    },
    {
      id: "machine-learning",
      title: "Machine learning for beginners",
      icon: Settings,
      items: [
        {
          id: "supervised-learning",
          title: "Supervised learning basics",
          content:
            "Learn classification and regression techniques using labeled training data to make predictions on new, unseen examples.",
          icon: BarChart3,
        },
        {
          id: "data-preprocessing",
          title: "Data preprocessing steps",
          content:
            "Clean, transform, and prepare raw data through normalization, feature engineering, and handling missing values.",
          icon: Code,
        },
      ],
    },
    {
      id: "urban-planning",
      title: "Sustainable urban planning methods",
      icon: Zap,
      items: [
        {
          id: "green-building",
          title: "Green building certification programs",
          content:
            "LEED and BREEAM standards guide sustainable construction with energy efficiency and environmental responsibility.",
          icon: BarChart3,
        },
        {
          id: "community-engagement",
          title: "Community engagement strategies",
          content:
            "Build consensus through town halls, surveys, and collaborative design workshops that empower residents.",
          icon: Code,
        },
      ],
    },
    {
      id: "human-behavior",
      title: "Psychology of human behavior",
      icon: HelpCircle,
      items: [
        {
          id: "cognitive-bias",
          title: "Cognitive bias patterns",
          content:
            "Recognize common mental shortcuts like confirmation bias, anchoring, and availability heuristic that influence judgments.",
          icon: BarChart3,
        },
        {
          id: "social-influence",
          title: "Social influence mechanisms",
          content:
            "Explore how social proof, authority, and reciprocity shape behavior through psychological principles of persuasion.",
          icon: Code,
        },
      ],
    },
  ];

  return (
    <Accordion.Root
      defaultValue={["urban-planning"]}
      collapsible
      className="w-full max-w-md mx-auto bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm"
    >
      {items.map((item) => (
        <Accordion.Item
          key={item.id}
          value={item.id}
          className="group border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0"
        >
          <Accordion.ItemTrigger className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200">
            <div className="flex items-center">
              <item.icon className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-3" />
              <span className="font-medium text-gray-900 dark:text-white text-sm">
                {item.title}
              </span>
            </div>
            <Accordion.ItemIndicator className="ml-2 transition-transform duration-200 data-[state=open]:rotate-180">
              <ChevronDownIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed pl-3 pr-1.5">
            {/* Nested accordion */}
            {item.items && (
              <Accordion.Root
                collapsible
                className="border-l-2 border-blue-500/20 ml-2"
              >
                {item.items.map((nestedItem) => (
                  <Accordion.Item
                    key={nestedItem.id}
                    value={nestedItem.id}
                    className="group border-b border-gray-200/30 dark:border-gray-700/30 last:border-b-0"
                  >
                    <Accordion.ItemTrigger className="w-full px-3 py-2 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200">
                      <div className="flex items-center">
                        <nestedItem.icon className="w-3 h-3 text-blue-500 dark:text-blue-400 mr-2" />
                        <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                          {nestedItem.title}
                        </span>
                      </div>
                      <Accordion.ItemIndicator className="ml-2 transition-transform duration-200 data-[state=open]:rotate-180">
                        <ChevronDownIcon className="w-3 h-3 text-gray-500 dark:text-gray-500" />
                      </Accordion.ItemIndicator>
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent className="px-3 pb-2 text-xs text-gray-600 dark:text-gray-400">
                      <div className="pt-1">{nestedItem.content}</div>
                    </Accordion.ItemContent>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            )}
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
