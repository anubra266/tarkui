"use client";

import { FloatingPanel } from "@ark-ui/react/floating-panel";
import { Portal } from "@ark-ui/react/portal";
import { Settings, X, Maximize2, Minus, ArrowDownLeft } from "lucide-react";
import { useState } from "react";

export default function SettingsPanel() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: "en",
    autoSave: true,
    showTips: true,
    soundEnabled: false,
  });

  const updateSetting = (key: string, value: boolean | string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <FloatingPanel.Root defaultSize={{ width: 360, height: 510 }}>
      <FloatingPanel.Trigger className="px-3 py-2 bg-gray-600 text-white text-sm font-medium rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 flex items-center gap-2">
        <Settings className="w-4 h-4" />
        Open Settings
      </FloatingPanel.Trigger>

      <Portal>
        <FloatingPanel.Positioner className="z-50">
          <FloatingPanel.Content className="flex flex-col bg-white dark:bg-gray-900 rounded-lg data-[maximized]:rounded-none border border-gray-200 dark:border-gray-700 w-full shadow-md">
            <FloatingPanel.DragTrigger>
              <FloatingPanel.Header className="py-2 px-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center cursor-move">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  <FloatingPanel.Title className="font-medium text-gray-900 dark:text-gray-100">
                    Settings
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
              <div className="space-y-6">
                {/* General Settings */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
                    General
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-700 dark:text-gray-300">
                        Enable notifications
                      </label>
                      <button
                        onClick={() =>
                          updateSetting(
                            "notifications",
                            !settings.notifications
                          )
                        }
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                          settings.notifications
                            ? "bg-blue-600"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      >
                        <span
                          className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                            settings.notifications
                              ? "translate-x-5"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-700 dark:text-gray-300">
                        Dark mode
                      </label>
                      <button
                        onClick={() =>
                          updateSetting("darkMode", !settings.darkMode)
                        }
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                          settings.darkMode
                            ? "bg-blue-600"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      >
                        <span
                          className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                            settings.darkMode
                              ? "translate-x-5"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-700 dark:text-gray-300">
                        Auto-save
                      </label>
                      <button
                        onClick={() =>
                          updateSetting("autoSave", !settings.autoSave)
                        }
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                          settings.autoSave
                            ? "bg-blue-600"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      >
                        <span
                          className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                            settings.autoSave
                              ? "translate-x-5"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Language Settings */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
                    Language
                  </h3>
                  <select
                    value={settings.language}
                    onChange={(e) => updateSetting("language", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                    <option value="zh">中文</option>
                  </select>
                </div>

                {/* Audio Settings */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
                    Audio
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-700 dark:text-gray-300">
                        Sound effects
                      </label>
                      <button
                        onClick={() =>
                          updateSetting("soundEnabled", !settings.soundEnabled)
                        }
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                          settings.soundEnabled
                            ? "bg-blue-600"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      >
                        <span
                          className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                            settings.soundEnabled
                              ? "translate-x-5"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Help Settings */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
                    Help & Tips
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-700 dark:text-gray-300">
                        Show helpful tips
                      </label>
                      <button
                        onClick={() =>
                          updateSetting("showTips", !settings.showTips)
                        }
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                          settings.showTips
                            ? "bg-blue-600"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      >
                        <span
                          className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                            settings.showTips
                              ? "translate-x-5"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Save Changes
                  </button>
                  <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                    Reset
                  </button>
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
