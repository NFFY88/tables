import classNames from 'classnames'
import React from 'react'

import { Button, DeleteButton, TextButton } from '@/components/Button'
import { IRowData } from '@/interfaces'

import style from './styles/table.module.scss'

interface ITableProps {
  isDeletable?: boolean
  rows: IRowData[]
}

const Table = ({ isDeletable = false, rows }: ITableProps): React.ReactElement => {
  const buttonsCellClasses = classNames(style.table__td, style['table__td--buttons'])

  return (
    <div className={style.wrap}>
      <div className={style.head}>
        <Button>Copy table</Button>

        {isDeletable ? <DeleteButton /> : null}
      </div>

      <table className={style.table}>
        <thead className={style.table__thead}>
          <tr>
            <th className={style.table__th}>Name</th>
            <th className={style.table__th}>Surname</th>
            <th className={style.table__th}>Age</th>
            <th className={style.table__th}>City</th>
            <th className={style.table__th}></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((el) => {
            return (
              <tr key={el.id}>
                <td className={style.table__td}>{el.name}</td>
                <td className={style.table__td}>{el.surname}</td>
                <td className={style.table__td}>{el.age}</td>
                <td className={style.table__td}>{el.city}</td>
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
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
