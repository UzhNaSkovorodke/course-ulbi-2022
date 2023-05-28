declare module '*.scss' {
  const content: {[key: string]: string}
  export default content
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare module '*.svg' {
  import React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGAElement>>
  export default SVG
}
