import classNames from 'classnames'
import React from 'react'

import { CrossIcon } from '../Icon'
import style from './styles/button.module.scss'

type IDeleteButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const DeleteButton = ({ className = '', ...props }: IDeleteButtonProps): React.ReactElement => {
  const classes = classNames(style.base, style.delete, className)

  return (
    <button {...props} type='button' className={classes}>
      <CrossIcon />
    </button>
  )
}

export default DeleteButton
