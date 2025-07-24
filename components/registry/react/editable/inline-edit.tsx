"use client";

import { Editable } from "@ark-ui/react/editable";
import { Building2, MapPin, Phone, Mail, Edit3 } from "lucide-react";

export default function InlineEdit() {
  return (
    <div className="w-full max-w-md space-y-6">
      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
            <Building2 className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Company Profile
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Click any field to edit
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Company Name */}
          <div className="group">
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
              Company Name
            </label>
            <Editable.Root
              defaultValue="Acme Corporation"
              placeholder="Enter company name..."
              activationMode="click"
            >
              <Editable.Area className="relative">
                <Editable.Input className="w-full px-3 py-2 text-lg font-semibold border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors min-h-[2.5rem]" />
                <Editable.Preview className="w-full px-3 py-2 text-lg font-semibold rounded-md text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 cursor-text transition-colors group-hover:ring-1 group-hover:ring-gray-200 dark:group-hover:ring-gray-700 min-h-[2.5rem]" />
                <Edit3 className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Editable.Area>
            </Editable.Root>
          </div>

          {/* Address */}
          <div className="group">
            <label className="flex items-center space-x-1 text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
              <MapPin className="h-3 w-3" />
              <span>Address</span>
            </label>
            <Editable.Root
              defaultValue="123 Business Avenue, Suite 100, San Francisco, CA 94105"
              placeholder="Enter address..."
              activationMode="click"
              autoResize
            >
              <Editable.Area className="relative">
                <Editable.Input className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors resize-none min-h-[2.5rem]" />
                <Editable.Preview className="w-full px-3 py-2 text-sm rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-text transition-colors group-hover:ring-1 group-hover:ring-gray-200 dark:group-hover:ring-gray-700 min-h-[2.5rem] whitespace-pre-wrap" />
                <Edit3 className="absolute right-2 top-2 h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Editable.Area>
            </Editable.Root>
          </div>

          {/* Phone */}
          <div className="group">
            <label className="flex items-center space-x-1 text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
              <Phone className="h-3 w-3" />
              <span>Phone</span>
            </label>
            <Editable.Root
              defaultValue="+1 (555) 123-4567"
              placeholder="Enter phone number..."
              activationMode="click"
            >
              <Editable.Area className="relative">
                <Editable.Input className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors min-h-[2.5rem]" />
                <Editable.Preview className="w-full px-3 py-2 text-sm rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-text transition-colors group-hover:ring-1 group-hover:ring-gray-200 dark:group-hover:ring-gray-700 min-h-[2.5rem]" />
                <Edit3 className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Editable.Area>
            </Editable.Root>
          </div>

          {/* Email */}
          <div className="group">
            <label className="flex items-center space-x-1 text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
              <Mail className="h-3 w-3" />
              <span>Email</span>
            </label>
            <Editable.Root
              defaultValue="contact@acmecorp.com"
              placeholder="Enter email address..."
              activationMode="click"
            >
              <Editable.Area className="relative">
                <Editable.Input className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors min-h-[2.5rem]" />
                <Editable.Preview className="w-full px-3 py-2 text-sm rounded-md text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-text transition-colors group-hover:ring-1 group-hover:ring-gray-200 dark:group-hover:ring-gray-700 min-h-[2.5rem]" />
                <Edit3 className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Editable.Area>
            </Editable.Root>
          </div>
        </div>

        <div className="mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-xs text-blue-700 dark:text-blue-300">
            💡 Hover over any field to see the edit indicator, then click to
            edit inline
          </p>
        </div>
      </div>
    </div>
  );
}
