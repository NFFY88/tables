import React, { forwardRef } from 'react'
import { GroupBase } from 'react-select'
import SelectInstance from 'react-select/dist/declarations/src/Select'

import { ISelectProps } from './interfaces'
import Select from './Select'

const citySelectProps = {
  placeholder: 'City',
  options: [
    { label: 'Riga', value: 'Riga' },
    { label: 'Daugavpils', value: 'Daugavpils' },
    { label: 'Jūrmala', value: 'Jūrmala' },
    { label: 'Ventspils', value: 'Ventspils' },
  ],
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
