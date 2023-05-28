import {classNames} from 'helpers/ClassNames/classNames'
import AppLink, {AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'

import styles from './Navbar.module.scss'

interface Navbar {
  className?: string
}

export const Navbar = () => {
  return (
    <div className={classNames(styles.navbar)}>
      <ThemeSwitcher />
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={styles.mainLink} to={'/'}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} className={styles.mainLink} to={'/about'}>
          О себе
        </AppLink>
      </div>
    </div>
  )
}
