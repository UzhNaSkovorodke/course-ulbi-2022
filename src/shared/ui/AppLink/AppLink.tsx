import {classNames} from 'helpers/ClassNames/classNames'
import {FC} from 'react'
import {Link, LinkProps} from 'react-router-dom'

import styles from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = function ({to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps}) {
  return (
    <Link to={to} className={classNames(styles.AppLink, {}, [className, styles[theme]])} {...otherProps}>
      {children}
    </Link>
  )
}
export default AppLink
