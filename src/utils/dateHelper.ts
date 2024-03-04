export function dateToHourAndMinuteString(date: Date): string {
  // https://imgflip.com/i/8hrgho
  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}
