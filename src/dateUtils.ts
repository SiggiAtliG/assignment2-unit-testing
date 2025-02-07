import moment from "moment";
import { DATE_UNIT_TYPES } from "./constants";

export function getCurrentYear() {
  return moment().year();
}

export function add(
date: Date | string,
 number: number,
 type: string = DATE_UNIT_TYPES.DAYS)
: Date {
  return moment(date).add(number, type).toDate();
}

export function isWithinRange(date: Date | string, from: Date | 
string, to: Date | string): boolean {
  return moment(date).isBetween(from, to);
}

export function isDateBefore(date: Date | string, compareDate: 
Date | string): boolean {
  return moment(date).isBefore(compareDate);
}

export function isSameDay(date: Date | string, compareDate: Date | 
string): boolean {
  return moment(date).isSame(compareDate, 'day');
}
