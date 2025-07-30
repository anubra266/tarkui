import { Accordion } from "@ark-ui/react/accordion";
import { ChevronRightIcon } from "lucide-react";

export default function TableWithLeftChevronAccordion() {
  const items = [
    {
      id: "music-production",
      title: "Explore modern music production",
      content:
        "Create professional-quality tracks using digital audio workstations, synthesizers, and mixing techniques that bring your musical ideas to life.",
    },
    {
      id: "visual-graphics",
      title: "Design stunning visual graphics",
      content:
        "Master color theory, typography, and composition principles to create compelling visuals that communicate effectively and inspire audiences.",
    },
    {
      id: "financial-planning",
      title: "Master financial planning basics",
      content:
        "Build a secure financial future through budgeting, investing, and strategic planning that grows your wealth and protects your assets.",
    },
    {
      id: "foreign-language",
      title: "Learn foreign language fluency",
      content:
        "Achieve conversational fluency through immersive practice, cultural understanding, and proven language learning techniques that stick.",
    },
  ];

  return (
    <Accordion.Root
      defaultValue={["financial-planning"]}
      collapsible
      className="w-full max-w-md mx-auto border border-gray-300/50 dark:border-gray-700/50 rounded-lg overflow-hidden bg-linear-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-xs"
    >
      {items.map((item) => (
        <Accordion.Item key={item.id} value={item.id} className="group">
          <Accordion.ItemTrigger className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-linear-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200 border-b border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center">
              <Accordion.ItemIndicator className="mr-2 transition-transform duration-200 data-[state=open]:rotate-90">
                <ChevronRightIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </Accordion.ItemIndicator>
              <span className="font-medium text-gray-900 dark:text-white text-sm">
                {item.title}
              </span>
            </div>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-linear-to-r from-transparent via-gray-50/30 dark:via-gray-800/30 to-transparent border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0">
            <div className="pl-6">{item.content}</div>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
