declare module '*.scss' {
  type IClassNames = Record<string, string>

  const classNames: IClassNames
  export = classNames
}

declare module '*.png'; // нужно чтобы TypeScript мог работать с PNG
declare module '*.jpg'; // нужно чтобы TypeScript мог работать с JPG
declare module '*.jpeg'; // нужно чтобы TypeScript мог работать с JPEG
declare module '*.svg' { // нужно чтобы TypeScript мог работать с SVG
  import type React from 'react'

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}
declare const _isDev: boolean // нужно для того чтобы TypeScript видел, что в этой переменной будет храниться логический тип
// в этом файле перечислены типы которые используются в проекте
