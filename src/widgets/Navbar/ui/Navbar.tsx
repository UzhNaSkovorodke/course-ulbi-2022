import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from '@shared/ui/AppLink/AppLink.tsx'
import { Button, ThemeButton } from '@shared/ui/Button/Button.tsx'
import { Modal } from '@shared/ui/Modal/Modal.tsx'
import { useState } from 'react'
import { LoginForm } from '../../../features/LoginForm'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isOpenAuth, setIsOpenAuth] = useState<boolean>(false)
  const authHandler = () => {
    setIsOpenAuth(true)
  }

  return (
    <div className={classNames(cls.navbar, [className ?? ''])}>
      <nav className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
          <Button onClick={() => authHandler()} theme={ThemeButton.INVERTED}>
            Авторизация
          </Button>
        </AppLink>
      </nav>
      {isOpenAuth && (
        <Modal isOpen={isOpenAuth} onClose={() => setIsOpenAuth(false)}>
          <LoginForm />
        </Modal>
      )}
    </div>
  )
}
