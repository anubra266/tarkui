"use client";

import { Editable } from "@ark-ui/solid/editable";
import { Check, Edit, Trash2 } from "lucide-solid";
import { createSignal, For } from "solid-js";

export default function TaskItem() {
  const [tasks, setTasks] = createSignal([
    {
      id: 1,
      text: "Review Q3 marketing campaign",
      completed: false,
      priority: "high",
    },
    {
      id: 2,
      text: "Update project documentation",
      completed: true,
      priority: "medium",
    },
    {
      id: 3,
      text: "Schedule team sync meeting",
      completed: false,
      priority: "low",
    },
  ]);

  const toggleTask = (id: number) => {
    setTasks(
      tasks().map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTask = (id: number, newText: string) => {
    setTasks(
      tasks().map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks().filter((task) => task.id !== id));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400";
    }
  };

  return (
    <div class="w-full max-w-lg space-y-4">
      <div class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
        <div class="flex items-center space-x-2 mb-4">
          <Edit class="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Today's Tasks
          </h3>
        </div>

        <div class="space-y-2">
          <For each={tasks()}>
            {(task) => (
              <div class="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <button
                  onClick={() => toggleTask(task.id)}
                  class={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    task.completed
                      ? "bg-green-500 border-green-500 text-white"
                      : "border-gray-300 dark:border-gray-600 hover:border-green-500"
                  }`}
                >
                  {task.completed && <Check class="w-3 h-3" />}
                </button>
                <Editable.Root
                  value={task.text}
                  onValueChange={(value) => updateTask(task.id, value)}
                  class="flex-1"
                >
                  <Editable.Input class="w-full bg-transparent border-none outline-none text-gray-900 dark:text-gray-100" />
                  <Editable.Preview class="w-full text-gray-900 dark:text-gray-100" />
                </Editable.Root>
                <button
                  onClick={() => deleteTask(task.id)}
                  class="p-1 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 class="w-4 h-4" />
                </button>
              </div>
            )}
          </For>
        </div>

        <div class="mt-4 text-xs text-gray-500 dark:text-gray-400">
          💡 Double-click any task to edit • Click the circle to mark as
          complete
        </div>
      </div>
    </div>
  );
}
