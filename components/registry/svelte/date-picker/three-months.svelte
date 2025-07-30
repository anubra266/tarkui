<script lang="ts">
  import { DatePicker, parseDate } from "@ark-ui/svelte/date-picker";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";

  const NUM_OF_MONTHS = 3;
</script>

<DatePicker.Root
  inline={true}
  defaultValue={[
    parseDate(new Date()),
    parseDate(new Date()).add({ days: 48 }),
  ]}
  selectionMode="range"
  timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone}
  numOfMonths={NUM_OF_MONTHS}
>
  <DatePicker.Content class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xs py-3 inline-block">
    <DatePicker.View
      view="day"
      class="flex divide-x divide-gray-200 dark:divide-gray-700 relative"
    >
      <nav class="absolute w-full top-0 flex justify-between px-3 z-10">
        <DatePicker.PrevTrigger class="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
          <ChevronLeft class="w-4 h-4" />
        </DatePicker.PrevTrigger>
        <DatePicker.NextTrigger class="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
          <ChevronRight class="w-4 h-4" />
        </DatePicker.NextTrigger>
      </nav>
      <DatePicker.Context>
        {#snippet render(api)}
          {#each Array.from({ length: NUM_OF_MONTHS }) as _, index}
            {@const offset = api().getOffset({ months: index })}
            <div class="px-3">
              <DatePicker.ViewControl class="flex justify-center items-center mx-10 mb-1 h-9">
                <DatePicker.ViewTrigger class="z-20 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md transition-colors">
                  <span>
                    {new Intl.DateTimeFormat("default", {
                      month: "long",
                    }).format(
                      offset.visibleRange.start.toDate(
                        Intl.DateTimeFormat().resolvedOptions().timeZone
                      )
                    )} {offset.visibleRange.start.year}
                  </span>
                </DatePicker.ViewTrigger>
              </DatePicker.ViewControl>
              <DatePicker.Table>
                <DatePicker.TableHead>
                  <DatePicker.TableRow>
                    {#each api().weekDays as weekDay, id}
                      <DatePicker.TableHeader class="text-sm font-medium text-gray-500 dark:text-gray-400 w-9 h-7 text-center">
                        {weekDay.narrow}
                      </DatePicker.TableHeader>
                    {/each}
                  </DatePicker.TableRow>
                </DatePicker.TableHead>
                <DatePicker.TableBody>
                  {#each offset.weeks as week, id}
                    <DatePicker.TableRow>
                      {#each week as day, id}
                        <DatePicker.TableCell
                          value={day}
                          class="p-0"
                          visibleRange={offset.visibleRange}
                        >
                          <DatePicker.TableCellTrigger class="relative w-9 h-9 text-sm transition-colors data-outside-range:pointer-events-none flex items-center justify-center font-medium cursor-pointer data-today:after:content-[''] data-today:after:absolute data-today:after:bottom-0.5 data-today:after:w-1 data-today:after:h-1 data-today:after:rounded-full data-today:after:bg-gray-200 data-today:not-data-range-start:not-data-range-end:not-data-hover-range-start:not-data-hover-range-end:after:bg-gray-900 dark:data-today:after:bg-gray-900 data-outside-range:text-gray-400 dark:data-outside-range:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 data-in-range:not-data-range-start:not-data-range-end:not-data-hover-range-start:not-data-hover-range-end:bg-gray-100 dark:data-in-range:not-data-range-start:not-data-range-end:not-data-hover-range-start:not-data-hover-range-end:bg-gray-700 data-range-start:bg-gray-900 data-range-start:text-white dark:data-range-start:bg-gray-200 dark:data-range-start:text-gray-900 data-range-end:bg-gray-900 data-range-end:text-white dark:data-range-end:bg-gray-200 dark:data-range-end:text-gray-900 data-hover-range-start:bg-gray-900 data-hover-range-start:text-white dark:data-hover-range-start:bg-gray-200 dark:data-hover-range-start:text-gray-900 data-hover-range-end:bg-gray-900 data-hover-range-end:text-white dark:data-hover-range-end:bg-gray-200 dark:data-hover-range-end:text-gray-900 not-data-in-range:rounded-lg data-range-start:rounded-l-lg data-range-end:rounded-r-lg data-hover-range-start:rounded-l-lg data-hover-range-end:rounded-r-lg">
                            {day.day}
                          </DatePicker.TableCellTrigger>
                        </DatePicker.TableCell>
                      {/each}
                    </DatePicker.TableRow>
                  {/each}
                </DatePicker.TableBody>
              </DatePicker.Table>
            </div>
          {/each}
        {/snippet}
      </DatePicker.Context>
    </DatePicker.View>
    <DatePicker.View view="month">
      <DatePicker.Context>
        {#snippet render(api)}
          <DatePicker.ViewControl class="flex items-center justify-between mb-4">
            <DatePicker.PrevTrigger class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
              <ChevronLeft class="w-4 h-4" />
            </DatePicker.PrevTrigger>
            <DatePicker.ViewTrigger class="text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md transition-colors">
              <DatePicker.RangeText />
            </DatePicker.ViewTrigger>
            <DatePicker.NextTrigger class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
              <ChevronRight class="w-4 h-4" />
            </DatePicker.NextTrigger>
          </DatePicker.ViewControl>
          <DatePicker.Table class="w-full border-separate border-spacing-y-0.5">
            <DatePicker.TableBody>
              {#each api().getMonthsGrid({ columns: 4, format: "short" }) as months, id}
                <DatePicker.TableRow>
                  {#each months as month, id}
                    <DatePicker.TableCell value={month.value}>
                      <DatePicker.TableCellTrigger class="w-16 h-10 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 hover:rounded-lg dark:hover:bg-gray-700 rounded-lg transition-colors data-selected:bg-gray-900 data-selected:text-white data-selected:rounded-lg dark:data-selected:bg-gray-200 dark:data-selected:text-gray-900 flex items-center justify-center font-medium">
                        {month.label}
                      </DatePicker.TableCellTrigger>
                    </DatePicker.TableCell>
                  {/each}
                </DatePicker.TableRow>
              {/each}
            </DatePicker.TableBody>
          </DatePicker.Table>
        {/snippet}
      </DatePicker.Context>
    </DatePicker.View>
    <DatePicker.View view="year">
      <DatePicker.Context>
        {#snippet render(api)}
          <DatePicker.ViewControl class="flex items-center justify-between mb-4">
            <DatePicker.PrevTrigger class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
              <ChevronLeft class="w-4 h-4" />
            </DatePicker.PrevTrigger>
            <DatePicker.ViewTrigger class="text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md transition-colors">
              <DatePicker.RangeText />
            </DatePicker.ViewTrigger>
            <DatePicker.NextTrigger class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
              <ChevronRight class="w-4 h-4" />
            </DatePicker.NextTrigger>
          </DatePicker.ViewControl>
          <DatePicker.Table class="w-full border-separate border-spacing-y-0.5">
            <DatePicker.TableBody>
              {#each api().getYearsGrid({ columns: 4 }) as years, id}
                <DatePicker.TableRow>
                  {#each years as year, id}
                    <DatePicker.TableCell value={year.value}>
                      <DatePicker.TableCellTrigger class="w-16 h-10 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 hover:rounded-lg dark:hover:bg-gray-700 rounded-lg transition-colors data-selected:bg-gray-900 data-selected:text-white data-selected:rounded-lg dark:data-selected:bg-gray-200 dark:data-selected:text-gray-900 flex items-center justify-center font-medium">
                        {year.label}
                      </DatePicker.TableCellTrigger>
                    </DatePicker.TableCell>
                  {/each}
                </DatePicker.TableRow>
              {/each}
            </DatePicker.TableBody>
          </DatePicker.Table>
        {/snippet}
      </DatePicker.Context>
    </DatePicker.View>
  </DatePicker.Content>
</DatePicker.Root> 