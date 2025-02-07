import { describe, test, expect } from "vitest";
import { getCurrentYear, add, isWithinRange, isDateBefore, isSameDay } 
from "../dateUtils";

describe("Date Utils", () => {
  
  test("getCurrentYear should return the correct year", () => {
    const year = getCurrentYear();
    expect(year).toBe(new Date().getFullYear());
  });

  test("add should correctly add days to a date", () => {
    const initialDate = new Date("2023-01-01");
    const result = add(initialDate, 10, "days");
    expect(result.toISOString().slice(0, 10)).toBe("2023-01-11");
  });

  test("add should correctly handle string dates", () => {
    const initialDate = "2023-01-01";
    const result = add(initialDate, 5, "days");
    expect(result.toISOString().slice(0, 10)).toBe("2023-01-06");
  });

  test("isWithinRange should return true if the date is inside the range", () => {
    expect(isWithinRange("2024-06-10", "2024-06-01", "2024-06-30")).toBe(true);
  });

  test("isWithinRange should return false if the date is outside the range", () => {
    expect(isWithinRange("2024-07-01", "2024-06-01", "2024-06-30")).toBe(false);
  });

  test("isDateBefore should return true if the first date is before the second date", () => {
    expect(isDateBefore("2024-06-10", "2024-06-15")).toBe(true);
  });

  test("isDateBefore should return false if the first date is after the second date", () => {
    expect(isDateBefore("2024-06-20", "2024-06-10")).toBe(false);
  });

  test("isSameDay should return true if both dates are the same", () => {
    expect(isSameDay("2024-06-10", "2024-06-10")).toBe(true);
  });

  test("isSameDay should return false if the dates are different", () => {
    expect(isSameDay("2024-06-10", "2024-06-11")).toBe(false);
  });

});

