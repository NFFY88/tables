import classNames from 'classnames'
import React from 'react'

import { IRowData } from '../../interfaces'
import { TextButton } from '../Button'
import style from './styles/table.module.scss'

interface IRowProps {
  data: IRowData
  onChangeField: (row: IRowData) => void
  onDeleteField: (rowid: string) => void
}

const Row = ({ data, onChangeField, onDeleteField }: IRowProps): React.ReactElement => {
  const { id, name, surname, age, city } = data

  const buttonsCellClasses = classNames(style.table__td, style['table__td--buttons'])
  const nameAndSurnameClasses = classNames(style.table__td, style['table__td--name'])

  const handleChangeRow = (): void => {
    onChangeField(data)
  }

  const handleDeleteRow = (): void => {
    onDeleteField(id)
  }
  return (
    <tr>
      <td className={nameAndSurnameClasses}>{name}</td>
      <td className={nameAndSurnameClasses}>{surname}</td>
      <td className={style.table__td}>{age}</td>
      <td className={style.table__td}>{city}</td>
      <td className={buttonsCellClasses}>
        <TextButton theme='main' className={style.table__actionbtn} onClick={handleChangeRow}>
          Edit
        </TextButton>
        <TextButton theme='red' className={style.table__actionbtn} onClick={handleDeleteRow}>
          Delete
        </TextButton>
      </td>
    </tr>
  )
}

export default Row
