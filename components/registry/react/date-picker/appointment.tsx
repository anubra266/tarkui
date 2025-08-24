"use client";
import { DatePicker, parseDate } from "@ark-ui/react/date-picker";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const timeSlots = [
  { time: "09:00", available: false },
  { time: "09:30", available: false },
  { time: "10:00", available: true },
  { time: "10:30", available: true },
  { time: "11:00", available: true },
  { time: "11:30", available: true },
  { time: "12:00", available: false },
  { time: "12:30", available: true },
  { time: "13:00", available: true },
  { time: "13:30", available: true },
  { time: "14:00", available: true },
  { time: "14:30", available: false },
  { time: "15:00", available: false },
  { time: "15:30", available: true },
  { time: "16:00", available: true },
  { time: "16:30", available: true },
  { time: "17:00", available: true },
  { time: "17:30", available: true },
];

export default function AppointmentDatePicker() {
  const [selectedTime, setSelectedTime] = useState<string>();

  return (
    <DatePicker.Root
      inline
      timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone}
      defaultValue={[parseDate(new Date()).add({ days: 3 })]}
      isDateUnavailable={(date) => {
        // Past dates are unavailable
        return date.compare(parseDate(new Date())) <= 0;
      }}
    >
      <DatePicker.Content className="p-3 gap-3 flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xs overflow-hidden">
        <DatePicker.View view="day">
          <DatePicker.Context>
            {(api) => (
              <>
                <DatePicker.ViewControl className="flex items-center justify-between mb-3">
                  <DatePicker.PrevTrigger className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
                    <ChevronLeftIcon className="w-4 h-4" />
                  </DatePicker.PrevTrigger>
                  <DatePicker.ViewTrigger className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md transition-colors">
                    <DatePicker.RangeText />
                  </DatePicker.ViewTrigger>
                  <DatePicker.NextTrigger className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
                    <ChevronRightIcon className="w-4 h-4" />
                  </DatePicker.NextTrigger>
                </DatePicker.ViewControl>
                <DatePicker.Table className="w-full border-separate border-spacing-y-0.5">
                  <DatePicker.TableHead>
                    <DatePicker.TableRow>
                      {api.weekDays.map((weekDay, id) => (
                        <DatePicker.TableHeader
                          key={id}
                          className="text-sm font-medium text-gray-500 dark:text-gray-400 w-9 h-7 text-center"
                        >
                          {weekDay.narrow}
                        </DatePicker.TableHeader>
                      ))}
                    </DatePicker.TableRow>
                  </DatePicker.TableHead>
                  <DatePicker.TableBody>
                    {api.weeks.map((week, id) => (
                      <DatePicker.TableRow key={id}>
                        {week.map((day, id) => (
                          <DatePicker.TableCell
                            key={id}
                            value={day}
                            className="p-0"
                          >
                            <DatePicker.TableCellTrigger className="relative w-9 h-9 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg transition-colors data-selected:bg-gray-900 data-selected:text-white data-selected:rounded-lg dark:data-selected:bg-gray-200 dark:data-selected:text-gray-900 data-outside-range:text-gray-400 dark:data-outside-range:text-gray-500 data-unavailable:text-gray-400 dark:data-unavailable:text-gray-500 data-unavailable:line-through data-unavailable:pointer-events-none cursor-pointer flex items-center justify-center font-medium data-today:after:content-[''] data-today:after:absolute data-today:after:bottom-0.5 data-today:after:w-1 data-today:after:h-1 data-today:after:bg-gray-900 data-today:after:rounded-full dark:data-today:after:bg-gray-300 data-selected:data-today:after:bg-white dark:data-selected:data-today:after:bg-gray-900">
                              {day.day}
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
        <DatePicker.View view="month">
          <DatePicker.Context>
            {(api) => (
              <>
                <DatePicker.ViewControl className="flex items-center justify-between mb-4">
                  <DatePicker.PrevTrigger className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
                    <ChevronLeftIcon className="w-4 h-4" />
                  </DatePicker.PrevTrigger>
                  <DatePicker.ViewTrigger className="text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md transition-colors">
                    <DatePicker.RangeText />
                  </DatePicker.ViewTrigger>
                  <DatePicker.NextTrigger className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
                    <ChevronRightIcon className="w-4 h-4" />
                  </DatePicker.NextTrigger>
                </DatePicker.ViewControl>
                <DatePicker.Table className="w-full border-separate border-spacing-y-0.5">
                  <DatePicker.TableBody>
                    {api
                      .getMonthsGrid({ columns: 4, format: "short" })
                      .map((months, id) => (
                        <DatePicker.TableRow key={id}>
                          {months.map((month, id) => (
                            <DatePicker.TableCell key={id} value={month.value}>
                              <DatePicker.TableCellTrigger className="w-16 h-10 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 hover:rounded-lg dark:hover:bg-gray-700 rounded-lg transition-colors data-selected:bg-gray-900 data-selected:text-white data-selected:rounded-lg dark:data-selected:bg-gray-200 dark:data-selected:text-gray-900 flex items-center justify-center font-medium">
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
                <DatePicker.ViewControl className="flex items-center justify-between mb-4">
                  <DatePicker.PrevTrigger className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
                    <ChevronLeftIcon className="w-4 h-4" />
                  </DatePicker.PrevTrigger>
                  <DatePicker.ViewTrigger className="text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md transition-colors">
                    <DatePicker.RangeText />
                  </DatePicker.ViewTrigger>
                  <DatePicker.NextTrigger className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
                    <ChevronRightIcon className="w-4 h-4" />
                  </DatePicker.NextTrigger>
                </DatePicker.ViewControl>
                <DatePicker.Table className="w-full border-separate border-spacing-y-0.5">
                  <DatePicker.TableBody>
                    {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                      <DatePicker.TableRow key={id}>
                        {years.map((year, id) => (
                          <DatePicker.TableCell key={id} value={year.value}>
                            <DatePicker.TableCellTrigger className="w-16 h-10 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 hover:rounded-lg dark:hover:bg-gray-700 rounded-lg transition-colors data-selected:bg-gray-900 data-selected:text-white data-selected:rounded-lg dark:data-selected:bg-gray-200 dark:data-selected:text-gray-900 flex items-center justify-center font-medium">
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

        {/* Time Slots Section */}
        <DatePicker.Context>
          {(api) => {
            const selectedDate = api.value[0];
            const dateFormatter = new Intl.DateTimeFormat("en-US", {
              weekday: "long",
            });
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const formattedDate = selectedDate
              ? dateFormatter.format(selectedDate.toDate(timeZone)) +
                ", " +
                selectedDate.toDate(timeZone).getDate()
              : "";

            return (
              <div className="border-l border-gray-200 dark:border-gray-700 w-32 relative">
                <div className="absolute inset-0 pl-3 overflow-y-auto">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-4 shrink-0">
                    {formattedDate}
                  </h3>
                  <div className="space-y-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        onClick={() =>
                          slot.available && setSelectedTime(slot.time)
                        }
                        disabled={!slot.available}
                        className={`w-full px-2 py-1.5 text-sm rounded-lg border transition-all duration-200 shrink-0 ${
                          selectedTime === slot.time && slot.available
                            ? "bg-gray-900 text-white border-gray-900 dark:bg-gray-200 dark:text-gray-900 dark:border-gray-200"
                            : slot.available
                            ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-600 cursor-not-allowed"
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          }}
        </DatePicker.Context>
      </DatePicker.Content>
    </DatePicker.Root>
  );
}
