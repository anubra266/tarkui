"use client";

import { Splitter } from "@ark-ui/react/splitter";

export default function BasicSplitter() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <div className="w-full h-64">
        <Splitter.Root
          panels={[{ id: "a" }, { id: "b" }]}
          className="flex gap-2 h-full"
        >
          <Splitter.Panel
            id="a"
            className="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-lg text-gray-600 dark:text-gray-400 flex items-center justify-center"
          >
            Panel A
          </Splitter.Panel>
          <Splitter.ResizeTrigger
            id="a:b"
            aria-label="Resize"
            className="rounded-full transition-colors duration-200 outline-none bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 active:bg-gray-400 dark:active:bg-gray-500 min-w-1.5 my-4"
          />
          <Splitter.Panel
            id="b"
            className="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-lg text-gray-600 dark:text-gray-400 flex items-center justify-center"
          >
            Panel B
          </Splitter.Panel>
        </Splitter.Root>
      </div>
    </div>
  );
}
