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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, children, radius = '5px', width = 'auto', height = '40px', ...rest } = props

  return (
    <button
      ref={ref}
      className={classNames([cls.button], [className ?? '', cls[props.theme ?? '']])}
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
