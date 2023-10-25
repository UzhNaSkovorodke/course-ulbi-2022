import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ThemeButton } from '@shared/ui/Button/Button.tsx'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className ?? ''])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
          <Button theme={ThemeButton.INVERTED}>Главная</Button>
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          <Button theme={ThemeButton.INVERTED}>О сайте</Button>
        </AppLink>
      </div>
    </div>
  )
}
