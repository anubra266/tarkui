<script setup lang="ts">
import { DatePicker, type DateValue, parseDate } from "@ark-ui/vue/date-picker";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

function getWeekOfYear(dateValue: DateValue) {
  const date = dateValue.toDate(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const jan1 = new Date(date.getFullYear(), 0, 1);
  const dayOfYear =
    Math.floor(
      (Number(date) -
        Number(jan1) +
        (jan1.getTimezoneOffset() - date.getTimezoneOffset()) * 60000) /
        86400000
    ) + 1;

  const jan1Day = jan1.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
  return Math.ceil((dayOfYear + jan1Day) / 7);
}
</script>

<template>
  <DatePicker.Root
    :inline="true"
    :default-value="[parseDate(new Date())]"
    :fixed-weeks="true"
    :time-zone="Intl.DateTimeFormat().resolvedOptions().timeZone"
  >
    <DatePicker.Content
      class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-3 inline-block"
    >
      <DatePicker.View view="day">
        <DatePicker.Context v-slot="api">
          <DatePicker.ViewControl
            class="flex items-center justify-between mb-3"
          >
            <DatePicker.PrevTrigger
              class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300"
            >
              <ChevronLeft class="w-4 h-4" />
            </DatePicker.PrevTrigger>
            <DatePicker.ViewTrigger
              class="text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md transition-colors"
            >
              <DatePicker.RangeText />
            </DatePicker.ViewTrigger>
            <DatePicker.NextTrigger
              class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300"
            >
              <ChevronRight class="w-4 h-4" />
            </DatePicker.NextTrigger>
          </DatePicker.ViewControl>
          <DatePicker.Table class="w-full">
            <DatePicker.TableHead>
              <DatePicker.TableRow>
                <th />
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
                <td
                  class="relative w-9 h-9 text-sm transition-colors rounded-lg text-gray-400 dark:text-gray-500 pointer-events-none flex items-center justify-center font-medium"
                >
                  {{ getWeekOfYear(week[0]) }}
                </td>
                <DatePicker.TableCell
                  v-for="(day, id) in week"
                  :key="id"
                  :value="day"
                  class="p-0"
                >
                  <DatePicker.TableCellTrigger
                    class="relative w-9 h-9 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors data-[selected]:bg-gray-900 data-[selected]:text-white rounded-lg dark:data-[selected]:bg-gray-200 dark:data-[selected]:text-gray-900 data-[outside-range]:text-gray-400 dark:data-[outside-range]:text-gray-500 flex items-center justify-center font-medium data-[today]:after:content-[''] data-[today]:after:absolute data-[today]:after:bottom-0.5 data-[today]:after:w-1 data-[today]:after:h-1 data-[today]:after:bg-gray-900 data-[today]:after:rounded-full dark:data-[today]:after:bg-gray-300 data-[selected]:data-[today]:after:bg-white dark:data-[selected]:data-[today]:after:bg-gray-900"
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
              <ChevronLeft class="w-4 h-4" />
            </DatePicker.PrevTrigger>
            <DatePicker.ViewTrigger
              class="text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md transition-colors"
            >
              <DatePicker.RangeText />
            </DatePicker.ViewTrigger>
            <DatePicker.NextTrigger
              class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300"
            >
              <ChevronRight class="w-4 h-4" />
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
              <ChevronLeft class="w-4 h-4" />
            </DatePicker.PrevTrigger>
            <DatePicker.ViewTrigger
              class="text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md transition-colors"
            >
              <DatePicker.RangeText />
            </DatePicker.ViewTrigger>
            <DatePicker.NextTrigger
              class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300"
            >
              <ChevronRight class="w-4 h-4" />
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
