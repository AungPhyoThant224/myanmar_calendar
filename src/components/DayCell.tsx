import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import type { Holiday } from '../types/holiday';
import { isSameDay } from '../utils/calendarLogic';

interface DayCellProps {
  date: Date | null;
  holiday?: Holiday;
}

const DayCell =({ date, holiday }: DayCellProps) => {
  if (!date) return <div />;

  const today = new Date();
  const isToday = isSameDay(date, today);

  const isWeekend = date.getDay() === 0 || date.getDay() === 6;

  const cellClasses = `
    relative m-auto h-12 w-12 flex items-center justify-center rounded-xl text-sm transition-all
    ${isToday 
      ? 'bg-blue-600 text-white font-bold shadow-lg ring-2 ring-blue-300 ring-offset-2' 
      : holiday 
        ? 'bg-rose-100 text-rose-700 font-bold border border-rose-200' 
        : isWeekend 
          ? 'text-rose-400 font-medium hover:bg-slate-50' 
          : 'text-slate-600 hover:bg-slate-100'
    }
  `;

  const content = (
    <div className={cellClasses}>
      {date.getDate()}
      {/* Small dot for holidays if it's "Today" to show both states */}
      {holiday && isToday && (
        <span className="absolute top-1 right-1 w-2 h-2 bg-rose-400 rounded-full border border-white" />
      )}
    </div>
  );

  return holiday ? (
    <Tippy 
      content={
        <div className="p-2">
          <p className="font-bold text-sm">{holiday.name}</p>
          <p className="text-[10px] uppercase opacity-70">Public Holiday</p>
        </div>
      }
      theme="light-border"
      animation="scale"
    >
      {content}
    </Tippy>
  ) : (
    content
  );
}

export default DayCell;