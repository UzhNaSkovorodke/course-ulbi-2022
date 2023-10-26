import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className ?? ''])}>
      <nav className={cls.links}>
        {/*<AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>*/}
        {/*  <Button theme={ThemeButton.INVERTED}>Главная</Button>*/}
        {/*</AppLink>*/}
        {/*<AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>*/}
        {/*  <Button theme={ThemeButton.INVERTED}>О сайте</Button>*/}
        {/*</AppLink>*/}
      </nav>
    </div>
  )
}
