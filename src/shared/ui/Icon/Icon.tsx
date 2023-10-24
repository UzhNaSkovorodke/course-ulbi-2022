import ThemeDark from './icons/theme-dark.svg?react'
import ThemeLight from './icons/theme-light.svg?react'
interface IconProps {
  name: IconName
  onClick: () => void
  className?: string
}

export const Icon = ({ name, ...rest }: IconProps) => {
  const Component = ICON_TYPE_MAP[name]

  return <Component {...rest} />
}

export type IconName = keyof typeof ICON_TYPE_MAP

export const ICON_TYPE_MAP = {
  ThemeDark: ThemeDark,
  ThemeLight: ThemeLight,
} as const
