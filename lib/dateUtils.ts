export function formatVideoDuration(seconds: number) {
  const hours = ~~(seconds / 3600)
  const minutes = ~~(seconds % 3600 / 60)
  const remainingSeconds = ~~(seconds % 60)
  return `${hours !== 0 ? hours + ':' : ''}${minutes || 0}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
}

export function daysFromNow(date_string?: string): number | undefined {
  if (!date_string) return
  const date = new Date(date_string)
  if (!date.getTime()) return

  return ~~((new Date().getTime() - date.getTime()) / 8.64e+7)
}