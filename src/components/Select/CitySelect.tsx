import React, { forwardRef } from 'react'
import { GroupBase } from 'react-select'
import SelectInstance from 'react-select/dist/declarations/src/Select'

import { CITIES_LIST } from './const'
import { ISelectProps } from './interfaces'
import Select from './Select'

const citySelectProps = {
  placeholder: 'City',
  options: CITIES_LIST,
}

const CitySelect = forwardRef<SelectInstance<any, boolean, GroupBase<any>>, ISelectProps>(
  ({ className, error, ...props }: ISelectProps, ref): React.ReactElement => {
    const selectProps = {
      ...props,
      ...citySelectProps,
    }

    return <Select className={className} error={error} {...selectProps} ref={ref} />
  }
)

export default CitySelect
