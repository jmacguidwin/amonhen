// remainingDays.js

export function getRemainingDays() {
    const date = new Date();
    const currentDay = date.getDate();
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    return daysInMonth - currentDay;
  }