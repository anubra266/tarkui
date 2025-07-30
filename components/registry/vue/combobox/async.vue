<script setup>
import { Combobox, useCombobox, useListCollection } from "@ark-ui/vue/combobox"
import { ChevronDownIcon, XIcon, LoaderIcon } from "lucide-vue-next"
import { ref, watch } from "vue"

// User type definition
interface User {
  id: number
  name: string
  email: string
  avatar: string
}

// Simulated API data
const allUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", avatar: "JD" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", avatar: "JS" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", avatar: "BJ" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", avatar: "AB" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", avatar: "CW" },
  { id: 6, name: "Diana Davis", email: "diana@example.com", avatar: "DD" },
]

// Simulate API call
const searchUsers = async (query: string): Promise<User[]> => {
  await new Promise(resolve => setTimeout(resolve, 500)) // Simulate network delay

  if (!query) return []

  return allUsers.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase()) ||
    user.email.toLowerCase().includes(query.toLowerCase())
  )
}

const isLoading = ref(false)
const inputValue = ref("")

const { collection, set } = useListCollection<User>({
  initialItems: [],
  itemToString: (item) => item.name,
  itemToValue: (item) => item.id.toString(),
})

const combobox = useCombobox({
  collection,
  placeholder: "Type to search users...",
  inputValue,
  onInputValueChange: (details) => {
    inputValue.value = details.inputValue
  },
})

watch(inputValue, async (newValue) => {
  if (newValue.length === 0) {
    set([])
    isLoading.value = false
    return
  }

  if (newValue.length < 2) {
    set([])
    isLoading.value = false
    return
  }

  isLoading.value = true
  try {
    const results = await searchUsers(newValue)
    set(results)
  } catch (error) {
    console.error("Failed to search users:", error)
    set([])
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <Combobox.RootProvider :value="combobox" class="w-full max-w-sm">
    <Combobox.Label
      class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
    >
      Search Users
    </Combobox.Label>
    <Combobox.Control class="relative">
      <Combobox.Input
        class="w-full px-3 py-2 pr-20 border border-gray-300 dark:border-gray-600 rounded-md shadow-xs bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
      />
      <div class="absolute inset-y-0 right-0 flex items-center">
        <LoaderIcon
          v-if="isLoading"
          class="h-4 w-4 text-blue-500 dark:text-blue-400 animate-spin mx-2"
        />
        <Combobox.ClearTrigger
          class="px-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <XIcon class="h-4 w-4" />
        </Combobox.ClearTrigger>
        <Combobox.Trigger
          class="px-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <ChevronDownIcon class="h-4 w-4" />
        </Combobox.Trigger>
      </div>
    </Combobox.Control>
    <Teleport to="body">
      <Combobox.Positioner>
        <Combobox.Content
          class="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 focus:outline-hidden z-50"
        >
          <Combobox.ItemGroup>
            <Combobox.ItemGroupLabel
              class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              Users
            </Combobox.ItemGroupLabel>

            <div
              v-if="isLoading"
              class="px-3 py-8 text-center text-gray-500 dark:text-gray-400"
            >
              <LoaderIcon
                class="h-5 w-5 animate-spin mx-auto mb-2 text-blue-500 dark:text-blue-400"
              />
              <p class="text-sm">Searching...</p>
            </div>
            <div
              v-else-if="collection.items.length === 0"
              class="px-3 py-8 text-center text-gray-500 dark:text-gray-400"
            >
              <p class="text-sm">
                {{
                  inputValue.length < 2
                    ? "Type at least 2 characters to search"
                    : "No users found"
                }}
              </p>
            </div>
            <template v-else>
              <Combobox.Item
                v-for="user in collection.items"
                :key="user.id"
                :item="user"
                class="relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 data-highlighted:bg-gray-50 dark:data-highlighted:bg-gray-700 transition-colors"
              >
                <div class="flex items-center">
                  <div
                    class="shrink-0 h-8 w-8 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-medium mr-3"
                  >
                    {{ user.avatar }}
                  </div>
                  <div class="flex-1 min-w-0">
                    <Combobox.ItemText
                      class="block text-sm font-medium text-gray-900 dark:text-gray-100 truncate"
                    >
                      {{ user.name }}
                    </Combobox.ItemText>
                    <p
                      class="text-sm text-gray-500 dark:text-gray-400 truncate"
                    >
                      {{ user.email }}
                    </p>
                  </div>
                </div>
                <Combobox.ItemIndicator
                  class="absolute inset-y-0 pr-3 text-blue-600 dark:text-blue-400"
                >
                  ✓
                </Combobox.ItemIndicator>
              </Combobox.Item>
            </template>
          </Combobox.ItemGroup>
        </Combobox.Content>
      </Combobox.Positioner>
    </Teleport>
  </Combobox.RootProvider>
</template>
