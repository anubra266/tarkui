"use client";

import { FloatingPanel } from "@ark-ui/solid/floating-panel";
import {
  CheckCircle,
  Clock,
  User,
  Calendar,
  ArrowDownLeft,
  Maximize2,
  Minus,
  X,
} from "lucide-solid";

export default function TaskInspector() {
  const task = {
    id: "TASK-123",
    title: "Implement user authentication system",
    description:
      "Create a secure authentication system with email/password login, JWT tokens, and role-based access control. Include proper error handling and validation.",
    status: "In Progress",
    priority: "High",
    assignee: "Sarah Johnson",
    dueDate: "2024-01-15",
    createdDate: "2024-01-08",
    completedSubtasks: 3,
    totalSubtasks: 7,
  };

  const comments = [
    {
      id: 1,
      author: "John Doe",
      text: "Started working on the JWT implementation",
      date: "2h ago",
    },
    {
      id: 2,
      author: "Sarah Johnson",
      text: "Updated the database schema for user roles",
      date: "4h ago",
    },
  ];

  return (
    <div class="relative h-96">
      <FloatingPanel.Root
        defaultSize={{ width: 480, height: 600 }}
        minSize={{ width: 400, height: 500 }}
        maxSize={{ width: 600, height: 800 }}
        class="w-full h-full"
      >
        <FloatingPanel.Positioner class="fixed">
          <FloatingPanel.Content class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg data-[stage=maximized]:rounded-none">
            <FloatingPanel.Header class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 rounded-t-lg">
              <div>
                <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Task Inspector
                </h3>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  {task.id}
                </p>
              </div>
              <div class="flex items-center gap-1">
                <FloatingPanel.MinimizeTrigger class="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Minus class="w-3 h-3" />
                </FloatingPanel.MinimizeTrigger>
                <FloatingPanel.MaximizeTrigger class="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Maximize2 class="w-3 h-3" />
                </FloatingPanel.MaximizeTrigger>
                <FloatingPanel.RestoreTrigger class="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <ArrowDownLeft class="w-3 h-3" />
                </FloatingPanel.RestoreTrigger>
                <FloatingPanel.CloseTrigger class="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <X class="w-3 h-3" />
                </FloatingPanel.CloseTrigger>
              </div>
            </FloatingPanel.Header>
            <FloatingPanel.Body class="p-4 space-y-4 overflow-y-auto">
              {/* Title and Status */}
              <div class="space-y-2">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {task.title}
                </h4>
                <div class="flex items-center gap-2">
                  <span class="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs font-medium rounded">
                    {task.status}
                  </span>
                  <span class="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-xs font-medium rounded">
                    {task.priority}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h5 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                  Description
                </h5>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {task.description}
                </p>
              </div>

              {/* Details */}
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-3">
                  <div class="flex items-center gap-2">
                    <User class="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    <div>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        Assignee
                      </p>
                      <p class="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {task.assignee}
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <Calendar class="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    <div>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        Due Date
                      </p>
                      <p class="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {task.dueDate}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="space-y-3">
                  <div class="flex items-center gap-2">
                    <CheckCircle class="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    <div>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        Progress
                      </p>
                      <p class="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {task.completedSubtasks}/{task.totalSubtasks} subtasks
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <Clock class="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    <div>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        Created
                      </p>
                      <p class="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {task.createdDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div class="flex justify-between text-sm mb-2">
                  <span class="text-gray-600 dark:text-gray-400">Progress</span>
                  <span class="text-gray-900 dark:text-gray-100">
                    {Math.round(
                      (task.completedSubtasks / task.totalSubtasks) * 100
                    )}
                    %
                  </span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-blue-500 h-2 rounded-full transition-all"
                    style={{
                      width: `${
                        (task.completedSubtasks / task.totalSubtasks) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>

              {/* Comments */}
              <div>
                <h5 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Recent Comments
                </h5>
                <div class="space-y-3">
                  {comments.map((comment) => (
                    <div
                      key={comment.id}
                      class="border-l-2 border-gray-200 dark:border-gray-700 pl-3"
                    >
                      <div class="flex justify-between items-start mb-1">
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {comment.author}
                        </p>
                        <span class="text-xs text-gray-500 dark:text-gray-400">
                          {comment.date}
                        </span>
                      </div>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        {comment.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FloatingPanel.Body>
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </FloatingPanel.Root>
    </div>
  );
}
