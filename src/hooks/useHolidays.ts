import { useState, useEffect } from 'react';
import type { Holiday } from '../types/holiday';
import { formatDateLocal } from '../utils/calendarLogic';

export const useHolidays = () => {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        setLoading(true);
        // Simulating a REST API call to public folder
        const response = await fetch('/data/holidays.json');
        
        if (!response.ok) {
          throw new Error('Failed to fetch holiday data');
        }
        
        const data = await response.json();
        setHolidays(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchHolidays();
  }, []);

  const getHolidayByDate = (date: Date) => {
    const dateString = formatDateLocal(date);
    return holidays.find(h => h.date === dateString);
  };

  return { holidays, loading, error, getHolidayByDate };
};