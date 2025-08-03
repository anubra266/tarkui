"use client";

import { Popover } from "@ark-ui/react/popover";
import { Portal } from "@ark-ui/react/portal";
import { User, Settings, LogOut, Mail, Phone, MapPin } from "lucide-react";

export default function PopoverUserProfile() {
  const user = {
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    role: "Product Designer",
    location: "San Francisco, CA",
    phone: "+1 (555) 123-4567",
    status: "online",
    avatar: "https://i.pravatar.cc/40?img=10",
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Popover.Root modal>
      <Popover.Trigger className="relative inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-1 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        <img
          src={user.avatar}
          alt={user.name}
          className="h-8 w-8 rounded-full object-cover"
        />
        <div
          className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white dark:border-gray-800 ${
            user.status === "online"
              ? "bg-green-400"
              : user.status === "away"
              ? "bg-yellow-400"
              : "bg-gray-400"
          }`}
        />
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content className="z-50 w-72 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out">
            <Popover.Arrow className="[--arrow-size:12px] [--arrow-background:var(--color-white)] dark:[--arrow-background:var(--color-gray-800)]">
              <Popover.ArrowTip className="border-t border-l border-gray-200 dark:border-gray-700" />
            </Popover.Arrow>
            {/* Header */}
            <div className="border-b border-gray-200 dark:border-gray-700 p-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div
                    className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white dark:border-gray-800 ${
                      user.status === "online"
                        ? "bg-green-400"
                        : user.status === "away"
                        ? "bg-yellow-400"
                        : "bg-gray-400"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {user.role}
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 capitalize">
                    {user.status}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="border-b border-gray-200 dark:border-gray-700 p-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>{user.location}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-2">
              <div className="space-y-1">
                <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <User className="h-4 w-4" />
                  View Profile
                </button>
                <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <Settings className="h-4 w-4" />
                  Account Settings
                </button>
                <hr className="my-1 border-gray-200 dark:border-gray-700" />
                <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 focus:outline-none focus:ring-2 focus:ring-red-500">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              </div>
            </div>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
