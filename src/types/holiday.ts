export interface Holiday {
  id: number;
  date: string;
  name: string;
  type?: string;
}

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  holiday?: Holiday;
}