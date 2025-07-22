<script lang="ts">
  import { DatePicker, parseDate } from "@ark-ui/svelte/date-picker";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";

  const presets = [
    { label: "Last 3 days", value: "last3Days" },
    { label: "Last 7 days", value: "last7Days" },
    { label: "Last 14 days", value: "last14Days" },
    { label: "Last 30 days", value: "last30Days" },
    { label: "Last month", value: "lastMonth" },
    { label: "Year to date", value: "thisYear" },
    { label: "Last year", value: "lastYear" },
  ] as const;
</script>

<DatePicker.Root
  inline={true}
  defaultValue={[
    parseDate(new Date()),
    parseDate(new Date()).add({ days: 4 }),
  ]}
  selectionMode="range"
  timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone}
  onValueChange={(value) => {
    console.log(value);
  }}
>
  <DatePicker.Content class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-3 flex">
    <div class="border-r border-gray-200 dark:border-gray-700 pr-3 w-28 space-y-1">
      {#each presets as preset}
        <DatePicker.PresetTrigger
          value={preset.value}
          class="w-full px-2 py-1.5 text-sm text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all duration-200"
        >
          {preset.label}
        </DatePicker.PresetTrigger>
      {/each}
    </div>

    <DatePicker.View view="day">
      <DatePicker.Context>
        {#snippet render(api)}
          <DatePicker.ViewControl class="flex items-center justify-between mb-3">
            <DatePicker.PrevTrigger class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
              <ChevronLeft class="w-4 h-4" />
            </DatePicker.PrevTrigger>
            <DatePicker.ViewTrigger class="text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md transition-colors">
              <DatePicker.RangeText />
            </DatePicker.ViewTrigger>
            <DatePicker.NextTrigger class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
              <ChevronRight class="w-4 h-4" />
            </DatePicker.NextTrigger>
          </DatePicker.ViewControl>
          <DatePicker.Table class="w-full">
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
              {#each api().weeks as week, id}
                <DatePicker.TableRow>
                  {#each week as day, id}
                    <DatePicker.TableCell value={day} class="pe-0 ps-0">
                      <DatePicker.TableCellTrigger class="relative w-9 h-9 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg transition-colors data-[in-range]:bg-gray-100 dark:data-[in-range]:bg-gray-700 data-[outside-range]:pointer-events-none data-[outside-range]:text-gray-400 dark:data-[outside-range]:text-gray-500 flex items-center justify-center font-medium data-[today]:after:content-[''] data-[today]:after:absolute data-[today]:after:bottom-0.5 data-[today]:after:w-1 data-[today]:after:h-1 data-[today]:after:bg-gray-900 data-[today]:after:rounded-full dark:data-[today]:after:bg-gray-300 data-[selected]:data-[today]:after:bg-white dark:data-[selected]:data-[today]:after:bg-gray-900 data-[in-range]:rounded-none data-[in-range]:data-[range-start]:bg-gray-900 data-[in-range]:data-[range-start]:text-white dark:data-[in-range]:data-[range-start]:bg-gray-200 dark:data-[in-range]:data-[range-start]:text-gray-900 data-[in-range]:data-[range-end]:bg-gray-900 data-[in-range]:data-[range-end]:text-white dark:data-[in-range]:data-[range-end]:bg-gray-200 dark:data-[in-range]:data-[range-end]:text-gray-900 data-[range-start]:rounded-l-lg data-[range-end]:rounded-r-lg">
                        {day.day}
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
          <DatePicker.Table class="w-full">
            <DatePicker.TableBody>
              {#each api().getMonthsGrid({ columns: 4, format: "short" }) as months, id}
                <DatePicker.TableRow>
                  {#each months as month, id}
                    <DatePicker.TableCell value={month.value}>
                      <DatePicker.TableCellTrigger class="w-16 h-10 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 hover:rounded-lg dark:hover:bg-gray-700 rounded-lg transition-colors data-[selected]:bg-gray-900 data-[selected]:text-white data-[selected]:rounded-lg dark:data-[selected]:bg-gray-200 dark:data-[selected]:text-gray-900 flex items-center justify-center font-medium">
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
          <DatePicker.Table class="w-full">
            <DatePicker.TableBody>
              {#each api().getYearsGrid({ columns: 4 }) as years, id}
                <DatePicker.TableRow>
                  {#each years as year, id}
                    <DatePicker.TableCell value={year.value}>
                      <DatePicker.TableCellTrigger class="w-16 h-10 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 hover:rounded-lg dark:hover:bg-gray-700 rounded-lg transition-colors data-[selected]:bg-gray-900 data-[selected]:text-white data-[selected]:rounded-lg dark:data-[selected]:bg-gray-200 dark:data-[selected]:text-gray-900 flex items-center justify-center font-medium">
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