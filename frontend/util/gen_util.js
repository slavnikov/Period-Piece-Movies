export function translateDate(date) {
  if (date < 0) {
    return `${date * -1} BC`;
  } else {
    return `${date} AD`;
  }
}

export function dateRange(date1, date2) {
  if (date1 === date2) {
    return translateDate(date1);
  } else {
    return `${translateDate(date1)} - ${translateDate(date2)}`;
  }
}
