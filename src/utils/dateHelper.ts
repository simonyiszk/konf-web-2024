export function dateToHourAndMinuteString(date: Date): string {
  // https://imgflip.com/i/8hrgho
  return date.toLocaleTimeString('hu', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Budapest',
  });
}
