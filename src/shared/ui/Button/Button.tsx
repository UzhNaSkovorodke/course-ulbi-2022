import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, forwardRef } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export enum ThemeButton {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  INVERTED = 'inverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  tabIndex?: number
  radius?: string
  height?: string
  width?: string
  isDisabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props) => {
  const { className, children, radius = '5px', width = 'auto', height = '40px', ...rest } = props

  return (
    <button
      className={classNames(
        [cls.button],
        { [cls[props.theme ?? '']]: true }, //TIPS: использовать enum или as const как тему для button
        [className ?? '']
      )}
      tabIndex={props.tabIndex}
      style={{
        height: height,
        width: width,
        borderRadius: radius,
      }}
      onClick={() => {
        props.onClick ? props?.onClick() : ''
      }}
      disabled={props.isDisabled}
      {...rest}>
      {children}
    </button>
  )
})
