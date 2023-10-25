import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'
import { FC } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, { [cls[theme]]: true }, [className ? className : ''])} //TIPS вот тут тема задается иначе
      {...otherProps}>
      {children}
    </Link>
  )
}
