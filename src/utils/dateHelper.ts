export function dateToHourAndMinuteString(date: Date): string {
  // https://imgflip.com/i/8hrgho
  return date.toLocaleTimeString('hu', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Budapest',
  });
}

export function getCurrentDate() {
  return new Date(2024, 2, 19, 14, 12);
  // return new Date();
}
