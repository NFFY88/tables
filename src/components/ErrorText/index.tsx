import classNames from 'classnames'
import React from 'react'

import style from './styles/error_text.module.scss'

interface IErrorTextProps {
  error: string
  className?: string
}

const ErrorText = ({ error, className }: IErrorTextProps): React.ReactElement => {
  const classes = classNames(style.error, className)

  return <span className={classes}>{error}</span>
}

export default ErrorText
