import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { Button, ThemeButton } from '@shared/ui/Button/Button.tsx'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }
  return (
    <div
      className={classNames([cls.Sidebar, collapsed ? cls.collapsed : ''], {}, [className ?? ''])}>
      {/* TIPS: вот так как выше можно по условию выбрать тему*/}
      <Button type={'submit'} onClick={onToggle} theme={ThemeButton.PRIMARY} width={'100%'}>
        Клик
      </Button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
