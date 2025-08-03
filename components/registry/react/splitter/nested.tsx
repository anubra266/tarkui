"use client";

import { Splitter } from "@ark-ui/react/splitter";

export default function NestedSplitter() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <div className="w-full h-64">
        <Splitter.Root
          orientation="horizontal"
          defaultSize={[20, 60, 20]}
          panels={[
            { id: "a", minSize: 20 },
            { id: "b", collapsible: true },
            { id: "c", minSize: 20 },
          ]}
          className="flex gap-2 h-full"
        >
          <Splitter.Panel
            id="a"
            className="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-lg text-gray-600 dark:text-gray-400 flex items-center justify-center text-sm"
          >
            Left
          </Splitter.Panel>
          <Splitter.ResizeTrigger
            id="a:b"
            aria-label="Resize"
            className="rounded-full transition-colors duration-200 outline-none bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 active:bg-gray-400 dark:active:bg-gray-500 min-w-1.5 my-4"
          />
          <Splitter.Panel
            id="b"
            className="bg-gray-50 dark:bg-gray-900 rounded-lg"
          >
            <Splitter.Root
              orientation="vertical"
              panels={[{ id: "b1" }, { id: "b2", collapsible: true }]}
              className="flex flex-col gap-2 h-full"
            >
              <Splitter.Panel
                id="b1"
                className="bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-700 dark:text-blue-300 flex items-center justify-center text-sm"
              >
                Top
              </Splitter.Panel>
              <Splitter.ResizeTrigger
                id="b1:b2"
                aria-label="Resize"
                className="rounded-full transition-colors duration-200 outline-none bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 active:bg-gray-400 dark:active:bg-gray-500 min-h-1.5 mx-4"
              />
              <Splitter.Panel
                id="b2"
                className="bg-green-50 dark:bg-green-900/20 rounded-lg"
              >
                <Splitter.Root
                  orientation="horizontal"
                  panels={[{ id: "b21" }, { id: "b22", collapsible: true }]}
                  className="flex gap-2 h-full"
                >
                  <Splitter.Panel
                    id="b21"
                    className="bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-700 dark:text-purple-300 flex items-center justify-center text-sm"
                  >
                    Left
                  </Splitter.Panel>
                  <Splitter.ResizeTrigger
                    id="b21:b22"
                    aria-label="Resize"
                    className="rounded-full transition-colors duration-200 outline-none bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 active:bg-gray-400 dark:active:bg-gray-500 min-w-1.5 my-4"
                  />
                  <Splitter.Panel
                    id="b22"
                    className="bg-orange-50 dark:bg-orange-900/20 rounded-lg text-orange-700 dark:text-orange-300 flex items-center justify-center text-sm"
                  >
                    Right
                  </Splitter.Panel>
                </Splitter.Root>
              </Splitter.Panel>
            </Splitter.Root>
          </Splitter.Panel>
          <Splitter.ResizeTrigger
            id="b:c"
            aria-label="Resize"
            className="rounded-full transition-colors duration-200 outline-none bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 active:bg-gray-400 dark:active:bg-gray-500 min-w-1.5 my-4"
          />
          <Splitter.Panel
            id="c"
            className="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-lg text-gray-600 dark:text-gray-400 flex items-center justify-center text-sm"
          >
            Right
          </Splitter.Panel>
        </Splitter.Root>
      </div>
    </div>
  );
}
