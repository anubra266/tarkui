"use client";

import { FloatingPanel } from "@ark-ui/react/floating-panel";
import { Portal } from "@ark-ui/react/portal";
import {
  Eye,
  X,
  Clock,
  User,
  Tag,
  ArrowDownLeft,
  Maximize2,
  Minus,
} from "lucide-react";

export default function TaskInspector() {
  const task = {
    id: "TASK-123",
    title: "Implement user authentication",
    description:
      "Add login and registration functionality with email verification and password reset capabilities.",
    status: "In Progress",
    priority: "High",
    assignee: "Sarah Chen",
    dueDate: "March 15, 2024",
    timeLogged: "3h 45m",
    labels: ["frontend", "security", "authentication"],
    comments: [
      {
        author: "Mike Johnson",
        time: "2 hours ago",
        text: "Working on the password validation logic",
      },
      {
        author: "Sarah Chen",
        time: "1 hour ago",
        text: "Email verification is complete, moving to password reset",
      },
    ],
  };

  return (
    <FloatingPanel.Root defaultSize={{ width: 400, height: 670 }}>
      <FloatingPanel.Trigger className="px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center gap-2">
        <Eye className="w-4 h-4" />
        Inspect Task
      </FloatingPanel.Trigger>

      <Portal>
        <FloatingPanel.Positioner className="z-50">
          <FloatingPanel.Content className="flex flex-col bg-white dark:bg-gray-900 rounded-lg data-[maximized]:rounded-none border border-gray-200 dark:border-gray-700 w-full shadow-md">
            <FloatingPanel.DragTrigger>
              <FloatingPanel.Header className="py-2 px-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center cursor-move">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-green-600" />
                  <FloatingPanel.Title className="font-medium text-gray-900 dark:text-gray-100">
                    Task Inspector
                  </FloatingPanel.Title>
                </div>
                <FloatingPanel.Control className="flex items-center gap-1">
                  <FloatingPanel.StageTrigger
                    stage="minimized"
                    className="w-6 h-6 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger
                    stage="maximized"
                    className="w-6 h-6 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                  >
                    <Maximize2 className="w-3 h-3" />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger
                    stage="default"
                    className="w-6 h-6 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                  >
                    <ArrowDownLeft className="w-3 h-3" />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.CloseTrigger className="w-6 h-6 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors">
                    <X className="w-3 h-3" />
                  </FloatingPanel.CloseTrigger>
                </FloatingPanel.Control>
              </FloatingPanel.Header>
            </FloatingPanel.DragTrigger>

            <FloatingPanel.Body className="flex flex-col gap-4 p-4 overflow-y-auto">
              {/* Task Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {task.title}
                  </h3>
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-medium rounded">
                    {task.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {task.id}
                </p>
              </div>

              {/* Task Details */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                    Description
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {task.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 flex items-center gap-1">
                      <User />
                      Assignee
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {task.assignee}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 flex items-center gap-1">
                      <Clock />
                      Due Date
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {task.dueDate}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                      Priority
                    </h4>
                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs font-medium rounded">
                      {task.priority}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                      Time Logged
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {task.timeLogged}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-1">
                    <Tag />
                    Labels
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {task.labels.map((label) => (
                      <span
                        key={label}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Comments */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Recent Comments
                </h4>
                <div className="space-y-3">
                  {task.comments.map((comment, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-3"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {comment.author}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {comment.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {comment.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FloatingPanel.Body>

            {/* Resize handles */}
            <FloatingPanel.ResizeTrigger axis="n" />
            <FloatingPanel.ResizeTrigger axis="e" />
            <FloatingPanel.ResizeTrigger axis="w" />
            <FloatingPanel.ResizeTrigger axis="s" />
            <FloatingPanel.ResizeTrigger axis="ne" />
            <FloatingPanel.ResizeTrigger axis="se" />
            <FloatingPanel.ResizeTrigger axis="sw" />
            <FloatingPanel.ResizeTrigger axis="nw" />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  );
}
