import { useState } from 'react';
import type { Holiday } from '../types/holiday';
import { isSameDay } from '../utils/calendarLogic';

interface DayCellProps {
  date: Date | null;
  holiday?: Holiday;
}

const DayCell = ({ date, holiday }: DayCellProps) => {

  const [isVisible, setIsVisible] = useState(false);

  if (!date) return <div className="h-12 w-12 m-auto" />;

  const today = new Date();
  const isToday = isSameDay(date, today);
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;

  const getStyles = () => {
    if (isToday && holiday) {
      return 'bg-blue-600 text-white font-bold shadow-lg ring-4 ring-rose-400 ring-offset-1 z-10';
    }

    if (isToday) {
      return 'bg-blue-600 text-white font-bold shadow-lg ring-2 ring-blue-300 ring-offset-2 z-10';
    }

    if (holiday) {
      return 'bg-rose-100 text-rose-700 font-bold border border-rose-200';
    }

    if (isWeekend) {
      return 'text-rose-400 font-medium hover:bg-slate-50';
    }

    return 'text-slate-600 hover:bg-slate-100';
  };

  const cellClasses = `
    relative m-auto h-12 w-12 flex items-center justify-center rounded-xl text-sm transition-all group cursor-default
    ${getStyles()}
  `;

  return (
    <div className={cellClasses} 
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={() => setIsVisible(!isVisible)}>
      {date.getDate()}

      {holiday && isToday && (
        <span className="absolute top-1 right-1 w-2 h-2 bg-rose-300 rounded-full border border-blue-600" />
      )}

      {holiday && (
        <div className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 
                      pointer-events-none transition-opacity duration-200 w-max max-w-[120px]
                      ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-slate-800 text-white text-[12px] py-1.5 px-3 rounded-lg shadow-xl border border-slate-700">
            <p className="font-bold leading-tight">{holiday.name}</p>
            <p className="text-[9px] opacity-60 mt-1 uppercase tracking-wider">Public Holiday</p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DayCell;