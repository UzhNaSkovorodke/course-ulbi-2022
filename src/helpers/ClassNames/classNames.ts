type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  //эта функция нужна чтобы было легче работать с классами
  return [
    cls,
    ...additional, // добавляем дополнительные классы
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ') // превращаем в строку с пробелом между классами
}

classNames('remove-btn', {hovered: true, selectable: true, red: false}, []) // на выходе будет класс: 'remove-btn hovered selectable red'
