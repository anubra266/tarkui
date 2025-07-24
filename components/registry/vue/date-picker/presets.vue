<script setup lang="ts">
import { DatePicker, parseDate } from "@ark-ui/vue/date-picker";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-vue-next";

const datePresets = [
  {
    label: "Today",
    getValue: () => [parseDate(new Date())],
  },
  {
    label: "Yesterday",
    getValue: () => [parseDate(new Date()).subtract({ days: 1 })],
  },
  {
    label: "Last week",
    getValue: () => [parseDate(new Date()).subtract({ weeks: 1 })],
  },
  {
    label: "Last month",
    getValue: () => [parseDate(new Date()).subtract({ months: 1 })],
  },
  {
    label: "Last year",
    getValue: () => [parseDate(new Date()).subtract({ years: 1 })],
  },
];
</script>

<template>
  <DatePicker.Root
    :inline="true"
    :time-zone="Intl.DateTimeFormat().resolvedOptions().timeZone"
    :default-value="[parseDate(new Date()).subtract({ days: 7 })]"
  >
    <DatePicker.Content
      class="p-3 gap-3 flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden"
    >
      <!-- Presets Section -->
      <DatePicker.Context v-slot="api">
        <div
          class="border-r border-gray-200 dark:border-gray-700 pr-3 w-28 space-y-1"
        >
          <button
            v-for="preset in datePresets"
            :key="preset.label"
            @click="api.setValue(preset.getValue())"
            class="w-full px-2 py-1.5 text-sm text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all duration-200"
          >
            {{ preset.label }}
          </button>
        </div>
      </DatePicker.Context>

      <DatePicker.View view="day">
        <DatePicker.Context v-slot="api">
          <DatePicker.ViewControl
            class="flex items-center justify-between mb-3"
          >
            <DatePicker.PrevTrigger
              class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300"
            >
              <ChevronLeftIcon class="w-4 h-4" />
            </DatePicker.PrevTrigger>
            <DatePicker.ViewTrigger
              class="text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md transition-colors"
            >
              <DatePicker.RangeText />
            </DatePicker.ViewTrigger>
            <DatePicker.NextTrigger
              class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300"
            >
              <ChevronRightIcon class="w-4 h-4" />
            </DatePicker.NextTrigger>
          </DatePicker.ViewControl>
          <DatePicker.Table class="w-full">
            <DatePicker.TableHead>
              <DatePicker.TableRow>
                <DatePicker.TableHeader
                  v-for="(weekDay, id) in api.weekDays"
                  :key="id"
                  class="text-sm font-medium text-gray-500 dark:text-gray-400 w-9 h-7 text-center"
                >
                  {{ weekDay.narrow }}
                </DatePicker.TableHeader>
              </DatePicker.TableRow>
            </DatePicker.TableHead>
            <DatePicker.TableBody>
              <DatePicker.TableRow v-for="(week, id) in api.weeks" :key="id">
                <DatePicker.TableCell
                  v-for="(day, id) in week"
                  :key="id"
                  :value="day"
                  class="p-0"
                >
                  <DatePicker.TableCellTrigger
                    class="relative w-9 h-9 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg transition-colors data-[selected]:bg-gray-900 data-[selected]:text-white data-[selected]:rounded-lg dark:data-[selected]:bg-gray-200 dark:data-[selected]:text-gray-900 data-[outside-range]:text-gray-400 dark:data-[outside-range]:text-gray-500 data-[unavailable]:text-gray-400 dark:data-[unavailable]:text-gray-500 data-[unavailable]:line-through data-[unavailable]:pointer-events-none cursor-pointer flex items-center justify-center font-medium data-[today]:after:content-[''] data-[today]:after:absolute data-[today]:after:bottom-0.5 data-[today]:after:w-1 data-[today]:after:h-1 data-[today]:after:bg-gray-900 data-[today]:after:rounded-full dark:data-[today]:after:bg-gray-300 data-[selected]:data-[today]:after:bg-white dark:data-[selected]:data-[today]:after:bg-gray-900"
                  >
                    {{ day.day }}
                  </DatePicker.TableCellTrigger>
                </DatePicker.TableCell>
              </DatePicker.TableRow>
            </DatePicker.TableBody>
          </DatePicker.Table>
        </DatePicker.Context>
      </DatePicker.View>
      <DatePicker.View view="month">
        <DatePicker.Context v-slot="api">
          <DatePicker.ViewControl
            class="flex items-center justify-between mb-4"
          >
            <DatePicker.PrevTrigger
              class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300"
            >
              <ChevronLeftIcon class="w-4 h-4" />
            </DatePicker.PrevTrigger>
            <DatePicker.ViewTrigger
              class="text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md transition-colors"
            >
              <DatePicker.RangeText />
            </DatePicker.ViewTrigger>
            <DatePicker.NextTrigger
              class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300"
            >
              <ChevronRightIcon class="w-4 h-4" />
            </DatePicker.NextTrigger>
          </DatePicker.ViewControl>
          <DatePicker.Table class="w-full">
            <DatePicker.TableBody>
              <DatePicker.TableRow
                v-for="(months, id) in api.getMonthsGrid({
                  columns: 4,
                  format: 'short',
                })"
                :key="id"
              >
                <DatePicker.TableCell
                  v-for="(month, id) in months"
                  :key="id"
                  :value="month.value"
                >
                  <DatePicker.TableCellTrigger
                    class="w-16 h-10 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 hover:rounded-lg dark:hover:bg-gray-700 rounded-lg transition-colors data-[selected]:bg-gray-900 data-[selected]:text-white data-[selected]:rounded-lg dark:data-[selected]:bg-gray-200 dark:data-[selected]:text-gray-900 flex items-center justify-center font-medium"
                  >
                    {{ month.label }}
                  </DatePicker.TableCellTrigger>
                </DatePicker.TableCell>
              </DatePicker.TableRow>
            </DatePicker.TableBody>
          </DatePicker.Table>
        </DatePicker.Context>
      </DatePicker.View>
      <DatePicker.View view="year">
        <DatePicker.Context v-slot="api">
          <DatePicker.ViewControl
            class="flex items-center justify-between mb-4"
          >
            <DatePicker.PrevTrigger
              class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300"
            >
              <ChevronLeftIcon class="w-4 h-4" />
            </DatePicker.PrevTrigger>
            <DatePicker.ViewTrigger
              class="text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md transition-colors"
            >
              <DatePicker.RangeText />
            </DatePicker.ViewTrigger>
            <DatePicker.NextTrigger
              class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300"
            >
              <ChevronRightIcon class="w-4 h-4" />
            </DatePicker.NextTrigger>
          </DatePicker.ViewControl>
          <DatePicker.Table class="w-full">
            <DatePicker.TableBody>
              <DatePicker.TableRow
                v-for="(years, id) in api.getYearsGrid({ columns: 4 })"
                :key="id"
              >
                <DatePicker.TableCell
                  v-for="(year, id) in years"
                  :key="id"
                  :value="year.value"
                >
                  <DatePicker.TableCellTrigger
                    class="w-16 h-10 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 hover:rounded-lg dark:hover:bg-gray-700 rounded-lg transition-colors data-[selected]:bg-gray-900 data-[selected]:text-white data-[selected]:rounded-lg dark:data-[selected]:bg-gray-200 dark:data-[selected]:text-gray-900 flex items-center justify-center font-medium"
                  >
                    {{ year.label }}
                  </DatePicker.TableCellTrigger>
                </DatePicker.TableCell>
              </DatePicker.TableRow>
            </DatePicker.TableBody>
          </DatePicker.Table>
        </DatePicker.Context>
      </DatePicker.View>
    </DatePicker.Content>
  </DatePicker.Root>
</template>
