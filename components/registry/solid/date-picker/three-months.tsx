import { DatePicker, parseDate } from "@ark-ui/solid/date-picker";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-solid";

const NUM_OF_MONTHS = 3;
export default function ThreeMonthsDatePicker() {
  return (
    <DatePicker.Root
      inline
      defaultValue={[
        parseDate(new Date()),
        parseDate(new Date()).add({ days: 48 }),
      ]}
      selectionMode="range"
      timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone}
      numOfMonths={NUM_OF_MONTHS}
    >
      <DatePicker.Content class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm py-3 inline-block">
        <DatePicker.View
          view="day"
          class="flex divide-x divide-gray-200 dark:divide-gray-700 relative"
        >
          <nav class="absolute w-full top-0 flex justify-between px-3 z-10">
            <DatePicker.PrevTrigger class="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
              <ChevronLeftIcon class="w-4 h-4" />
            </DatePicker.PrevTrigger>
            <DatePicker.NextTrigger class="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
              <ChevronRightIcon class="w-4 h-4" />
            </DatePicker.NextTrigger>
          </nav>
          <DatePicker.Context>
            {(api) =>
              Array.from({ length: NUM_OF_MONTHS }).map((_, index) => {
                const offset = api().getOffset({ months: index });
                return (
                  <div key={index} class="px-3">
                    <DatePicker.ViewControl class="flex justify-center items-center mx-10 mb-1 h-9">
                      <DatePicker.ViewTrigger class="z-20 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md transition-colors">
                        <span>
                          {new Intl.DateTimeFormat("default", {
                            month: "long",
                          }).format(
                            offset.visibleRange.start.toDate("UTC")
                          )}{" "}
                          {offset.visibleRange.start.year}
                        </span>
                      </DatePicker.ViewTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
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
                        {offset.weeks.map((week, id) => (
                          <DatePicker.TableRow key={id}>
                            {week.map((day, id) => (
                              <DatePicker.TableCell
                                key={id}
                                value={day}
                                class="pe-0 ps-0"
                                visibleRange={offset.visibleRange}
                              >
                                <DatePicker.TableCellTrigger class="relative w-9 h-9 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg transition-colors data-[in-range]:bg-gray-100 dark:data-[in-range]:bg-gray-700 data-[outside-range]:hidden flex items-center justify-center font-medium data-[today]:after:content-[''] data-[today]:after:absolute data-[today]:after:bottom-0.5 data-[today]:after:w-1 data-[today]:after:h-1 data-[today]:after:bg-gray-900 data-[today]:after:rounded-full dark:data-[today]:after:bg-gray-300 data-[selected]:data-[today]:after:bg-white dark:data-[selected]:data-[today]:after:bg-gray-900 data-[in-range]:rounded-none data-[in-range]:data-[range-start]:bg-gray-900 data-[in-range]:data-[range-start]:text-white dark:data-[in-range]:data-[range-start]:bg-gray-200 dark:data-[in-range]:data-[range-start]:text-gray-900 data-[in-range]:data-[range-end]:bg-gray-900 data-[in-range]:data-[range-end]:text-white dark:data-[in-range]:data-[range-end]:bg-gray-200 dark:data-[in-range]:data-[range-end]:text-gray-900 data-[range-start]:rounded-l-lg data-[range-end]:rounded-r-lg">
                                  {day.day}
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </div>
                );
              })
            }
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
                <DatePicker.Table class="w-full">
                  <DatePicker.TableBody>
                    {api()
                      .getMonthsGrid({ columns: 4, format: "short" })
                      .map((months, id) => (
                        <DatePicker.TableRow key={id}>
                          {months.map((month, id) => (
                            <DatePicker.TableCell key={id} value={month.value}>
                              <DatePicker.TableCellTrigger class="w-16 h-10 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 hover:rounded-lg dark:hover:bg-gray-700 rounded-lg transition-colors data-[selected]:bg-gray-900 data-[selected]:text-white data-[selected]:rounded-lg dark:data-[selected]:bg-gray-200 dark:data-[selected]:text-gray-900 flex items-center justify-center font-medium">
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
                <DatePicker.Table class="w-full">
                  <DatePicker.TableBody>
                    {api()
                      .getYearsGrid({ columns: 4 })
                      .map((years, id) => (
                        <DatePicker.TableRow key={id}>
                          {years.map((year, id) => (
                            <DatePicker.TableCell key={id} value={year.value}>
                              <DatePicker.TableCellTrigger class="w-16 h-10 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 hover:rounded-lg dark:hover:bg-gray-700 rounded-lg transition-colors data-[selected]:bg-gray-900 data-[selected]:text-white data-[selected]:rounded-lg dark:data-[selected]:bg-gray-200 dark:data-[selected]:text-gray-900 flex items-center justify-center font-medium">
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
