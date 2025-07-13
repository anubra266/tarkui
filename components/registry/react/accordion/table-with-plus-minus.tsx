import { Accordion } from "@ark-ui/react/accordion";
import { Plus, Minus } from "lucide-react";

export default function TableWithPlusMinusAccordion() {
  const items = [
    "Explore modern music production",
    "Design stunning visual graphics",
    "Master financial planning basics",
    "Learn foreign language fluency",
  ];

  return (
    <Accordion.Root
      defaultValue={["Master financial planning basics"]}
      collapsible
      className="w-full max-w-md mx-auto border border-gray-300/50 dark:border-gray-700/50 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm"
    >
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item} className="group">
          <Accordion.ItemTrigger className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200 border-b border-gray-200/50 dark:border-gray-700/50">
            <span className="font-medium text-gray-900 dark:text-white text-sm">
              {item}
            </span>
            <Accordion.ItemIndicator className="ml-2 transition-all duration-200 group">
              <Plus className="w-4 h-4 text-gray-600 dark:text-gray-400 group-data-[state=open]:hidden" />
              <Minus className="w-4 h-4 text-gray-600 dark:text-gray-400 group-data-[state=closed]:hidden" />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-gradient-to-r from-transparent via-gray-50/30 dark:via-gray-800/30 to-transparent border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0">
            {item === "Explore modern music production" ? (
              <div>
                Create professional-quality tracks using digital audio
                workstations, synthesizers, and mixing techniques that bring
                your musical ideas to life.
              </div>
            ) : item === "Design stunning visual graphics" ? (
              <div>
                Master color theory, typography, and composition principles to
                create compelling visuals that communicate effectively and
                inspire audiences.
              </div>
            ) : item === "Master financial planning basics" ? (
              <div>
                Build a secure financial future through budgeting, investing,
                and strategic planning that grows your wealth and protects your
                assets.
              </div>
            ) : (
              <div>
                Achieve conversational fluency through immersive practice,
                cultural understanding, and proven language learning techniques
                that stick.
              </div>
            )}
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
