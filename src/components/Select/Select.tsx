import classNames from 'classnames'
import React, { forwardRef } from 'react'
import SelectComponent, { GroupBase } from 'react-select'
import SelectInstance from 'react-select/dist/declarations/src/Select'

import FieldError from '../FieldError'
import { ISelectProps } from './interfaces'
import customSelectStyles from './styles'
import style from './styles/select.module.scss'

const Select = forwardRef<SelectInstance<any, boolean, GroupBase<any>>, ISelectProps>(
  ({ className, error, ...props }, ref): React.ReactElement => {
    const classes = classNames(style.wrap, className)
    const hasError = error !== undefined && error !== ''

    return (
      <div className={classes}>
        <SelectComponent {...props} styles={customSelectStyles} ref={ref} />
        {hasError ? <FieldError error={error} /> : null}
      </div>
    )
  }
)

export default Select
