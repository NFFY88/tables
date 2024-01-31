import React from 'react'

import { Button, DeleteButton } from '@/components/Button'

import { IRowData } from './interfaces'
import Row from './Row'
import style from './styles/table.module.scss'

interface ITableProps {
  isDeletable?: boolean
  rows: IRowData[]
}

const Table = ({ isDeletable = false, rows }: ITableProps): React.ReactElement => {
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
            return <Row key={el.id} data={el} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
