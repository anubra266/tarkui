"use client";

import { Listbox, createListCollection } from "@ark-ui/react/listbox";
import { Check, Globe } from "lucide-react";

export default function Countries() {
  const collection = createListCollection({
    items: [
      { name: "United States", code: "US", flag: "🇺🇸" },
      { name: "United Kingdom", code: "GB", flag: "🇬🇧" },
      { name: "Canada", code: "CA", flag: "🇨🇦" },
      { name: "Germany", code: "DE", flag: "🇩🇪" },
      { name: "France", code: "FR", flag: "🇫🇷" },
      { name: "Japan", code: "JP", flag: "🇯🇵" },
      { name: "Australia", code: "AU", flag: "🇦🇺" },
      { name: "Brazil", code: "BR", flag: "🇧🇷" },
      { name: "India", code: "IN", flag: "🇮🇳" },
      { name: "China", code: "CN", flag: "🇨🇳" },
      { name: "South Korea", code: "KR", flag: "🇰🇷" },
      { name: "Netherlands", code: "NL", flag: "🇳🇱" },
      { name: "Spain", code: "ES", flag: "🇪🇸" },
      { name: "Italy", code: "IT", flag: "🇮🇹" },
      { name: "Mexico", code: "MX", flag: "🇲🇽" },
    ],
    itemToValue: (item) => item.code,
  });

  return (
    <div className="flex items-center justify-center min-h-32">
      <Listbox.Root
        collection={collection}
        className="[--listbox-bg:#ffffff] dark:[--listbox-bg:#111827] [--listbox-border:#e5e7eb] dark:[--listbox-border:#374151]"
      >
        <Listbox.Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
          <Globe className="w-4 h-4" />
          Select your country
        </Listbox.Label>
        <Listbox.Content className="bg-[var(--listbox-bg)] border border-[var(--listbox-border)] rounded-lg px-1 py-2 w-80 shadow-lg max-h-64 overflow-y-auto">
          {collection.items.map((country) => (
            <Listbox.Item
              key={country.code}
              item={country}
              className="flex items-center justify-between px-3 py-2.5 mx-1 rounded-md cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-[highlighted]:bg-gray-100 dark:data-[highlighted]:bg-gray-800 data-[selected]:bg-blue-50 dark:data-[selected]:bg-blue-900/20 data-[selected]:text-blue-700 dark:data-[selected]:text-blue-300 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{country.flag}</span>
                <Listbox.ItemText className="flex-1">
                  <div className="flex flex-col">
                    <span>{country.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">
                      {country.code}
                    </span>
                  </div>
                </Listbox.ItemText>
              </div>
              <Listbox.ItemIndicator>
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </Listbox.ItemIndicator>
            </Listbox.Item>
          ))}
        </Listbox.Content>
      </Listbox.Root>
    </div>
  );
}
