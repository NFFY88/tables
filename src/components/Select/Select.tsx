import classNames from 'classnames'
import React from 'react'
import SelectComponent from 'react-select'

import ErrorText from '../ErrorText'
import { ISelectProps } from './interfaces'
import customSelectStyles from './styles'
import style from './styles/select.module.scss'

const Select = ({ className, error, ...props }: ISelectProps): React.ReactElement => {
  const classes = classNames(style.wrap, className)
  const hasError = error !== undefined && error !== ''

  return (
    <div className={classes}>
      <SelectComponent {...props} styles={customSelectStyles} />
      {hasError ? <ErrorText error={error} /> : null}
    </div>
  )
}

export default Select
