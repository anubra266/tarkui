import { DatePicker, parseDate } from "@ark-ui/solid/date-picker";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-solid";

export default function WithButtonDatePicker() {
  return (
    <DatePicker.Root
      inline
      defaultValue={[parseDate(new Date()).subtract({ days: 11 })]}
      timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone}
    >
      <DatePicker.Content class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xs p-3 inline-block">
        <DatePicker.View view="day">
          <DatePicker.Context>
            {(api) => (
              <>
                <DatePicker.ViewControl class="flex items-center justify-between mb-3">
                  <DatePicker.PrevTrigger class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
                    <ChevronLeftIcon class="w-4 h-4" />
                  </DatePicker.PrevTrigger>
                  <DatePicker.ViewTrigger class="text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md transition-colors">
                    <DatePicker.RangeText />
                  </DatePicker.ViewTrigger>
                  <DatePicker.NextTrigger class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
                    <ChevronRightIcon class="w-4 h-4" />
                  </DatePicker.NextTrigger>
                </DatePicker.ViewControl>
                <DatePicker.Table class="w-full border-separate border-spacing-y-0.5">
                  <DatePicker.TableHead>
                    <DatePicker.TableRow>
                      {api().weekDays.map((weekDay, id) => (
                        <DatePicker.TableHeader
                          key={id}
                          class="text-sm font-medium text-gray-500 dark:text-gray-400 w-9 h-7 text-center"
                        >
                          {weekDay.narrow}
                        </DatePicker.TableHeader>
                      ))}
                    </DatePicker.TableRow>
                  </DatePicker.TableHead>
                  <DatePicker.TableBody>
                    {api().weeks.map((week, id) => (
                      <DatePicker.TableRow key={id}>
                        {week.map((day, id) => (
                          <DatePicker.TableCell
                            key={id}
                            value={day}
                            class="p-0"
                          >
                            <DatePicker.TableCellTrigger class="relative w-9 h-9 text-sm transition-colors data-outside-range:pointer-events-none flex items-center justify-center font-medium cursor-pointer data-today:after:content-[''] data-today:after:absolute data-today:after:bottom-0.5 data-today:after:w-1 data-today:after:h-1 data-today:after:rounded-full data-today:after:bg-gray-200 data-today:not-data-range-start:not-data-range-end:not-data-hover-range-start:not-data-hover-range-end:after:bg-gray-900 dark:data-today:after:bg-gray-900 data-outside-range:text-gray-400 dark:data-outside-range:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 data-in-range:not-data-range-start:not-data-range-end:not-data-hover-range-start:not-data-hover-range-end:bg-gray-100 dark:data-in-range:not-data-range-start:not-data-range-end:not-data-hover-range-start:not-data-hover-range-end:bg-gray-700 data-range-start:bg-gray-900 data-range-start:text-white dark:data-range-start:bg-gray-200 dark:data-range-start:text-gray-900 data-range-end:bg-gray-900 data-range-end:text-white dark:data-range-end:bg-gray-200 dark:data-range-end:text-gray-900 data-hover-range-start:bg-gray-900 data-hover-range-start:text-white dark:data-hover-range-start:bg-gray-200 dark:data-hover-range-start:text-gray-900 data-hover-range-end:bg-gray-900 data-hover-range-end:text-white dark:data-hover-range-end:bg-gray-200 dark:data-hover-range-end:text-gray-900 not-data-in-range:rounded-lg data-range-start:rounded-l-lg data-range-end:rounded-r-lg data-hover-range-start:rounded-l-lg data-hover-range-end:rounded-r-lg">
                              {day.day}
                            </DatePicker.TableCellTrigger>
                          </DatePicker.TableCell>
                        ))}
                      </DatePicker.TableRow>
                    ))}
                  </DatePicker.TableBody>
                </DatePicker.Table>

                {/* Buttons */}
                <div class="flex items-center mt-3 justify-between">
                  <button
                    onClick={() => api().setValue([parseDate(new Date())])}
                    class="px-2 py-1 text-xs font-medium text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                  >
                    Today
                  </button>
                  <button
                    onClick={() =>
                      api().focusMonth(parseDate(new Date()).month)
                    }
                    class="px-2 py-1 text-xs font-medium text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                  >
                    Current month
                  </button>
                </div>
              </>
            )}
          </DatePicker.Context>
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Context>
            {(api) => (
              <>
                <DatePicker.ViewControl class="flex items-center justify-between mb-4">
                  <DatePicker.PrevTrigger class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
                    <ChevronLeftIcon class="w-4 h-4" />
                  </DatePicker.PrevTrigger>
                  <DatePicker.ViewTrigger class="text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md transition-colors">
                    <DatePicker.RangeText />
                  </DatePicker.ViewTrigger>
                  <DatePicker.NextTrigger class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
                    <ChevronRightIcon class="w-4 h-4" />
                  </DatePicker.NextTrigger>
                </DatePicker.ViewControl>
                <DatePicker.Table class="w-full border-separate border-spacing-y-0.5">
                  <DatePicker.TableBody>
                    {api()
                      .getMonthsGrid({ columns: 4, format: "short" })
                      .map((months, id) => (
                        <DatePicker.TableRow key={id}>
                          {months.map((month, id) => (
                            <DatePicker.TableCell key={id} value={month.value}>
                              <DatePicker.TableCellTrigger class="w-16 h-10 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 hover:rounded-lg dark:hover:bg-gray-700 rounded-lg transition-colors data-selected:bg-gray-900 data-selected:text-white data-selected:rounded-lg dark:data-selected:bg-gray-200 dark:data-selected:text-gray-900 flex items-center justify-center font-medium">
                                {month.label}
                              </DatePicker.TableCellTrigger>
                            </DatePicker.TableCell>
                          ))}
                        </DatePicker.TableRow>
                      ))}
                  </DatePicker.TableBody>
                </DatePicker.Table>
              </>
            )}
          </DatePicker.Context>
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Context>
            {(api) => (
              <>
                <DatePicker.ViewControl class="flex items-center justify-between mb-4">
                  <DatePicker.PrevTrigger class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
                    <ChevronLeftIcon class="w-4 h-4" />
                  </DatePicker.PrevTrigger>
                  <DatePicker.ViewTrigger class="text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md transition-colors">
                    <DatePicker.RangeText />
                  </DatePicker.ViewTrigger>
                  <DatePicker.NextTrigger class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
                    <ChevronRightIcon class="w-4 h-4" />
                  </DatePicker.NextTrigger>
                </DatePicker.ViewControl>
                <DatePicker.Table class="w-full border-separate border-spacing-y-0.5">
                  <DatePicker.TableBody>
                    {api()
                      .getYearsGrid({ columns: 4 })
                      .map((years, id) => (
                        <DatePicker.TableRow key={id}>
                          {years.map((year, id) => (
                            <DatePicker.TableCell key={id} value={year.value}>
                              <DatePicker.TableCellTrigger class="w-16 h-10 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 hover:rounded-lg dark:hover:bg-gray-700 rounded-lg transition-colors data-selected:bg-gray-900 data-selected:text-white data-selected:rounded-lg dark:data-selected:bg-gray-200 dark:data-selected:text-gray-900 flex items-center justify-center font-medium">
                                {year.label}
                              </DatePicker.TableCellTrigger>
                            </DatePicker.TableCell>
                          ))}
                        </DatePicker.TableRow>
                      ))}
                  </DatePicker.TableBody>
                </DatePicker.Table>
              </>
            )}
          </DatePicker.Context>
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Root>
  );
}
