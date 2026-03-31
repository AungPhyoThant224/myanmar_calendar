import { getDaysInMonth } from '../utils/calendarLogic';
import DayCell from './DayCell';

interface MonthViewProps {
  year: number;
  month: number;
  getHolidayByDate: (date: Date) => any;
}

const DAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS_NAME = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const MonthView = ({ year, month, getHolidayByDate }: MonthViewProps) => {
  const days = getDaysInMonth(year, month);
  
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-lg font-bold text-slate-800 mb-4">
        {MONTHS_NAME[month]} {year}
      </h3>
      
      <div className="grid grid-cols-7 gap-2">
        {DAYS_SHORT.map(d => (
          <div key={d} className="text-center text-xs font-semibold text-slate-400 pb-2">
            {d}
          </div>
        ))}

        {days.map((date, idx) => (
          <DayCell 
            key={idx} 
            date={date} 
            holiday={date ? getHolidayByDate(date) : undefined} 
          />
        ))}
      </div>
    </div>
  );
}

export default MonthView;