<script setup>
import { Editable } from "@ark-ui/vue/editable";
import { Check, Circle, Trash2, Calendar } from "lucide-vue-next";
import { reactive } from "vue";

const state = reactive({
  tasks: [
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
  ],
});

const toggleTask = (id) => {
  const task = state.tasks.find((t) => t.id === id);
  if (task) task.completed = !task.completed;
};

const updateTask = (id, newText) => {
  const task = state.tasks.find((t) => t.id === id);
  if (task) task.text = newText;
};

const deleteTask = (id) => {
  const index = state.tasks.findIndex((t) => t.id === id);
  if (index !== -1) state.tasks.splice(index, 1);
};

const getPriorityColor = (priority) => {
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
</script>

<template>
  <div class="w-full max-w-lg space-y-4">
    <div
      class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-4"
    >
      <div class="flex items-center space-x-2 mb-4">
        <Calendar class="h-5 w-5 text-gray-500 dark:text-gray-400" />
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Today's Tasks
        </h3>
      </div>

      <div class="space-y-3">
        <div
          v-for="task in state.tasks"
          :key="task.id"
          class="group flex items-center space-x-3 p-3 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
        >
          <button
            @click="toggleTask(task.id)"
            :class="`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
              task.completed
                ? 'bg-green-500 border-green-500 text-white'
                : 'border-gray-300 dark:border-gray-600 hover:border-green-400 dark:hover:border-green-500'
            }`"
          >
            <Check v-if="task.completed" class="h-3 w-3" />
            <Circle v-else class="h-3 w-3 opacity-0" />
          </button>

          <div class="flex-1 min-w-0">
            <Editable.Root
              :value="task.text"
              @value-commit="(details) => updateTask(task.id, details.value)"
              submit-mode="blur"
              activation-mode="dblclick"
            >
              <Editable.Area>
                <Editable.Input
                  class="w-full px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 min-h-8"
                />
                <Editable.Preview
                  :class="`w-full px-2 py-1 text-sm rounded hover:bg-gray-50 dark:hover:bg-gray-800 cursor-text transition-colors min-h-8 ${
                    task.completed
                      ? 'text-gray-500 dark:text-gray-400 line-through'
                      : 'text-gray-900 dark:text-white'
                  }`"
                />
              </Editable.Area>
            </Editable.Root>
          </div>

          <span
            :class="`shrink-0 px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(
              task.priority
            )}`"
          >
            {{ task.priority }}
          </span>

          <button
            @click="deleteTask(task.id)"
            class="shrink-0 opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all"
          >
            <Trash2 class="h-4 w-4" />
          </button>
        </div>
      </div>

      <div class="mt-4 text-xs text-gray-500 dark:text-gray-400">
        💡 Double-click any task to edit • Click the circle to mark as complete
      </div>
    </div>
  </div>
</template>
