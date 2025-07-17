"use client";
import { Checkbox } from "@ark-ui/react/checkbox";
import { CheckIcon } from "lucide-react";
import { useState } from "react";

export default function SimpleTodoCheckbox() {
  const [completed, setCompleted] = useState(true);

  return (
    <div className="max-w-md">
      <Checkbox.Root
        checked={completed}
        onCheckedChange={(details) => setCompleted(details.checked === true)}
        className="flex items-center gap-3 cursor-pointer"
      >
        <Checkbox.Control className="w-5 h-5 bg-white border-2 border-gray-300 rounded data-[state=checked]:bg-slate-700 data-[state=checked]:border-slate-700 data-[hover]:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-slate-400 dark:data-[state=checked]:border-slate-400 dark:data-[hover]:border-gray-400 transition-all duration-200 flex items-center justify-center">
          <Checkbox.Indicator>
            <CheckIcon className="w-3.5 h-3.5 text-white dark:text-slate-800" />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.Label
          className={`text-base cursor-pointer transition-all duration-200 ${
            completed
              ? "text-gray-500 line-through dark:text-gray-400"
              : "text-gray-900 dark:text-gray-100"
          }`}
        >
          Simple todo item
        </Checkbox.Label>
        <Checkbox.HiddenInput />
      </Checkbox.Root>
    </div>
  );
}
