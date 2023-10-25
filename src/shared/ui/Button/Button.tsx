import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, forwardRef } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  tabIndex?: number
  bgColor?: string
  radius?: string
  height?: string
  width?: string
  isDisabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props) => {
  const {
    className,
    children,
    bgColor = 'primary',
    radius = '5px',
    width = 'auto',
    height = '40px',
    ...rest
  } = props

  return (
    <button
      className={classNames(
        [cls.button, cls[`button__color_${bgColor}`]],
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
