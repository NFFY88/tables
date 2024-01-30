import React, { PropsWithChildren } from 'react'

import classNames from 'classnames'

import style from './styles/button.module.scss'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'md' | 'lg'
  fullWidth?: boolean
}

const Button = ({
  size = 'md',
  type = 'button',
  children,
  fullWidth = false,
  className = '',
  ...props
}: PropsWithChildren<IButtonProps>): React.ReactElement => {
  const classes = classNames(style.base, style.button, {
    [style[`button--${size}`]]: size !== 'md',
    [style['button--fullwidth']]: fullWidth,
    [className]: className,
  })

  return (
    <button {...props} type={type} className={classes} >
      {children}
    </button>
  )
}

export default Button
