import classNames from 'classnames'
import React from 'react'

import style from './styles/button.module.scss'

interface ITextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'main' | 'red'
}

const TextButton = ({
  children,
  theme = 'main',
  className = '',
  ...props
}: ITextButtonProps): React.ReactElement => {
  const classes = classNames(style.base, style.textbtn, style[`textbtn--${theme}`], className)

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  )
}

export default TextButton
