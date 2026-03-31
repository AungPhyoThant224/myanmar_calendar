import { useState } from "react";
import MonthView from "./MonthView";
import { getMonthRange, calculateInitialPage } from "../utils/calendarLogic";
import { useHolidays } from "../hooks/useHolidays";

const CalendarLayout = () => {

  const [page, setPage] = useState(calculateInitialPage());
  const { getHolidayByDate, loading } = useHolidays();

  const monthsToShow = getMonthRange(page);

  const totalPages = 18;
  const isFirstPage = page === 0;
  const isLastPage = page === totalPages - 1
  
  if (loading)
    return <div className="p-10 text-center">Loading Calendar Data...</div>;

  return (
    <div className="max-w-6xl mx-auto px-2 md:px-6 py-6">
      <div className="flex justify-end items-center mb-8">
        <div className="flex gap-2">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={isFirstPage}
            className="px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages-1, p + 1))}
            disabled={isLastPage}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {monthsToShow.map(({ month, year }) => (
          <MonthView
            key={`${year}-${month}`}
            year={year}
            month={month}
            getHolidayByDate={getHolidayByDate}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarLayout;
