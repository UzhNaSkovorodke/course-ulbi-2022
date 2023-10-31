import React, { forwardRef } from 'react'
import s from './Input.module.css'
import { classNames } from '@shared/lib/classNames/classNames.ts'

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isError?: boolean
  tabIndex?: number
  warningText?: string
  className?: string
  height?: string
  radius?: string
  post?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      isError = false,
      warningText,
      className,
      tabIndex = 1,
      radius = '5px',
      height,
      post,
      ...props
    },
    ref
  ) => {
    const classNameStatus: 'error' | 'warning' | 'normal' = isError ? 'error' : 'normal'
    return (
      <div className={s.input_wrapper}>
        <input
          autoComplete="on"
          className={classNames([s.input, s[`input__${classNameStatus}`]], [className ?? ''])}
          style={{
            height: height,
            borderRadius: radius,
          }}
          tabIndex={tabIndex}
          type={'text'}
          {...props}
          ref={ref}
        />
        <div className={s.post}>{post}</div>
        {warningText && isError && <span className={s.warning_text}>{warningText}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'
