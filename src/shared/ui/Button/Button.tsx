import {classNames} from 'helpers/ClassNames/classNames'
import {ButtonHTMLAttributes, FC} from 'react'

import styles from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

const Button: FC<ButtonProps> = function ({className, children, theme, ...otherProps}) {
  return (
    <button className={classNames(styles.Button, {}, [className, theme])} {...otherProps}>
      {children}
    </button>
  )
}
export default Button
