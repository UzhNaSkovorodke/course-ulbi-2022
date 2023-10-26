import ThemeDark from './icons/theme-dark.svg?react'
import ThemeLight from './icons/theme-light.svg?react'
import ShowEye from './icons/eye.svg?react'
import MenuHamburger from './icons/mune_hamburger.svg?react'
interface IconProps {
  name?: IconName
  width?: string
  height?: string
  onClick: () => void
  className?: string
}

export const Icon = ({ name, width, height, ...rest }: IconProps) => {
  if (!name) {
    return null
  }
  const Component = ICON_TYPE_MAP[name]

  return <Component width={width ?? ''} height={height ?? ''} {...rest} />
}

export type IconName = keyof typeof ICON_TYPE_MAP

// eslint-disable-next-line react-refresh/only-export-components
export const ICON_TYPE_MAP = {
  ThemeDark: ThemeDark,
  ThemeLight: ThemeLight,
  ShowEye: ShowEye,
  MenuHamburger: MenuHamburger,
} as const
