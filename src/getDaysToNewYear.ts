/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  //Напишите функцию для расчета количества дней, оставшихся до следующего Нового года (в 2023 году следующий Новый год приходится на 1 января 2024 года)
  const newYear = new Date(2024, 0, 1);
  let dateObj: Date;

  if (typeof targetDate === 'string') {
    const [day, month, year] = targetDate.split('.').map(Number);
    if (day !== undefined && month !== undefined && year !== undefined) {
      dateObj = new Date(year, month - 1, day);
    } else {
      throw new Error('Invalid date format');
    }
  } else {
    dateObj = targetDate;
  }

  const diffMillis = newYear.getTime() - dateObj.getTime();
  return Math.floor(diffMillis / (24 * 60 * 60 * 1000));
};
