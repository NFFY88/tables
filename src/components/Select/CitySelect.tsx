import React from 'react'

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

const CitySelect = ({ className, error, ...props }: ISelectProps): React.ReactElement => {
  const selectProps = {
    ...props,
    ...citySelectProps,
  }

  return <Select className={className} error={error} {...selectProps} />
}

export default CitySelect
