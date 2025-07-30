"use client";

import { Checkbox } from "@ark-ui/react/checkbox";
import { CheckIcon, MinusIcon } from "lucide-react";
import { useState } from "react";

const features = [
  { label: "Dark mode", value: "dark-mode" },
  { label: "Notifications", value: "notifications" },
  { label: "Analytics", value: "analytics" },
];

export default function IndeterminateCheckbox() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "dark-mode",
  ]);

  // Calculate parent state based on selected features
  const getParentState = () => {
    if (selectedFeatures.length === 0) return false;
    if (selectedFeatures.length === features.length) return true;
    return "indeterminate";
  };

  const handleParentChange = (checked: boolean) => {
    if (checked) {
      // Select all features
      setSelectedFeatures(features.map((f) => f.value));
    } else {
      // Deselect all features
      setSelectedFeatures([]);
    }
  };

  const parentState = getParentState();

  return (
    <div className="space-y-4">
      <Checkbox.Root
        checked={parentState}
        onCheckedChange={(details) =>
          handleParentChange(details.checked === true)
        }
        className="flex items-center gap-3 cursor-pointer"
      >
        <Checkbox.Control className="w-5 h-5 bg-white border-2 border-gray-300 rounded data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-[state=indeterminate]:bg-gray-100 data-[state=indeterminate]:border-gray-400 data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-[state=indeterminate]:bg-gray-700 dark:data-[state=indeterminate]:border-gray-500 dark:data-hover:border-gray-400 transition-all duration-200 flex items-center justify-center">
          <Checkbox.Indicator>
            <CheckIcon className="w-3.5 h-3.5 text-white" />
          </Checkbox.Indicator>
          <Checkbox.Indicator indeterminate>
            <MinusIcon className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.Label className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer">
          Select all features
        </Checkbox.Label>
        <Checkbox.HiddenInput />
      </Checkbox.Root>

      <div className="ml-6">
        <Checkbox.Group
          value={selectedFeatures}
          onValueChange={(values) => setSelectedFeatures(values)}
          className="space-y-3"
        >
          {features.map((feature) => (
            <Checkbox.Root
              key={feature.value}
              value={feature.value}
              className="flex items-center gap-3 cursor-pointer"
            >
              <Checkbox.Control className="w-5 h-5 bg-white border-2 border-gray-300 rounded data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-hover:border-gray-400 transition-all duration-200 flex items-center justify-center">
                <Checkbox.Indicator>
                  <CheckIcon className="w-3.5 h-3.5 text-white" />
                </Checkbox.Indicator>
              </Checkbox.Control>
              <Checkbox.Label className="text-sm text-gray-700 dark:text-gray-200 cursor-pointer">
                {feature.label}
              </Checkbox.Label>
              <Checkbox.HiddenInput />
            </Checkbox.Root>
          ))}
        </Checkbox.Group>
      </div>
    </div>
  );
}
