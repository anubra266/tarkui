"use client";
import { DatePicker, parseDate } from "@ark-ui/react/date-picker";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const NUM_OF_MONTHS = 2;
const GOOD_PRICE_THRESHOLD = 100;

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const generateMockPriceData = () => {
  const data: Record<string, number> = {};
  const today = new Date();

  for (let i = 0; i < 180; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dateKey = formatDate(date);
    const randomPrice = Math.floor(Math.random() * (200 - 80 + 1)) + 80;
    data[dateKey] = randomPrice;
  }
  return data;
};

const mockPriceData = generateMockPriceData();

const isDateUnavailable = (date: Date) => {
  return !mockPriceData[formatDate(date)];
};

export default function PricingDatePicker() {
  return (
    <DatePicker.Root
      inline
      defaultValue={[parseDate(new Date())]}
      timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone}
      isDateUnavailable={(date) => {
        return isDateUnavailable(
          date.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone)
        );
      }}
      numOfMonths={NUM_OF_MONTHS}
    >
      <DatePicker.Content className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm py-3 inline-block">
        <DatePicker.View
          view="day"
          className="flex divide-x divide-gray-200 dark:divide-gray-700 relative"
        >
          <nav className="absolute w-full top-0 flex justify-between px-3 z-10">
            <DatePicker.PrevTrigger className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
              <ChevronLeftIcon className="w-4 h-4" />
            </DatePicker.PrevTrigger>
            <DatePicker.NextTrigger className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
              <ChevronRightIcon className="w-4 h-4" />
            </DatePicker.NextTrigger>
          </nav>
          <DatePicker.Context>
            {(api) =>
              Array.from({ length: NUM_OF_MONTHS }).map((_, index) => {
                const offset = api.getOffset({ months: index });
                return (
                  <div key={index} className="px-3">
                    <DatePicker.ViewControl className="flex justify-center items-center mx-10 mb-1 h-9">
                      <DatePicker.ViewTrigger className="z-20 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md transition-colors">
                        <span>
                          {new Intl.DateTimeFormat("default", {
                            month: "long",
                          }).format(
                            offset.visibleRange.start.toDate(
                              Intl.DateTimeFormat().resolvedOptions().timeZone
                            )
                          )}{" "}
                          {offset.visibleRange.start.year}
                        </span>
                      </DatePicker.ViewTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableHead>
                        <DatePicker.TableRow>
                          {api.weekDays.map((weekDay, id) => (
                            <DatePicker.TableHeader
                              key={id}
                              className="text-sm font-medium text-gray-500 dark:text-gray-400 w-12 h-7 text-center"
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
                                className="pe-0 ps-0"
                                visibleRange={offset.visibleRange}
                              >
                                <DatePicker.TableCellTrigger className="group relative w-12 h-12 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg data-[selected]:bg-gray-900 data-[selected]:text-white rounded-lg dark:data-[selected]:bg-gray-200 dark:data-[selected]:text-gray-900 transition-colors data-[outside-range]:hidden data-[unavailable]:text-gray-400 dark:data-[unavailable]:text-gray-500 data-[unavailable]:line-through data-[unavailable]:pointer-events-none cursor-pointer flex flex-col items-center justify-center font-medium gap-0.5">
                                  <span>{day.day}</span>
                                  {(() => {
                                    const dateKey = formatDate(
                                      day.toDate(
                                        Intl.DateTimeFormat().resolvedOptions()
                                          .timeZone
                                      )
                                    );
                                    const price = mockPriceData[dateKey];
                                    if (price) {
                                      const isGoodPrice =
                                        price <= GOOD_PRICE_THRESHOLD;
                                      return (
                                        <span
                                          className={`text-xs font-normal ${
                                            isGoodPrice
                                              ? "text-green-600 dark:text-green-400 dark:group-data-[selected]:text-green-600"
                                              : "text-gray-400 dark:text-gray-400 dark:group-data-[selected]:text-gray-600"
                                          }`}
                                        >
                                          ${price}
                                        </span>
                                      );
                                    }
                                    return null;
                                  })()}
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
                <DatePicker.Table className="w-full">
                  <DatePicker.TableBody>
                    {api
                      .getMonthsGrid({ columns: 4, format: "short" })
                      .map((months, id) => (
                        <DatePicker.TableRow key={id}>
                          {months.map((month, id) => (
                            <DatePicker.TableCell key={id} value={month.value}>
                              <DatePicker.TableCellTrigger className="w-16 h-10 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 hover:rounded-lg dark:hover:bg-gray-700 rounded-lg transition-colors data-[selected]:bg-gray-900 data-[selected]:text-white data-[selected]:rounded-lg dark:data-[selected]:bg-gray-200 dark:data-[selected]:text-gray-900 flex items-center justify-center font-medium">
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
                <DatePicker.Table className="w-full">
                  <DatePicker.TableBody>
                    {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                      <DatePicker.TableRow key={id}>
                        {years.map((year, id) => (
                          <DatePicker.TableCell key={id} value={year.value}>
                            <DatePicker.TableCellTrigger className="w-16 h-10 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 hover:rounded-lg dark:hover:bg-gray-700 rounded-lg transition-colors data-[selected]:bg-gray-900 data-[selected]:text-white data-[selected]:rounded-lg dark:data-[selected]:bg-gray-200 dark:data-[selected]:text-gray-900 flex items-center justify-center font-medium">
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
