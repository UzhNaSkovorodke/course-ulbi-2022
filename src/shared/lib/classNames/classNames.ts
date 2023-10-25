type Mods = Record<string, boolean | string>

export function classNames(cls: string[] | string, mods: Mods, additional: string[]): string {
  return [
    Array.isArray(cls) ? cls.join(' ') : cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ')
}
