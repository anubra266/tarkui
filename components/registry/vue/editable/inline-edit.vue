<script setup>
import { Editable } from "@ark-ui/vue/editable";
import { Building2, MapPin, Phone, Mail, Edit3 } from "lucide-vue-next";
</script>

<template>
  <div class="w-full max-w-md space-y-6">
    <div
      class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6"
    >
      <div class="flex items-center space-x-3 mb-6">
        <div
          class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white"
        >
          <Building2 class="h-6 w-6" />
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Company Profile
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Click any field to edit
          </p>
        </div>
      </div>

      <div class="space-y-4">
        <!-- Company Name -->
        <div class="group">
          <label
            class="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide"
          >
            Company Name
          </label>
          <Editable.Root
            value="Acme Corporation"
            placeholder="Enter company name..."
            activation-mode="click"
          >
            <Editable.Area class="relative">
              <Editable.Input
                class="w-full px-3 py-2 text-lg font-semibold border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors min-h-[2.5rem]"
              />
              <Editable.Preview
                class="w-full px-3 py-2 text-lg font-semibold rounded-md text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 cursor-text transition-colors group-hover:ring-1 group-hover:ring-gray-200 dark:group-hover:ring-gray-700 min-h-[2.5rem]"
              />
              <Edit3
                class="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              />
            </Editable.Area>
          </Editable.Root>
        </div>

        <!-- Address -->
        <div class="group">
          <label
            class="flex items-center space-x-1 text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide"
          >
            <MapPin class="h-3 w-3" />
            <span>Address</span>
          </label>
          <Editable.Root
            value="123 Business Avenue, Suite 100, San Francisco, CA 94105"
            placeholder="Enter address..."
            activation-mode="click"
            auto-resize
          >
            <Editable.Area class="relative">
              <Editable.Input
                class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors resize-none min-h-[2.5rem]"
              />
              <Editable.Preview
                class="w-full px-3 py-2 text-sm rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-text transition-colors group-hover:ring-1 group-hover:ring-gray-200 dark:group-hover:ring-gray-700 min-h-[2.5rem] whitespace-pre-wrap"
              />
              <Edit3
                class="absolute right-2 top-2 h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              />
            </Editable.Area>
          </Editable.Root>
        </div>

        <!-- Phone -->
        <div class="group">
          <label
            class="flex items-center space-x-1 text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide"
          >
            <Phone class="h-3 w-3" />
            <span>Phone</span>
          </label>
          <Editable.Root
            value="+1 (555) 123-4567"
            placeholder="Enter phone number..."
            activation-mode="click"
          >
            <Editable.Area class="relative">
              <Editable.Input
                class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors min-h-[2.5rem]"
              />
              <Editable.Preview
                class="w-full px-3 py-2 text-sm rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-text transition-colors group-hover:ring-1 group-hover:ring-gray-200 dark:group-hover:ring-gray-700 min-h-[2.5rem]"
              />
              <Edit3
                class="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              />
            </Editable.Area>
          </Editable.Root>
        </div>

        <!-- Email -->
        <div class="group">
          <label
            class="flex items-center space-x-1 text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide"
          >
            <Mail class="h-3 w-3" />
            <span>Email</span>
          </label>
          <Editable.Root
            value="contact@acmecorp.com"
            placeholder="Enter email address..."
            activation-mode="click"
          >
            <Editable.Area class="relative">
              <Editable.Input
                class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors min-h-[2.5rem]"
              />
              <Editable.Preview
                class="w-full px-3 py-2 text-sm rounded-md text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-text transition-colors group-hover:ring-1 group-hover:ring-gray-200 dark:group-hover:ring-gray-700 min-h-[2.5rem]"
              />
              <Edit3
                class="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              />
            </Editable.Area>
          </Editable.Root>
        </div>
      </div>

      <div class="mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <p class="text-xs text-blue-700 dark:text-blue-300">
          💡 Hover over any field to see the edit indicator, then click to edit
          inline
        </p>
      </div>
    </div>
  </div>
</template>
