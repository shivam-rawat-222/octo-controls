export class DateUtils {
  /**
   * Converts a given date to a UTC Date.
   * @param date - The input date (can be string or Date).
   * @returns UTC Date object.
   */
  static toUTCDate(date: string | Date): Date {
    let inputDate = new Date(date); // Convert input to Date object

    // Convert the date to UTC (ignore the time part)
    return new Date(Date.UTC(
      inputDate.getFullYear(),
      inputDate.getMonth(),
      inputDate.getDate()
    ));
  }
}
