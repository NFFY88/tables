import classNames from 'classnames'
import React from 'react'

import { TextButton } from '../Button'
import { IRowData } from './interfaces'
import style from './styles/table.module.scss'

interface IRowProps {
  data: IRowData
}

const Row = ({ data }: IRowProps): React.ReactElement => {
  const { name, surname, age, city } = data

  const buttonsCellClasses = classNames(style.table__td, style['table__td--buttons'])

  return (
    <tr>
      <td className={style.table__td}>{name}</td>
      <td className={style.table__td}>{surname}</td>
      <td className={style.table__td}>{age}</td>
      <td className={style.table__td}>{city}</td>
      <td className={buttonsCellClasses}>
        <TextButton theme='main' className={style.table__actionbtn}>
          Edit
        </TextButton>
        <TextButton theme='red' className={style.table__actionbtn}>
          Delete
        </TextButton>
      </td>
    </tr>
  )
}

export default Row
