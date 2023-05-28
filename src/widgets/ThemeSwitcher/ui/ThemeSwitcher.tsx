import {Button, Theme, useTheme} from '..'
import {classNames} from 'helpers/ClassNames/classNames'
import {FC} from 'react'
import DarkIcon from 'shared/assets/icons/moon.svg'
import LightIcon from 'shared/assets/icons/summer.svg'

import styles from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = function ({className}) {
  const {theme, toogleTheme} = useTheme()

  return (
    <Button className={classNames(styles.ThemeSwitcher, {}, [className])} onClick={toogleTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}
export default ThemeSwitcher
