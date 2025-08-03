"use client";

import { Portal } from "@ark-ui/react/portal";
import { Select, createListCollection } from "@ark-ui/react/select";
import { ChevronDownIcon } from "lucide-react";

interface Language {
  label: string;
  value: string;
  code: string;
}

export default function LanguageSelector() {
  const languages: Language[] = [
    { label: "English", value: "en", code: "EN" },
    { label: "Spanish", value: "es", code: "ES" },
    { label: "French", value: "fr", code: "FR" },
    { label: "German", value: "de", code: "DE" },
    { label: "Italian", value: "it", code: "IT" },
    { label: "Portuguese", value: "pt", code: "PT" },
    { label: "Russian", value: "ru", code: "RU" },
    { label: "Japanese", value: "ja", code: "JA" },
    { label: "Chinese", value: "zh", code: "ZH" },
    { label: "Korean", value: "ko", code: "KO" },
  ];

  const collection = createListCollection<Language>({ items: languages });

  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <div className="max-w-sm w-full">
        <Select.Root collection={collection}>
          <Select.Label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            Language
          </Select.Label>
          <Select.Control>
            <Select.Trigger className="flex h-10 w-full items-center justify-between rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100">
              <Select.ValueText placeholder="Select a language" />
              <Select.Indicator>
                <ChevronDownIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </Select.Indicator>
            </Select.Trigger>
            <Select.ClearTrigger className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 mt-1">
              Clear
            </Select.ClearTrigger>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content className="z-50 min-w-(--reference-width) rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg max-h-60 overflow-auto">
                <Select.ItemGroup>
                  <Select.ItemGroupLabel className="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Languages
                  </Select.ItemGroupLabel>
                  {collection.items.map((language) => (
                    <Select.Item
                      key={language.value}
                      item={language}
                      className="relative flex cursor-pointer select-none items-center px-3 py-2 text-sm text-gray-900 dark:text-gray-100 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-700 data-[state=checked]:bg-gray-50 dark:data-[state=checked]:bg-gray-700"
                    >
                      <Select.ItemText>{language.label}</Select.ItemText>
                      <span className="ml-auto mr-8 text-xs font-medium text-gray-500 dark:text-gray-400">
                        {language.code}
                      </span>
                      <Select.ItemIndicator className="absolute right-3 text-blue-600 dark:text-blue-400">
                        ✓
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.ItemGroup>
              </Select.Content>
            </Select.Positioner>
          </Portal>
          <Select.HiddenSelect />
        </Select.Root>
      </div>
    </div>
  );
}
