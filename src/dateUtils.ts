import { addDays, isBefore, isWithinInterval, isSameDay, parseISO } 
from "date-fns";
import { isSameDay as dateFnsIsSameDay } from "date-fns";
import { DATE_UNIT_TYPES } from "./constants";

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

export function add(date: Date | string, number: number, type: 
string = DATE_UNIT_TYPES.DAYS): Date {
  const parsedDate = typeof date === "string" ? parseISO(date) : 
date;
  if (type === DATE_UNIT_TYPES.DAYS) {
    return addDays(parsedDate, number);
  }
  throw new Error(`Unsupported date unit type: ${type}`);
}

export function isWithinRange(date: Date | string, from: Date | 
string, to: Date | string): boolean {
  const parsedDate = typeof date === "string" ? parseISO(date) : 
date;
  const parsedFrom = typeof from === "string" ? parseISO(from) : 
from;
  const parsedTo = typeof to === "string" ? parseISO(to) : to;
  return isWithinInterval(parsedDate, { start: parsedFrom, end: 
parsedTo });
}

export function isDateBefore(date: Date | string, compareDate: Date 
| string): boolean {
  const parsedDate = typeof date === "string" ? parseISO(date) : 
date;
  const parsedCompareDate = typeof compareDate === "string" ? 
parseISO(compareDate) : compareDate;
  return isBefore(parsedDate, parsedCompareDate);
}


export function isSameDay(date: Date | string, compareDate: Date | string): boolean {
  const parsedDate = typeof date === "string" ? parseISO(date) : date;
  const parsedCompareDate = typeof compareDate === "string" ? parseISO(compareDate) : compareDate;
  
  return dateFnsIsSameDay(parsedDate, parsedCompareDate); // ✅ Correctly calls date-fns
}

