import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from '@shared/ui/AppLink/AppLink.tsx'
import { Button, ThemeButton } from '@shared/ui/Button/Button.tsx'
import { Modal } from '@shared/ui/Modal/Modal.tsx'
import { useState } from 'react'
import { LoginForm } from '../../../features/LoginForm'
import { RegistryForm } from '../../../features/RegistryForm'
import { Alarm } from '../../../features/Alarm'
import getCookieValue from '@shared/lib/getCookie/getCookie.ts'
import { getAccessToken } from '@entities/Auth/authService.ts'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isOpenAuth, setIsOpenAuth] = useState<boolean>(false)
  const [isOpenRegistry, setIsOpenRegistry] = useState<boolean>(false)
  const [isOpenAlarm, setIsOpenAlarm] = useState<boolean>(false)

  const authHandler = async () => {
    const refreshToken = getCookieValue('refresh')
    const accessToken = await getAccessToken(2, refreshToken)
    if (refreshToken) {
      console.log(accessToken)
    } else setIsOpenAuth(true)
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
      <Modal isOpen={isOpenAuth} onClose={() => setIsOpenAuth(false)}>
        <LoginForm
          setIsOpenRegistry={setIsOpenRegistry}
          setIsOpenAuth={setIsOpenAuth}
          setIsOpenAlarm={setIsOpenAlarm}
        />
      </Modal>
      <Modal isOpen={isOpenRegistry} onClose={() => setIsOpenRegistry(false)}>
        <RegistryForm
          setIsOpenRegistry={setIsOpenRegistry}
          setIsOpenAuth={setIsOpenAuth}
          setIsOpenAlarm={setIsOpenAlarm}
        />
      </Modal>

      <Modal isOpen={isOpenAlarm} onClose={() => setIsOpenAlarm(false)}>
        <Alarm textError={'Не удалось зайти или зарегистрироваться'} />
      </Modal>
    </div>
  )
}
