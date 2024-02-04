import classNames from 'classnames'
import React from 'react'

import style from './styles/error_text.module.scss'

interface IFieldErrorProps {
  error: string
  className?: string
}

const FieldError = ({ error, className }: IFieldErrorProps): React.ReactElement => {
  const classes = classNames(style.error, className)

  return <span className={classes}>{error}</span>
}

export default FieldError
