"use client";

import { Menu } from "@ark-ui/react/menu";
import {
  ChevronDown,
  ChevronRight,
  FileText,
  FolderOpen,
  Settings,
  User,
  Bell,
  Shield,
} from "lucide-react";
import { Portal } from "@ark-ui/react/portal";

export default function Nested() {
  return (
    <div className="flex items-center justify-center min-h-32">
      <Menu.Root>
        <Menu.Trigger className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg data-highlighted:bg-gray-50 dark:data-highlighted:bg-gray-800 focus:outline-hidden focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2">
          File
          <ChevronDown className="w-4 h-4" />
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content className="z-50 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-1 min-w-48 focus-visible:outline-hidden">
              <Menu.Item
                value="new"
                className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                New File
              </Menu.Item>
              <Menu.Item
                value="open"
                className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                <FolderOpen className="w-4 h-4" />
                Open
              </Menu.Item>
              <Menu.Root>
                <Menu.TriggerItem className="flex items-center justify-between gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Settings className="w-4 h-4" />
                    Preferences
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </Menu.TriggerItem>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content className="z-50 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-1 min-w-44 focus-visible:outline-hidden">
                      <Menu.Item
                        value="account"
                        className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
                      >
                        <User className="w-4 h-4" />
                        Account
                      </Menu.Item>
                      <Menu.Item
                        value="notifications"
                        className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
                      >
                        <Bell className="w-4 h-4" />
                        Notifications
                      </Menu.Item>
                      <Menu.Item
                        value="privacy"
                        className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
                      >
                        <Shield className="w-4 h-4" />
                        Privacy
                      </Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </div>
  );
}
