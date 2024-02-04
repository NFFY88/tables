import classNames from 'classnames'
import React, { forwardRef } from 'react'

import FieldError from '../FieldError'
import style from './styles/input.module.scss'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = forwardRef<HTMLInputElement, IInputProps>(({ className, error, ...props }, ref) => {
  const classes = classNames(style.wrap, className)
  const hasError = error !== undefined && error !== ''

  return (
    <div className={classes}>
      <input {...props} className={style.input} ref={ref} />
      {hasError ? <FieldError error={error} /> : null}
    </div>
  )
})

export default Input
