const UNITS = {
  second: 60,
  minute: 60,
  hour: 24,
  day: 7,
  week: 4.35,
  month: 12,
  year: 10000
};

/**
 * @param {string} dateString - A date time string eg, "2018-09-22T16:25:14.543+08:00".
 */
export const timeSince = (dateString) => {
  let interval = 0 | (Date.now() - (new Date(dateString)).getTime()) / 1000; // 0 | 0.5 return 0
  let result;

  for (let unit in UNITS) {
      result = interval % UNITS[unit];
      if (!(interval = 0 | interval / UNITS[unit])) {
          return result + ' ' + (result - 1 ? unit + 's' : unit);
      }
  }
}
