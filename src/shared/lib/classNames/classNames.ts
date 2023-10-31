export function classNames(cls: string[] | string, additional: string[]): string {
  return [Array.isArray(cls) ? cls.join(' ') : cls, ...additional].join(' ')
}
