"use client";

import { Popover } from "@ark-ui/react/popover";
import { Portal } from "@ark-ui/react/portal";
import { Bell, Check } from "lucide-react";
import { useState } from "react";

const mockNotifications = [
  {
    id: 1,
    user: "Maya Rodriguez",
    action: "liked your post about",
    target: "Modern design principles in 2024.",
    time: "2 minutes ago",
    avatar: "https://i.pravatar.cc/40?img=12",
    unread: true,
  },
  {
    id: 2,
    user: "David Kim",
    action: "started following you and",
    target: "commented on your portfolio.",
    time: "1 hour ago",
    avatar: "https://i.pravatar.cc/40?img=15",
    unread: true,
  },
  {
    id: 3,
    user: "Lisa Thompson",
    action: "invited you to join",
    target: "Creative Designers Workspace.",
    time: "3 hours ago",
    avatar: "https://i.pravatar.cc/40?img=20",
    unread: false,
  },
  {
    id: 4,
    user: "Marcus Johnson",
    action: "tagged you in a photo from",
    target: "Design Conference 2024.",
    time: "1 day ago",
    avatar: "https://i.pravatar.cc/40?img=25",
    unread: false,
  },
  {
    id: 5,
    user: "Anna Petrov",
    action: "shared your article",
    target: "Building accessible web interfaces.",
    time: "3 days ago",
    avatar: "https://i.pravatar.cc/40?img=30",
    unread: false,
  },
  {
    id: 6,
    user: "Jordan Miller",
    action: "reacted to your story about",
    target: "Remote work productivity tips.",
    time: "1 week ago",
    avatar: "https://i.pravatar.cc/40?img=35",
    unread: false,
  },
];

export default function PopoverNotifications() {
  const [notifications, setNotifications] = useState(mockNotifications);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Popover.Root>
      <Popover.Trigger className="relative inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
            {unreadCount}
          </span>
        )}
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content className="z-50 w-80 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out">
            <Popover.Arrow className="[--arrow-size:12px] [--arrow-background:var(--color-white)] dark:[--arrow-background:var(--color-gray-800)]">
              <Popover.ArrowTip className="border-t border-l border-gray-200 dark:border-gray-700" />
            </Popover.Arrow>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 p-3">
              <Popover.Title className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Notifications
              </Popover.Title>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 focus:outline-none focus:underline"
                >
                  Mark all as read
                </button>
              )}
            </div>

            {/* Notifications List */}
            <div className="max-h-80 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`relative border-b border-gray-100 dark:border-gray-700 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 ${
                    notification.unread
                      ? "bg-blue-50/50 dark:bg-blue-900/10"
                      : ""
                  }`}
                >
                  <div className="flex gap-3">
                    {/* Avatar */}
                    <img
                      src={notification.avatar}
                      alt={notification.user}
                      className="h-8 w-8 shrink-0 rounded-full object-cover"
                    />

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-900 dark:text-gray-100">
                        <span className="font-medium">{notification.user}</span>{" "}
                        {notification.action}{" "}
                        <span className="font-medium">
                          {notification.target}
                        </span>
                      </p>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        {notification.time}
                      </p>
                    </div>

                    {/* Unread indicator */}
                    {notification.unread && (
                      <div className="flex h-2 w-2 shrink-0 items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-3">
              <button className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                View all notifications
              </button>
            </div>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
