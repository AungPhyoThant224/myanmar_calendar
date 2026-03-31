export const getDaysInMonth = (year: number, month: number) => {
  const date = new Date(year, month, 1);
  const days = [];
  
  const firstDayOfWeek = date.getDay(); 
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }

  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return days;
};

export const getMonthRange = (currentPage: number) => {
  const startMonth = currentPage * 4;
  const baseYear = 2021;
  return [0, 1, 2, 3].map(offset => {
    const totalMonths = startMonth + offset;
    const yearOffset = Math.floor(totalMonths / 12);
    const monthIndex = totalMonths % 12;
    return { month: monthIndex, year: baseYear + yearOffset };
  });
};

export const isSameDay = (d1: Date, d2: Date) => {
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
};

export const calculateInitialPage = () => {
    const today = new Date();
    const startYear = 2021;
    const monthsDiff =
      (today.getFullYear() - startYear) * 12 + today.getMonth();
    const initialPage = Math.floor(monthsDiff/4)
    return initialPage > 18 ? 18 : initialPage;
};

export const formatDateLocal = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
};