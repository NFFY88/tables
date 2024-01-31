import classNames from 'classnames'
import React from 'react'

import ErrorText from '../ErrorText'
import style from './styles/input.module.scss'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = ({ className, error, ...props }: IInputProps): React.ReactElement => {
  const classes = classNames(style.wrap, className)
  const hasError = error !== undefined && error !== ''

  return (
    <div className={classes}>
      <input {...props} className={style.input} />
      {hasError ? <ErrorText error={error} /> : null}
    </div>
  )
}

export default Input
